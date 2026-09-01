const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, 'node_modules', 'next');
if (fs.existsSync(dest)) {
  try {
    fs.rmSync(dest, { recursive: true, force: true });
  } catch (e) {
    console.log('rmSync warning:', e.message);
  }
}

execSync('tar -xzf next-15.1.7.tgz', { cwd: __dirname });
const pkgPath = path.join(__dirname, 'package');
fs.renameSync(pkgPath, dest);
console.log('SUCCESS: node_modules/next/package.json exists:', fs.existsSync(path.join(dest, 'package.json')));
