const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const nmPath = path.join(__dirname, 'node_modules');
const items = fs.readdirSync(nmPath);

for (const item of items) {
  if (item.startsWith('.next-')) {
    const src = path.join(nmPath, item);
    const dest = path.join(nmPath, 'next');
    if (fs.existsSync(path.join(src, 'package.json'))) {
      console.log(`Found complete Next.js package in ${item}, copying to next...`);
      copyRecursiveSync(src, dest);
    }
  }
}

console.log('Next package check complete:', fs.existsSync(path.join(nmPath, 'next', 'package.json')));
