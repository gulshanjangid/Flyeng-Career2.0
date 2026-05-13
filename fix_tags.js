const fs = require('fs');
let c = fs.readFileSync('lib/aptitude-data.ts', 'utf8');

// Fix duplicates
c = c.replace(/(explanation:\s*(?:\".*?\"|\'.*?\'|)\s*,\s*)+solution:/g, 'explanation: "", solution:');

// Fix Mojibake
c = c.replace(/ðŸ§ /g, '🧠');
c = c.replace(/âš¡/g, '⚡');
c = c.replace(/1. ðŸ“–/g, '1. 📖');
c = c.replace(/ðŸ“–/g, '📖');
c = c.replace(/â€“/g, '–');
c = c.replace(/ðŸ–Šï¸ /g, '✍️');
c = c.replace(/1âƒ£7âƒ£/g, '1️⃣7️⃣');

fs.writeFileSync('lib/aptitude-data.ts', c, 'utf8');
console.log('Cleaning script completed');
