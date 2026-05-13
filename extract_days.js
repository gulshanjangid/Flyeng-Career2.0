const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\6476fc1a-f250-4ec7-8a29-d7e539a79891\\.system_generated\\logs\\overview.txt';

// Read the log file
const logContent = fs.readFileSync(logPath, 'utf8');

// The React code the user gave started with: const DAYS = [
const startString = 'const DAYS = [';
const startIndex = logContent.lastIndexOf(startString);

if (startIndex === -1) {
    console.log("Could not find startString in log.");
    process.exit(1);
}

// Find where the array ends
// Look for the `];` that follows the DAYS array. 
// Just before `// ─── STATE ────────────────────────────────────────────────────────────────────`
const endString = '];\n\n// ─── STATE ';
let endIndex = logContent.indexOf(endString, startIndex);

if (endIndex === -1) {
    console.log("Could not find endString in log.");
    // fallback
    endIndex = logContent.indexOf('];', startIndex + 5000);
}

const daysArrayString = logContent.substring(startIndex + 'const DAYS = '.length, endIndex + 1);

const preamble = `export type Concept = {
    name: string
    desc: string
    code: string
    tip: string
}
export type Exercise = {
    type: string
    pts: number
    q: string
    code: string
    kind: 'mc' | 'text'
    opts?: string[]
    correct?: number
    answer?: string[]
    hint: string
    sol: string
    explain: string
}
export type DayData = {
    title: string
    sub: string
    concepts: Concept[]
    exercises: Exercise[]
}

export const DAYS: DayData[] = `;

const fullFile = preamble + daysArrayString + ';';

fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), fullFile);
console.log("Successfully extracted DAYS array to data.ts");
