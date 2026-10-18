const fs = require('fs');

const portfolioData = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

function getJpegInfo(imgPath) {
  try {
    const fullPath = 'public' + imgPath;
    const buf = fs.readFileSync(fullPath);
    let w = 0, h = 0;
    for (let i = 0; i < buf.length - 8; i++) {
      if (buf[i] === 0xFF && (buf[i+1] === 0xC0 || buf[i+1] === 0xC2)) {
        h = buf.readUInt16BE(i+5);
        w = buf.readUInt16BE(i+7);
        break;
      }
    }
    return { path: imgPath, w, h, ratio: (w/h).toFixed(2) };
  } catch (e) {
    return { path: imgPath, error: e.message };
  }
}

// Extract works
const workBlocks = portfolioData.split('{').slice(1);
const results = [];
for (const b of workBlocks) {
  const imgMatch = b.match(/image:\s*["']([^"']+)["']/);
  const dimMatch = b.match(/dimensions:\s*["']([^"']+)["']/);
  const titleMatch = b.match(/title:\s*["']([^"']+)["']/);
  const idMatch = b.match(/id:\s*["']([^"']+)["']/);
  if (imgMatch) {
    const imgInfo = getJpegInfo(imgMatch[1]);
    const title = titleMatch ? titleMatch[1] : (idMatch ? idMatch[1] : 'unnamed');
    const dims = dimMatch ? dimMatch[1] : '';
    results.push({ id: idMatch ? idMatch[1] : '', title, dims, imgInfo });
  }
}

console.log(`Auditing ${results.length} works:\n`);
for (const r of results) {
  const { title, dims, imgInfo, id } = r;
  const ratio = parseFloat(imgInfo.ratio);
  console.log(`${id.padEnd(25)} | ${title.padEnd(25)} | dims: ${dims.padEnd(20)} | img: ${imgInfo.w}x${imgInfo.h} (${imgInfo.ratio}) | ${imgInfo.path}`);
}
