const fs = require('fs');

const content = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

const lines = content.split('\n');
let currentId = null;
let currentTitle = null;
let currentImage = null;
let items = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const idMatch = line.match(/id:\s*["']([^"']+)["']/);
  const titleMatch = line.match(/title:\s*["']([^"']+)["']/);
  const imageMatch = line.match(/image:\s*["']([^"']+)["']/);
  const altMatch = line.match(/alt:\s*["']([^"']+)["']/);

  if (idMatch) currentId = idMatch[1];
  if (titleMatch) currentTitle = titleMatch[1];
  if (imageMatch) currentImage = imageMatch[1];
  if (altMatch) {
    items.push({
      line: i + 1,
      id: currentId,
      title: currentTitle,
      image: currentImage,
      alt: altMatch[1]
    });
    currentId = null;
    currentTitle = null;
    currentImage = null;
  }
}

console.log(`=== ITEMS 1 to 34 ===`);
for (let i = 0; i < Math.min(35, items.length); i++) {
  const it = items[i];
  console.log(`${i + 1}. [L${it.line}] ID: ${it.id} | Img: ${it.image}`);
  console.log(`   Alt: ${it.alt}`);
}
