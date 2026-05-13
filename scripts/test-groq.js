const Groq = require("groq-sdk");
const fs = require('fs');
const path = require('path');
// Load env manually without dotenv
const envPath = path.join(process.cwd(), '.env.local');
try {
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const match = content.match(/GROQ_API_KEY=(.*)/);
        if (match && match[1]) {
            process.env.GROQ_API_KEY = match[1].trim();
        }
    }
} catch (e) {
    console.error("Failed to read .env.local:", e);
}

async function main() {
    console.log("Checking GROQ_API_KEY...");
    if (!process.env.GROQ_API_KEY) {
        console.error("ERROR: GROQ_API_KEY is missing");
        return;
    }
    console.log("Key found: " + process.env.GROQ_API_KEY.substring(0, 10) + "...");

    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
    });

    const models = [
        "llama-3.1-8b-instant",
        "llama-3.1-70b-versatile",
        "llama3-70b-8192",
        "mixtral-8x7b-32768",
        "gemma-7b-it"
    ];

    for (const model of models) {
        try {
            console.log(`\nTesting model: ${model}...`);
            const completion = await groq.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: "Explain 2+2 in one sentence."
                    }
                ],
                model: model,
            });
            console.log("Success!");
            console.log(completion.choices[0]?.message?.content);
            console.log(`WORKING MODEL FOUND: ${model}`);
            break;
        } catch (error) {
            console.error(`Error with ${model}:`, error.error?.message || error.message);
        }
    }
}

main();
