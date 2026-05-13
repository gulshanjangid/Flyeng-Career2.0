const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'app/ai-tools/bootcamp/js-exercises/page.tsx');
const targetFile = path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/page.tsx');

let content = fs.readFileSync(sourceFile, 'utf8');

// Replacements to brand it as React
content = content.replace(/JS Bootcamp/g, 'React Bootcamp');
content = content.replace(/'js_bootcamp_progress'/g, "'react_bootcamp_progress'");
content = content.replace(/'js_bootcamp_score'/g, "'react_bootcamp_score'");
content = content.replace(/'js_bootcamp_read'/g, "'react_bootcamp_read'");

// Optionally, change some color variables if there are hardcoded JS yellows we want React cyan/blue
content = content.replace(/text-amber-400 fill-amber-400/g, 'text-cyan-400 fill-cyan-400');
content = content.replace(/from-indigo-500\/20 to-teal-500\/20/g, 'from-blue-600\/20 to-cyan-500\/20');
content = content.replace(/border-indigo-500\/30/g, 'border-cyan-500\/30');
content = content.replace(/text-teal-400/g, 'text-cyan-400');
content = content.replace(/text-teal-500/g, 'text-cyan-500');
content = content.replace(/bg-teal-500\/20/g, 'bg-cyan-500\/20');
content = content.replace(/border-teal-500\/30/g, 'border-cyan-500\/30');
content = content.replace(/rgba\(45,212,191,0\.2\)/g, 'rgba(34,211,238,0.2)'); // teal to cyan glow
content = content.replace(/bg-teal-500/g, 'bg-cyan-500');
content = content.replace(/hover:bg-teal-400/g, 'hover:bg-cyan-400');
content = content.replace(/text-teal-950/g, 'text-cyan-950');

fs.writeFileSync(targetFile, content);
console.log('React bootcamp page.tsx created successfully');
