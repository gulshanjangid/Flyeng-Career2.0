async function testRefinements() {
    console.log("Testing Compiler Refinements...\n");

    // Test 1: Run Code (Ensure it still works)
    console.log("1. Testing Run API (Python)...");
    try {
        const runResponse = await fetch('http://localhost:3000/api/compiler/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: 'print("Refinement Test Successful")',
                language: 'python'
            }),
        });
        const runData = await runResponse.json();
        console.log("   Output:", runData.output?.trim());
        if (runData.output?.trim() === "Refinement Test Successful") {
            console.log("   ✅ Run API Passed");
        } else {
            console.log("   ❌ Run API Failed");
        }
    } catch (e) {
        console.error("   ❌ Run API Error:", e.message);
    }

    // Test 2: Analyze Code (Ensure it returns JSON)
    console.log("\n2. Testing Analyze API (JSON Structure)...");
    try {
        const analyzeResponse = await fetch('http://localhost:3000/api/compiler/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1] :\n                arr[j], arr[j+1] = arr[j+1], arr[j]',
                language: 'python'
            }),
        });
        const analyzeData = await analyzeResponse.json();
        const analysis = analyzeData.analysis;

        console.log("   Received Analysis Type:", typeof analysis);

        if (typeof analysis === 'object' && analysis.timeComplexity && analysis.bugs) {
            console.log("   ✅ Analysis is valid JSON Object");
            console.log("   Time Complexity:", analysis.timeComplexity);
            console.log("   Bugs Found:", analysis.bugs.length);
        } else {
            console.log("   ❌ Analysis is NOT valid JSON Object");
            console.log("   Received:", analysis);
        }

    } catch (e) {
        console.error("   ❌ Analyze API Error:", e.message);
    }
}

testRefinements();
