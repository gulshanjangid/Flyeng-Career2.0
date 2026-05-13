const fs = require('fs');
let c = fs.readFileSync('lib/aptitude-data.ts', 'utf8');

c = c.replace(/title:\s*"(.*?)"/g, (match, p1) => {
    // let's clean any non-ascii characters and zero-width spaces
    let clean = p1.replace(/[^\x20-\x7E]/g, '');
    
    // Now handle things like "1 3 Geometry" -> "13. Geometry"
    // Or "4 Ages" -> "04. Ages"
    // Extract leading numbers
    let m = clean.match(/^(\d)\s*(\d)?\s*(.*)$/);
    if(m) {
        let num = m[2] ? m[1] + m[2] : '0' + m[1];
        let rest = m[3].replace(/^[\.\-\s]+/, ''); // remove any leading dots/hyphens/spaces
        return `title: "${num}. ${rest}"`;
    }
    return match; // return original if it doesn't match the pattern
});

fs.writeFileSync('lib/aptitude-data.ts', c, 'utf8');
console.log('Title formatting completed.');
