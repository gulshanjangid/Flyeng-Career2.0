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

async function findModel() {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    // List of models to try, including older and newer ones
    const models = [
        "gemini-1.5-flash",
        "gemini-1.5-flash-001",
        "gemini-1.5-flash-latest",
        "gemini-pro",
        "gemini-1.0-pro",
        "gemini-1.5-pro",
        "gemini-1.5-pro-latest",
        "gemini-2.0-flash-exp"
    ];

    for (const modelName of models) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            await model.generateContent("Hi");
            fs.writeFileSync('debug_result.txt', `SUCCESS:${modelName}`);
            return;
        } catch (error) {
            // Continue
        }
    }

    fs.writeFileSync('debug_result.txt', "FAIL: No working models found.");
}

findModel();
