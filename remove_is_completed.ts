
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'lib/course-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove lines containing "isCompleted: false,"
// We will use a regex that matches the line with optional whitespace
const newContent = content.replace(/^\s*isCompleted: false,[\r\n]+/gm, '');

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Removed isCompleted: false lines.');
