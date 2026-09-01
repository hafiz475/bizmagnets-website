const fs = require('fs');
const path = require('path');

const base = 'E:\\prasannasir\\node_modules\\next';
const sub = path.join(base, 'package');

if (fs.existsSync(sub)) {
  const items = fs.readdirSync(sub);
  for (const item of items) {
    const src = path.join(sub, item);
    const dest = path.join(base, item);
    try {
      fs.cpSync(src, dest, { recursive: true, force: true });
    } catch (e) {
      console.log(`Failed copying ${item}: ${e.message}`);
    }
  }
  try {
    fs.rmSync(sub, { recursive: true, force: true });
  } catch (e) {
    console.log('Warn removing sub:', e.message);
  }
}
console.log('FLATTEN DONE. package.json exists:', fs.existsSync(path.join(base, 'package.json')));
