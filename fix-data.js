const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib/aptitude-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace strong markdown
content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

// Remove formatting $
content = content.replace(/\$/g, '');

// \frac -> /
content = content.replace(/\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1 / $2');

// \times -> ×
content = content.replace(/\\\\times/g, '×');

// \% -> %
content = content.replace(/\\\\%/g, '%');

// \pi -> π
content = content.replace(/\\\\pi/g, 'π');

// \sqrt -> √
content = content.replace(/\\\\sqrt\{([^{}]+)\}/g, '√$1');

// \div -> ÷
content = content.replace(/\\\\div/g, '÷');

// \le -> ≤
content = content.replace(/\\\\le/g, '≤');

// \approx -> ≈
content = content.replace(/\\\\approx/g, '≈');

// \neq -> ≠
content = content.replace(/\\\\neq/g, '≠');

// \text{XYZ} -> XYZ
content = content.replace(/\\\\text\{([^{}]+)\}/g, '$1');

// \{ and \} - matching single backslash in RAW file string: `\{` -> regex `/\\{/g`
content = content.replace(/\\\{/g, '{');
content = content.replace(/\\\}/g, '}');

// Remove extra \\ if any left from some escape
content = content.replace(/\\\\/g, '');

// Exponents
content = content.replace(/\^2/g, '²');
content = content.replace(/\^3/g, '³');
content = content.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
content = content.replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated aptitude-data.ts with sanitized text');
