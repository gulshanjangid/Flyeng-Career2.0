const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Manually load .env.local
try {
    const envPath = path.join(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
    }
} catch (e) {
    console.error("Error loading .env.local", e);
}

async function testGemini() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY not found in .env.local");
        return;
    }
    console.log("✅ API Key found (length: " + apiKey.length + ")");

    const genAI = new GoogleGenerativeAI(apiKey);

    const modelsToTry = ["gemini-pro", "gemini-1.5-flash", "gemini-1.5-flash-001"];

    for (const modelName of modelsToTry) {
        console.log(`Testing: ${modelName}`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hi");
            console.log(`SUCCESS: ${modelName}`);
            return;
        } catch (error) {
            console.log(`FAIL: ${modelName} - ${error.message.split('\n')[0]}`);
        }
    }
    console.log("All models failed.");
}

testGemini();
