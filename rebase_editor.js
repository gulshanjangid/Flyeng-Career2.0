const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, 'utf8');
const original = content;
content = content.replace(/^pick ([0-9a-f]+) chore: Add script to reset `\.env\.local`/gm, 'edit $1 chore: Add script to reset `.env.local`');
if (content !== original) {
  console.log('Modified rebase todo successfully.');
} else {
  console.error('Failed to find the commit message in rebase todo.');
}
fs.writeFileSync(file, content);
