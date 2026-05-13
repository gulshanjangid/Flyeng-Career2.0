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

async function findWorkingModel() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY not found");
        return;
    }

    console.log("Fetching available models...");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.models) {
            console.error("No models list returned:", data);
            return;
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // Filter for generateContent supported models
        const chatModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));

        console.log(`Found ${chatModels.length} candidate models.`);

        for (const modelInfo of chatModels) {
            // Strip 'models/' prefix if present
            const modelName = modelInfo.name.replace('models/', '');
            console.log(`Testing: ${modelName}`);

            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hi");
                const text = result.response.text();
                console.log(`✅ SUCCESS with ${modelName}!`);
                return; // Found one!
            } catch (error) {
                console.log(`❌ Failed: ${modelName} - ${error.message.split('\n')[0]}`);
            }
        }

        console.log("No working models found.");

    } catch (error) {
        console.error("Error:", error.message);
    }
}

findWorkingModel();
