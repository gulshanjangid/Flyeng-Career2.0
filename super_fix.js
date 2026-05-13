const fs = require('fs');
const path = require('path');

const tsTypes = `export type Concept = {
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
`;

function extractDays(filePath) {
    if (!fs.existsSync(filePath)) return [];
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find everything between the outermost backticks.
    const firstTick = content.indexOf('\`');
    const lastTick = content.lastIndexOf('\`');
    if (firstTick === -1 || lastTick === -1) return [];
    
    let chunk = content.substring(firstTick + 1, lastTick);
    
    // Clean up escaping (the literal backslash followed by backtick that node string literal parsing might have escaped)
    chunk = chunk.split('\\\\\`').join('\`');
    
    return chunk;
}

// ---- Rebuild HTML/CSS ----
let htmlChunks = [
    extractDays(path.join(__dirname, 'TMP_create_htmlcss1.js')),
    extractDays(path.join(__dirname, 'TMP_create_htmlcss2.js')),
    extractDays(path.join(__dirname, 'TMP_create_htmlcss3.js'))
];

// For HTML/CSS:
// Chunk 1 starts with types and export const DAYS = [ { Day 1 } ... { Day 3} // TRUNCATED ];
// Let's strip the types and export array wrapper from Chunk 1:
let htmlDataStr = htmlChunks.join('\\n,\\n');
// Since chunk 1 has types, let's just use regex to extract ONLY the { title:"Day ... } blocks!
function parseOutDays(rawtext) {
    // Find all `{ title:"Day X` blocks using regex.
    const regex = /\{\\s*title\\s*:\\s*["']Day\\s+\\d+/g;
    let days = [];
    let match;
    let indices = [];
    while ((match = regex.exec(rawtext)) !== null) {
        indices.push(match.index);
    }
    
    for (let i = 0; i < indices.length; i++) {
        let start = indices[i];
        let end = (i === indices.length - 1) ? rawtext.length : indices[i+1];
        let dayBlock = rawtext.substring(start, end);
        
        let truncateIdx = dayBlock.indexOf('// WE TRUNCATED');
        if(truncateIdx !== -1) {
            dayBlock = dayBlock.substring(0, truncateIdx);
        }
        
        let closeIdx = dayBlock.lastIndexOf('];');
        if(closeIdx !== -1 && closeIdx > dayBlock.length - 50) {
            dayBlock = dayBlock.substring(0, closeIdx);
        }
        
        dayBlock = dayBlock.trim();
        if(dayBlock.endsWith(',')) {
            dayBlock = dayBlock.substring(0, dayBlock.length - 1).trim();
        }
        
        days.push(dayBlock);
    }
    return days;
}

let allDaysHtml = parseOutDays(htmlDataStr);
// Sort days by day number
allDaysHtml.sort((a,b) => {
    let numA = parseInt(a.match(/title\\s*:\\s*["']Day\\s+(\\d+)/)[1]);
    let numB = parseInt(b.match(/title\\s*:\\s*["']Day\\s+(\\d+)/)[1]);
    return numA - numB;
});

const finalHtmlContent = tsTypes + "\\nexport const DAYS: DayData[] = [\\n" + allDaysHtml.join(',\\n') + "\\n];\\n";
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), finalHtmlContent);


// ---- Rebuild React ----
let reactChunks = [
    extractDays(path.join(__dirname, 'TMP_create_react.js')),
    extractDays(path.join(__dirname, 'TMP_create_react2.js')),
    extractDays(path.join(__dirname, 'TMP_create_react3.js')),
    extractDays(path.join(__dirname, 'TMP_create_react4.js'))
];

let reactDataStr = reactChunks.join('\\n,\\n');
let allDaysReact = parseOutDays(reactDataStr);

allDaysReact.sort((a,b) => {
    let numA = parseInt(a.match(/title\\s*:\\s*["']Day\\s+(\\d+)/)[1]);
    let numB = parseInt(b.match(/title\\s*:\\s*["']Day\\s+(\\d+)/)[1]);
    return numA - numB;
});

const finalReactContent = tsTypes + "\\nexport const DAYS: DayData[] = [\\n" + allDaysReact.join(',\\n') + "\\n];\\n";
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), finalReactContent);

console.log('Rebuilt both data.ts successfully!');
