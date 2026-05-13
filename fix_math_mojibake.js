const fs = require('fs');
let c = fs.readFileSync('lib/aptitude-data.ts', 'utf8');

c = c.replace(/Ï€/g, 'π');
c = c.replace(/â†’/g, '→');
c = c.replace(/â‰¥/g, '≥');
c = c.replace(/â‰¤/g, '≤');
c = c.replace(/03\. D Bodies/g, '3D Bodies');
c = c.replace(/02\. D(\/3D)?/g, '2D$1');

fs.writeFileSync('lib/aptitude-data.ts', c, 'utf8');
console.log('Mojibake mathematical symbols cleanup completed.');
