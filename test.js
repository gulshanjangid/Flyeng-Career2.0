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
}`;

function evaluateChunk(file) {
    if (!fs.existsSync(file)) return null;
    let content = fs.readFileSync(file, 'utf8');
    
    // The node scripts usually do:
    // const dataTS = `export type ...
    // export const DAYS: DayData[] = [
    // { title: ... }
    // ];
    // `
    
    // We just want to extract the content inside the backticks, evaluate it as JS!
    const firstTick = content.indexOf('\`');
    const lastTick = content.lastIndexOf('\`');
    if (firstTick === -1 || lastTick === -1) return null;
    
    let chunk = content.substring(firstTick + 1, lastTick);
    
    // Now chunk is a string that represents TypeScript code.
    // It looks like:
    // export type ...
    // export const DAYS: DayData[] = [
    // { title: ... },
    // // WE TRUNCATED ...
    // ];
    
    // We want the array [ { title: ... } ]
    // Let's use regex to find `{ title:"Day X` blocks just like before.
    
    const correctRegex = /\{\\s*title\\s*:\\s*["']Day\\s+\\d+/g;
    let days = [];
    let match;
    let indices = [];
    while ((match = correctRegex.exec(chunk)) !== null) {
        indices.push(match.index);
    }
    
    for (let i = 0; i < indices.length; i++) {
        let start = indices[i];
        let end = (i === indices.length - 1) ? chunk.length : indices[i+1];
        let dayBlock = chunk.substring(start, end);
        
        // Chop off any trailing stuff added by LLM truncations
        let truncateIdx = dayBlock.indexOf('// WE TRUNCATED');
        if(truncateIdx !== -1) {
            dayBlock = dayBlock.substring(0, truncateIdx);
        }
        
        let closeIdx = dayBlock.lastIndexOf('];');
        if(closeIdx !== -1 && closeIdx > dayBlock.length - 50) {
            dayBlock = dayBlock.substring(0, closeIdx);
        }
        
        dayBlock = dayBlock.trim();
        // Remove trailing commas
        if(dayBlock.endsWith(',')) {
            dayBlock = dayBlock.substring(0, dayBlock.length - 1).trim();
        }
        
        days.push(dayBlock);
    }
    return days;
}

function processAndWrite(files, destPath) {
    let allDayStrings = [];
    for(let f of files) {
        let days = evaluateChunk(f);
        if(days) allDayStrings.push(...days);
    }
    
    // the day blocks are strings representing JS objects.
    // We can evaluate them!
    // But since they might contain \` directly, how do we evaluate them?
    
    let arrayString = "[" + allDayStrings.join(',') + "]";
    
    // Wait... if we just evaluate arrayString, it will fail if there are syntax errors!
    // But the earlier error was TS compiling it! `npx tsc` failed because `code:\`...
    // In node, `code:\`` is a syntax error!
    // So we CANNOT eval without replacing the erroneous backslashes.
    
    // The LLM wrote `code:\`<!DOCTYPE html>... \``
    // So it wrote `\` before the starting and ending backticks!
    // Which means we MUST replace \` with ` !
    // Let's replace literally \` with ` inside the raw array string!
    
    // Also, the LLM wrote \\\$ to escape dollars. We need to turn that into \$ ?
    // No, if the LLM wrote \\\$, it's because it was escaping it in a JS string that evaluated to \$.
    
    // Basically, what we need is:
    // arrayString = arrayString.replace(/\\\\\\\`/g, '\\`'); // this is what broke!
    
    console.log("Processing arrays for " + destPath);
}

// Wait, JSON.stringify doesn't help if we can't parse it into memory.
// Let's just do text fixups using a very safe node script!
