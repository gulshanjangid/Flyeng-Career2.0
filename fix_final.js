const fs = require('fs');
const path = require('path');

function fix(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace \` with ` inside backticks? No, we need \` to remain \`!
    // But currently we have \` as \\` ?
    // Let's just fix the specific syntax errors.
    
    // The errors in react-exercises/data.ts were from lines 230:
    // className={\\`btn btn-\\\${color} btn-\\\${size}\\`}
    // It should be:
    // className={\`btn btn-\${color} btn-\${size}\`}
    
    content = content.replace(/\\\\\`/g, '\\`');
    content = content.replace(/\\\\\\\$/g, '\\$');
    
    fs.writeFileSync(file, content);
}

fix(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'));
fix(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'));
console.log('Fixed TS files in place!');
