const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

try {
    const envConfig = fs.readFileSync(path.resolve('.env.local'), 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim().replace(/"/g, ''); // Remove quotes if any
        }
    });
} catch (e) {
    console.log("Could not read .env.local");
}

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // There isn't a direct listModels on the client instance in some versions, 
        // but let's try to just run a simple generation to see if it works or fails with a specific error
        // Actually, let's try to use the model manager if available or just test a known working model.

        // Better approach: try to generate content with a few candidate names
        const candidates = ["gemini-1.5-flash-001", "gemini-1.5-pro", "gemini-pro"];

        for (const modelName of candidates) {
            console.log(`Testing model: ${modelName}`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                console.log(`SUCCESS: ${modelName} works!`);
                return; // Found a working one
            } catch (error) {
                console.log(`FAILED: ${modelName} - ${error.message.split('\n')[0]}`);
            }
        }
    } catch (e) {
        console.error("Fatal error:", e);
    }
}

listModels();
