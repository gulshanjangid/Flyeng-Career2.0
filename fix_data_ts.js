const fs = require('fs');
const path = require('path');

const file1 = fs.readFileSync(path.join(__dirname, 'TMP_create_htmlcss1.js'), 'utf8');
const file2 = fs.readFileSync(path.join(__dirname, 'TMP_create_htmlcss2.js'), 'utf8');
const file3 = fs.readFileSync(path.join(__dirname, 'TMP_create_htmlcss3.js'), 'utf8');

// Extract the literal object array chunks from each file.
function extractContent(fileData) {
  let content = fileData.substring(fileData.indexOf('`') + 1, fileData.lastIndexOf('`'));
  // Clean up start/end
  return content.trim();
}

let c1 = extractContent(file1);
let c2 = extractContent(file2);
let c3 = extractContent(file3);

// c1 contains the whole file up to `// WE TRUNCATED FOR MEMORY. \n];`
// So let's strip that.
c1 = c1.replace('// WE TRUNCATED FOR MEMORY.', '');
c1 = c1.replace('];', '');

const completeFile = c1 + '\\n,' + c2 + '\\n,' + c3 + '\\n];\\n';

fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), completeFile);
console.log('Fixed data.ts correctly!');
