const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'node_modules', 'next');

if (!fs.existsSync(target)) {
  fs.mkdirSync(target, { recursive: true });
}

console.log('Unpacking next-15.1.7.tgz...');
execSync('tar -xzf next-15.1.7.tgz', { cwd: __dirname });
const pkgDir = path.join(__dirname, 'package');

fs.cpSync(pkgDir, target, { recursive: true });
fs.rmSync(pkgDir, { recursive: true, force: true });
console.log('UNPACK SUCCESS:', fs.existsSync(path.join(target, 'package.json')));
