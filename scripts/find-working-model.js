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

async function findWorkingModel() {
    const models = ['gemini-pro', 'gemini-1.5-flash', 'gemini-1.5-pro-latest', 'gemini-1.0-pro'];

    console.log(`Using API Key: ${apiKey.substring(0, 10)}...`);

    for (const modelName of models) {
        console.log(`\nTesting ${modelName}...`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Say hello");
            const response = await result.response;
            console.log(`SUCCESS: ${modelName} works! Response: ${response.text()}`);
            return; // Stop after finding one
        } catch (error) {
            console.log(`FAILED: ${modelName}`);
            console.log(`Error: ${error.message}`);
        }
    }
    console.log("\nNo working models found.");
}

findWorkingModel();
