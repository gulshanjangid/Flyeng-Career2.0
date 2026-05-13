const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load env vars
const envLocalPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
    const envConfig = dotenv.parse(fs.readFileSync(envLocalPath));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

async function testGen() {
    console.log("Checking GEMINI_API_KEY...");
    if (!process.env.GEMINI_API_KEY) {
        console.error("ERROR: GEMINI_API_KEY is missing in process.env");
        return;
    }
    console.log("Key found (length: " + process.env.GEMINI_API_KEY.length + ")");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate a quiz about "React Hooks".
    Difficulty: Medium
    Number of questions: 2
    
    Return ONLY a valid JSON array of objects. No markdown formatting, no code blocks.
    Each object should have:
    - question: string
    - options: array of 4 strings
    - correctIndex: number (0-3)
    - explanation: string
    `;

    console.log("Sending request to Gemini...");
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("Response received:");
        console.log(text);

        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        JSON.parse(cleanedText);
        console.log("JSON parse successful.");
    } catch (error) {
        console.error("Error during generation:", error);
    }
}

testGen();
