const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
    let text = fs.readFileSync(filePath, 'utf8');
    
    // Replace boundary backticks safely without regex
    text = text.split('code:\\`').join('code:`');
    text = text.split('sol:\\`').join('sol:`');
    
    // The closing backtick
    text = text.split('\\`,').join('`,');
    
    // Also \`, at end of array item? No, the string closes and then has `,
    
    // Any remaining \\$ should probably be \$
    text = text.replace(/\\\\\\\$/g, '\\$');
    text = text.replace(/\\\\\$/g, '\\$');
    
    fs.writeFileSync(filePath, text);
    console.log("Cleaned " + filePath);
}

cleanFile(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'));
cleanFile(path.join(__dirname, 'app/ai-tools/bootcamp/react-exercises/data.ts'));
