const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

try {
    const envConfig = fs.readFileSync(path.resolve('.env.local'), 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim().replace(/"/g, '');
        }
    });
} catch (e) {
    console.log("Could not read .env.local");
}

async function testModel() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const modelName = "gemini-pro";
    console.log(`Testing model: ${modelName}`);

    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello, are you working?");
        const response = await result.response;
        console.log(`SUCCESS: ${modelName} responded:`, response.text());
    } catch (error) {
        console.error(`FAILED: ${modelName}`);
        console.error("Error details:", error.message);
        if (error.response) {
            console.error("Response status:", error.response.status);
        }
    }
}

testModel();
