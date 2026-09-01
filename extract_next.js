const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dest = path.join(__dirname, 'node_modules', 'next');

if (fs.existsSync(dest)) {
  try {
    fs.rmSync(dest, { recursive: true, force: true });
  } catch (e) {
    console.log('rmSync warn:', e.message);
  }
}
fs.mkdirSync(dest, { recursive: true });

const tempPkg = path.join(__dirname, 'temp_extract');
if (fs.existsSync(tempPkg)) {
  try {
    fs.rmSync(tempPkg, { recursive: true, force: true });
  } catch (e) {}
}
fs.mkdirSync(tempPkg, { recursive: true });

console.log('Unpacking next-15.1.7.tgz...');
execSync('tar -xzf next-15.1.7.tgz -C temp_extract', { cwd: __dirname });

const pkgFolder = path.join(tempPkg, 'package');
fs.cpSync(pkgFolder, dest, { recursive: true });
try {
  fs.rmSync(tempPkg, { recursive: true, force: true });
} catch (e) {}

console.log('SUCCESS! require-hook exists:', fs.existsSync(path.join(dest, 'dist', 'server', 'require-hook.js')));
