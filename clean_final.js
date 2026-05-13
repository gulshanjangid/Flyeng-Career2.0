const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
    let text = fs.readFileSync(filePath, 'utf8');
    
    // In our generated .ts files, the string fields currently literally contain:
    // code:\` 
    // And also \\\${} or \${}
    
    // 1. Replace all literal \` with just `
    text = text.replace(/\\\\\`/g, '\`');
    
    // 2. Replace all literal \\$ with \$ (to escape dollars in template literals)
    // Wait, if we replace \`, we need \${ to be \${, not \\${ !
    text = text.replace(/\\\\\\\$/g, '\\$');
    text = text.replace(/\\\\\$/g, '\\$');
    
    // Now any string like `className={\`btn\`}` in our `.ts` file
    // needs to have its inner backticks escaped!
    // But how do we distinguish inner backticks from boundary backticks?
    
    // WE CAN'T simply replace ALL \` with `.
    // If we replace ALL \` with `, then code:` ... \`btn\` ... ` becomes code:` ... `btn` ... ` which breaks!
    // That's exactly why React failed!!
    
    fs.writeFileSync(filePath, text);
}

// cleanFile(...)
