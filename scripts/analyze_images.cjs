const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push({ path: fullPath, size: stat.size });
    }
  });
  return results;
}

const files = getFiles('public/images');
let totalBytes = 0;
files.sort((a, b) => b.size - a.size);

console.log(`Total images: ${files.length}`);
files.forEach((f, i) => {
  totalBytes += f.size;
  if (i < 20 || f.size > 2 * 1024 * 1024) {
    console.log(`${(f.size / (1024 * 1024)).toFixed(2)} MB - ${f.path}`);
  }
});

console.log(`\nTotal size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
