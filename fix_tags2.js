const fs = require('fs');
let c = fs.readFileSync('lib/aptitude-data.ts', 'utf8');

// Merge duplicated explanation/solution keys in the same object
c = c.replace(/\",\s*explanation:\s*\"\",\s*solution:\s*\"/g, ' ');

// Remove any remaining back-to-back explanations before a solution that might have been missed
c = c.replace(/(explanation:\s*\"\",\s*)+solution:/g, 'explanation: "", solution:');

// Fix Mojibake
c = c.replace(/ðŸ§ /g, '🧠');
c = c.replace(/âš¡/g, '⚡');
c = c.replace(/1. ðŸ“–/g, '1. 📖');
c = c.replace(/ðŸ“–/g, '📖');
c = c.replace(/â€“/g, '–');
c = c.replace(/ðŸ–Šï¸ /g, '✍️');
c = c.replace(/1âƒ£7âƒ£/g, '1️⃣7️⃣');
c = c.replace(/Ã—/g, '×');
c = c.replace(/âˆš/g, '√');
c = c.replace(/Ã·/g, '÷');
c = c.replace(/Â½/g, '½');
c = c.replace(/Â/g, ''); // Sometimes stray Â appears

fs.writeFileSync('lib/aptitude-data.ts', c, 'utf8');
console.log('Cleaning script completed');
