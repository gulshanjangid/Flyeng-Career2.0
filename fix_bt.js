const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts');
let content = fs.readFileSync(targetFile, 'utf8');

content = content.replace(/\\\\\\\`/g, '\`'); 

fs.writeFileSync(targetFile, content);
console.log('Fixed backticks!');
