const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const nmDir = path.join(__dirname, 'node_modules');
const lockFile = path.join(__dirname, 'package-lock.json');

console.log('Cleaning node_modules...');
if (fs.existsSync(nmDir)) {
  try {
    fs.rmSync(nmDir, { recursive: true, force: true });
  } catch (e) {
    console.log('Could not rmSync node_modules directly:', e.message);
  }
}

if (fs.existsSync(lockFile)) {
  try {
    fs.rmSync(lockFile, { force: true });
  } catch (e) {}
}

console.log('Running npm install...');
execSync('npm install --no-fund --no-audit', { cwd: __dirname, stdio: 'inherit' });
console.log('REINSTALL COMPLETE!');
