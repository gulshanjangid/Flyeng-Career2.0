const fs = require('fs');
let c = fs.readFileSync('lib/aptitude-data.ts', 'utf8');

// Remove specific requested signs and mojibake
c = c.replace(/ðŸ§/g, ''); // User requested removing 'ðŸ§'
c = c.replace(/\*\*/g, ''); // User requested removing '**' (bolding markdown)
c = c.replace(/ï¸/g, ''); // Remaining part of emoji numbers like 1ï¸ âƒ£
c = c.replace(/âƒ£/g, ''); // Remaining part of emoji keycaps

// Optionally fix formatting if numbers are left bare at start of titles (like '13 Geometry' -> '13. Geometry')
// It's safer just to do a targeted replace for headers if we see them, e.g. '13 ' -> '13. '
// Let's just do a generic sweep:
c = c.replace(/(\d{1,2})\s(?=[A-Z])/g, '$1. ');

fs.writeFileSync('lib/aptitude-data.ts', c, 'utf8');
console.log('Mojibake cleanup completed.');
