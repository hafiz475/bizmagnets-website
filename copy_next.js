const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'temp_next_pkg', 'package');
const dest = path.join(__dirname, 'node_modules', 'next');

if (fs.existsSync(dest)) {
  try {
    fs.rmSync(dest, { recursive: true, force: true });
  } catch (e) {
    console.log('Warn removing old next dir:', e.message);
  }
}

fs.cpSync(src, dest, { recursive: true });
console.log('COPY COMPLETE. package.json exists:', fs.existsSync(path.join(dest, 'package.json')));
