const fs = require('fs');
const path = require('path');
const envPath = path.join(process.cwd(), '.env.local');

try {
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        console.log("File content length:", content.length);

        const match = content.match(/GROQ_API_KEY=(.*)/);
        if (match && match[1]) {
            const key = match[1];
            console.log("Key found:", key);
            console.log("Key length:", key.length);
            console.log("Character codes:");
            for (let i = 0; i < key.length; i++) {
                console.log(`${i}: ${key[i]} (${key.charCodeAt(i)})`);
            }
        } else {
            console.log("GROQ_API_KEY not found in regex match");
        }
    } else {
        console.log(".env.local does not exist");
    }
} catch (e) {
    console.error("Error:", e);
}
