export type LogEntry = {
    type: 'log' | 'error' | 'success' | 'info';
    text: string;
};

export type EvaluationResult = {
    logs: LogEntry[];
    success: boolean;
};

// Map languages to piston API standard endpoints
const PISTON_LANG_VERSIONS: Record<string, string> = {
    python: "3.10.0",
    java: "15.0.2",
    cpp: "10.2.0"
};

/**
 * Executes code. 
 * If JS: Uses browser sandbox.
 * If Python/Java/C++: Calls Piston v2 free API.
 * If No Tests / React / CSS: Skips evaluation, just returns success for AI Review.
 */
export async function safeEvaluateResult(
    code: string, 
    functionName: string, 
    testCases: {input: string, expected: string}[],
    language: string
): Promise<EvaluationResult> {
    const logs: LogEntry[] = [];
    
    // Auto-pass for conceptual/web problems without test cases
    if (testCases.length === 0 || language === 'react' || language === 'html') {
        logs.push({ type: 'info', text: 'Evaluation bypassed. Submitted directly to Senior Tech Lead for code review.' });
        return { logs, success: true };
    }

    if (language === 'javascript') {
        let success = true;
        const originalConsoleLog = console.log;

        try {
            console.log = (...args: any[]) => {
                const formattedArgs = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');
                logs.push({ type: 'log', text: formattedArgs });
            };

            let executionScript = `
                ${code}
                let allPassed = true;
            `;

            testCases.forEach((tc, i) => {
                executionScript += `
                try {
                    if (typeof ${functionName} !== 'function') throw new Error("Function '${functionName}' is not defined.");
                    const result = ${functionName}(${tc.input});
                    const expected = ${tc.expected};
                    const isMatch = JSON.stringify(result) === JSON.stringify(expected);
                    
                    if (!isMatch) {
                        allPassed = false;
                        console.log("❌ Test ${i + 1} Failed. Expected: " + JSON.stringify(expected) + ", Got: " + JSON.stringify(result));
                    } else {
                        console.log("✅ Test ${i + 1} Passed.");
                    }
                } catch(e) {
                    allPassed = false;
                    console.log("❌ Test ${i + 1} Threw Exception: " + e.message);
                }
                `;
            });
            executionScript += `return allPassed;`;

            const evaluateTest = new Function(executionScript);
            success = evaluateTest();

        } catch (error: any) {
            success = false;
            logs.push({ type: 'error', text: `Syntax/Global Error: ${error.message}` });
        } finally {
            console.log = originalConsoleLog;
        }

        return { logs, success };
        
    } else {
        // Use Piston API for Python, Java, C++
        logs.push({ type: 'info', text: `Sending to Piston Runtime (${language})...` });
        try {
            const pistonLang = language === "c++" ? "c++" : language;
            const res = await fetch("https://emkc.org/api/v2/piston/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    language: language === "cpp" ? "c++" : language,
                    version: PISTON_LANG_VERSIONS[language] || "*",
                    files: [{ content: code }]
                })
            });
            
            const data = await res.json();
            
            if (data.run?.stderr) {
                logs.push({ type: 'error', text: data.run.stderr });
            }
            if (data.run?.stdout) {
                logs.push({ type: 'log', text: data.run.stdout });
            }
            
            if (data.compile?.stderr) {
                 logs.push({ type: 'error', text: "Compilation Error: " + data.compile.stderr });
            }

            // For external languages, we just grab output. The AI will judge correctness based on stdout.
            return { logs, success: !data.run?.stderr && !data.compile?.stderr };
            
        } catch (err: any) {
            logs.push({ type: 'error', text: `Piston API Error: ${err.message}` });
            return { logs, success: false };
        }
    }
}
