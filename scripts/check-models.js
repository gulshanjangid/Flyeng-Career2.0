const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Read API key manually
const envPath = path.join(process.cwd(), '.env.local');
let apiKey = ''; 
try {
    const content = fs.readFileSync(envPath, 'utf8');
    const match = content.match(/GEMINI_API_KEY=(.*)/);
    if (match && match[1]) apiKey = match[1].trim();
} catch (e) { }

if (!apiKey) {
    console.error("No API Key found");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        // There isn't a direct listModels method in the high-level SDK easily accessible in all versions,
        // but we can try a simple generation with a known fallback or just try to use 'gemini-pro' to see if it works.
        // Actually, let's just try to generate with 'gemini-pro' and 'gemini-1.5-flash' and see which one succeeds.

        const modelsToTest = ['gemini-1.5-flash', 'gemini-pro', 'gemini-1.0-pro', 'gemini-1.5-pro'];

        console.log("Testing models...");

        for (const modelName of modelsToTest) {
            console.log(`\nTesting ${modelName}...`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                const response = await result.response;
                console.log(`SUCCESS: ${modelName} works!`);
            } catch (error) {
                console.log(`FAILED: ${modelName} - ${error.message.split('\n')[0]}`);
            }
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
