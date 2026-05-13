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

async function testFlash2() {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const modelName = "gemini-2.0-flash";
    console.log(`Testing ${modelName} with JSON mode...`);

    try {
        const model = genAI.getGenerativeModel({
            model: modelName,
            generationConfig: { responseMimeType: "application/json" }
        });

        const result = await model.generateContent("Return a JSON object with a greeting property.");
        console.log(`SUCCESS: ${result.response.text()}`);
    } catch (error) {
        console.log(`FAIL: ${error.message}`);
    }
}

testFlash2();
