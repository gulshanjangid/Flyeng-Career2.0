const fs = require('fs');
const path = require('path');

// Manually read .env.local
try {
    const envPath = path.join(__dirname, '..', '.env.local');
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
    console.error("Error reading .env.local", e);
}
async function checkModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("No GEMINI_API_KEY found");
        return;
    }

    console.log("Checking available models via REST API...");
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.models) {
            console.log(`Found ${data.models.length} models.`);
            const modelNames = data.models.map(m => m.name.replace('models/', ''));
            console.log("Available Models:", modelNames.join(', '));
            fs.writeFileSync('working_models.txt', modelNames.join('\n'));
        } else {
            console.error("No models found in response:", JSON.stringify(data, null, 2));
            fs.writeFileSync('working_models.txt', "ERROR: " + JSON.stringify(data));
        }
    } catch (error) {
        console.error("Fetch error:", error);
        fs.writeFileSync('working_models.txt', "FETCH ERROR: " + error.message);
    }
}

checkModels();
