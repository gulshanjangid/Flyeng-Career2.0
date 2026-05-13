const fs = require('fs');
const path = require('path');

const tsTypes = `export type Concept = {
    name: string;
    desc: string;
    code: string;
    tip: string;
}
export type Exercise = {
    type: string;
    pts: number;
    q: string;
    code: string;
    kind: 'mc' | 'text';
    opts?: string[];
    correct?: number;
    answer?: string[];
    hint: string;
    sol: string;
    explain: string;
}
export type DayData = {
    title: string;
    sub: string;
    concepts: Concept[];
    exercises: Exercise[];
}
`;

function extractDays(filePath) {
    if (!fs.existsSync(filePath)) return [];
    let content = fs.readFileSync(filePath, 'utf8');
    
    const firstTick = content.indexOf('\`');
    const lastTick = content.lastIndexOf('\`');
    if (firstTick === -1 || lastTick === -1) return [];
    
    let chunk = content.substring(firstTick + 1, lastTick);
    // Remove escaped backticks if they exist.
    chunk = chunk.split('\\\\\`').join('\`');
    return chunk;
}

function parseOutDays(rawtext) {
    const correctRegex = /\{\s*title\s*:\s*["']Day\s+\d+/g;
    let days = [];
    let match;
    let indices = [];
    while ((match = correctRegex.exec(rawtext)) !== null) {
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

// For HTML/CSS:
let htmlChunks = [
    extractDays(path.join(__dirname, 'TMP_create_htmlcss1.js')),
    extractDays(path.join(__dirname, 'TMP_create_htmlcss2.js')),
    extractDays(path.join(__dirname, 'TMP_create_htmlcss3.js'))
];

let allDaysHtml = parseOutDays(htmlChunks.join('\\n,\\n'));
allDaysHtml.sort((a,b) => {
    let matchA = a.match(/title\s*:\s*["']Day\s+(\d+)/);
    let matchB = b.match(/title\s*:\s*["']Day\s+(\d+)/);
    let numA = matchA ? parseInt(matchA[1]) : 0;
    let numB = matchB ? parseInt(matchB[1]) : 0;
    return numA - numB;
});

const finalHtmlContent = tsTypes + "\\nexport const DAYS: DayData[] = [\\n" + allDaysHtml.join(',\\n') + "\\n];\\n";
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), finalHtmlContent);

// For React:
let reactChunks = [
    extractDays(path.join(__dirname, 'TMP_create_react.js')),
    extractDays(path.join(__dirname, 'TMP_create_react2.js')),
    extractDays(path.join(__dirname, 'TMP_create_react3.js')),
    extractDays(path.join(__dirname, 'TMP_create_react4.js'))
];

let allDaysReact = parseOutDays(reactChunks.join('\\n,\\n'));
allDaysReact.sort((a,b) => {
    let matchA = a.match(/title\s*:\s*["']Day\s+(\d+)/);
    let matchB = b.match(/title\s*:\s*["']Day\s+(\d+)/);
    let numA = matchA ? parseInt(matchA[1]) : 0;
    let numB = matchB ? parseInt(matchB[1]) : 0;
    return numA - numB;
});

const finalReactContent = tsTypes + "\\nexport const DAYS: DayData[] = [\\n" + allDaysReact.join(',\\n') + "\\n];\\n";
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'), finalReactContent);

console.log('Rebuilt both properly.');
