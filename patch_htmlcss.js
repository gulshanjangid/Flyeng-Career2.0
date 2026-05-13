const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'app/ai-tools/bootcamp/js-exercises/page.tsx');
const targetFile = path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/page.tsx');

let content = fs.readFileSync(sourceFile, 'utf8');

// Replace Text references
content = content.replace(/JS Bootcamp/g, 'HTML/CSS Bootcamp');
content = content.replace(/'js_bootcamp_progress'/g, "'html_bootcamp_progress'");
content = content.replace(/'js_bootcamp_score'/g, "'html_bootcamp_score'");
content = content.replace(/'js_bootcamp_read'/g, "'html_bootcamp_read'");

// Update Theme Colors (JS is Yellow/Teal mostly, let's map it to Orange/Blue for HTML/CSS)
content = content.replace(/text-teal-400/g, 'text-orange-400');
content = content.replace(/text-teal-500/g, 'text-orange-500');
content = content.replace(/bg-teal-500\/20/g, 'bg-orange-500\/20');
content = content.replace(/border-teal-500\/30/g, 'border-orange-500\/30');
content = content.replace(/bg-teal-500/g, 'bg-orange-500');
content = content.replace(/hover:bg-teal-400/g, 'hover:bg-orange-400');
content = content.replace(/text-teal-950/g, 'text-orange-950');
content = content.replace(/text-teal-200/g, 'text-orange-200');

// Glow effect on celebrations
content = content.replace(/shadow-\[0_0_20px_rgba\(45,212,191,0\.4\)\]/g, 'shadow-[0_0_20px_rgba(249,115,22,0.4)]');
content = content.replace(/shadow-\[0_0_15px_rgba\(45,212,191,0\.2\)\]/g, 'shadow-[0_0_15px_rgba(249,115,22,0.2)]');
content = content.replace(/from-teal-500\/20 to-indigo-500\/20/g, 'from-orange-500\/20 to-blue-600\/20');
content = content.replace(/border-teal-500/g, 'border-orange-500');

fs.writeFileSync(targetFile, content);
console.log('HTML/CSS bootcamp page.tsx created successfully');
