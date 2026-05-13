// Using built-in fetch

async function testCompiler() {
    console.log("Testing Compiler Run...");
    try {
        const response = await fetch('http://localhost:3000/api/compiler/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: 'print("Hello from AI Compiler")',
                language: 'python'
            }),
        });

        if (!response.ok) {
            console.error('Run API Error:', response.status);
            console.error(await response.text());
        } else {
            const data = await response.json();
            console.log('Run Output:', data.output);
        }
    } catch (error) {
        console.error('Run Fetch Error:', error);
    }

    console.log("\nTesting Compiler Analyze...");
    try {
        const response = await fetch('http://localhost:3000/api/compiler/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1] :\n                arr[j], arr[j+1] = arr[j+1], arr[j]',
                language: 'python'
            }),
        });

        if (!response.ok) {
            console.error('Analyze API Error:', response.status);
            console.error(await response.text());
        } else {
            const data = await response.json();
            console.log('Analyze Output Length:', data.analysis ? data.analysis.length : 0);
            console.log('Analyze Preview:', data.analysis ? data.analysis.substring(0, 100) + "..." : "No analysis");
        }
    } catch (error) {
        console.error('Analyze Fetch Error:', error);
    }
}

testCompiler();
