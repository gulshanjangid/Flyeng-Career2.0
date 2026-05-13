import { toast } from "sonner";

export type ExecutionResult = {
    output: string;
    error?: string;
};

// --- WANDBOX API (C++, Java) ---
const WANDBOX_API = "https://wandbox.org/api/compile.json";

const WANDBOX_RUNTIMES: Record<string, string> = {
    'cpp': 'gcc-head',
    'c++': 'gcc-head',
    'java': 'openjdk-head',
    'python': 'cpython-head',
};

async function runWandbox(language: string, code: string, stdin: string = ""): Promise<ExecutionResult> {
    const compiler = WANDBOX_RUNTIMES[language.toLowerCase()];
    if (!compiler) {
        return { output: "", error: `Unsupported language for Wandbox: ${language}` };
    }

    try {
        const response = await fetch(WANDBOX_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                compiler: compiler,
                code: code,
                stdin: stdin,
                save: false
            })
        });

        const data = await response.json();

        if (data.status === "0") {
            return {
                output: (data.program_output || "") + (data.compiler_message ? `\nCompiler Message:\n${data.compiler_message}` : ""),
            };
        } else {
             return {
                 output: data.program_output || "",
                 error: data.compiler_error || data.program_error || "Compilation/Execution Failed"
             };
        }
    } catch (e: any) {
        return { output: "", error: `Execution Failed: ${e.message}` };
    }
}

// --- JAVASCRIPT LOCAL (Web Worker) ---
async function runJavascript(code: string, stdin: string = ""): Promise<ExecutionResult> {
    return new Promise((resolve) => {
        const workerCode = `
            self.onmessage = function(e) {
                const { code, stdin } = e.data;
                let logs = [];
                
                // Mock console.log
                const originalLog = console.log;
                console.log = (...args) => {
                    logs.push(args.map(a => {
                        try {
                            return String(a);
                        } catch(e) {
                            return "[Complex Object]";
                        }
                    }).join(' '));
                };

                // Mock prompt() for input
                let inputLines = (stdin || "").split('\\n');
                let inputIndex = 0;
                
                self.prompt = (message) => {
                   if (message) {
                       logs.push(String(message));
                   }
                   const val = inputIndex < inputLines.length ? inputLines[inputIndex++] : "";
                   // Echo input
                   logs.push(val); 
                   return val;
                };
                
                try {
                    // Execute Code
                    const func = new Function(code);
                    func();
                    self.postMessage({ output: logs.join('\\n') });
                } catch (err) {
                    self.postMessage({ error: err.toString() });
                }
            };
        `;

        const blob = new Blob([workerCode], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);
        const worker = new Worker(url);

        let timeout = setTimeout(() => {
            worker.terminate();
            resolve({ output: "", error: "Execution Timed Out (5s limit)" });
        }, 5000);

        worker.onmessage = (e) => {
            clearTimeout(timeout);
            worker.terminate();
            resolve(e.data);
        };

        worker.onerror = (e) => {
            clearTimeout(timeout);
            worker.terminate();
            resolve({ output: "", error: "Worker Error: " + e.message });
        };

        worker.postMessage({ code, stdin });
    });
}

// --- PYTHON LOCAL (Pyodide) ---
// Global Pyodide instance
let pyodide: any = null;
let pyodideReadyPromise: Promise<void> | null = null;

export async function initPyodide() {
    if (pyodideReadyPromise) return pyodideReadyPromise;

    pyodideReadyPromise = new Promise(async (resolve, reject) => {
        if ((window as any).loadPyodide) {
            try {
                pyodide = await (window as any).loadPyodide({
                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
                });
                console.log("Pyodide Loaded");
                resolve();
            } catch (e) {
                reject(e);
            }
        } else {
            // Load script dynamically
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
            script.onload = async () => {
                try {
                    pyodide = await (window as any).loadPyodide({
                        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
                    });
                    console.log("Pyodide Loaded");
                    resolve();
                } catch (e) {
                    reject(e);
                }
            };
            script.onerror = () => reject("Failed to load Pyodide script");
            document.body.appendChild(script);
        }
    });

    return pyodideReadyPromise;
}

async function runPython(code: string, stdin: string = ""): Promise<ExecutionResult> {
    if (!pyodide) {
        await initPyodide();
    }

    try {
        // Redirection of stdout and mocking stdin
        // Escape backslashes and quotes in stdin for Python string literal
        const safeStdin = stdin.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
        
        // Define a custom input() function to handle echoing
        const setupCode = `
import sys
import io
import builtins

# Reset buffers
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
sys.stdin = io.StringIO('${safeStdin}')

# Custom input function to mimic terminal behavior
def input(prompt=""):
    if prompt:
        print(prompt, end="")
    line = sys.stdin.readline()
    # Echo the input back to stdout (mimic user typing)
    if line:
        print(line.strip())
    return line.strip()

# Override built-in input securely
builtins.input = input
`;
        
        await pyodide.runPythonAsync(setupCode);
        await pyodide.runPythonAsync(code);
        
        const stdout = pyodide.runPython("sys.stdout.getvalue()");
        const stderr = pyodide.runPython("sys.stderr.getvalue()");

        return {
            output: stdout + (stderr ? `\nError:\n${stderr}` : "")
        };
    } catch (e: any) {
        return { output: "", error: e.toString() };
    }
}


// --- MAIN EXECUTOR ---
export async function executeCode(language: string, code: string, stdin: string = ""): Promise<ExecutionResult> {
    const lang = language.toLowerCase();

    // 1. Python -> Local Pyodide
    if (lang === 'python') {
        try {
            return await runPython(code, stdin);
        } catch (e) {
            console.error("Pyodide failed, falling back to Wandbox", e);
            return await runWandbox('python', code, stdin);
        }
    }

    // 2. JavaScript -> Local Web Worker
    if (lang === 'javascript' || lang === 'js') {
        return await runJavascript(code, stdin);
    }

    // 3. C++ / Java -> Wandbox API
    if (lang === 'cpp' || lang === 'c++') return await runWandbox('cpp', code, stdin);
    if (lang === 'java') return await runWandbox('java', code, stdin);

    return { output: "", error: `Language ${language} not supported yet.` };
}
