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

// Parse categories and works
const workBlocks = portfolioData.split('{').slice(1);
const mismatches = [];

for (const b of workBlocks) {
  const imgMatch = b.match(/image:\s*["']([^"']+)["']/);
  const dimMatch = b.match(/dimensions:\s*["']([^"']+)["']/);
  const titleMatch = b.match(/title:\s*["']([^"']+)["']/);
  const idMatch = b.match(/id:\s*["']([^"']+)["']/);
  if (imgMatch) {
    const imgInfo = getJpegInfo(imgMatch[1]);
    const title = titleMatch ? titleMatch[1] : (idMatch ? idMatch[1] : 'unnamed');
    const dims = dimMatch ? dimMatch[1] : '';
    const id = idMatch ? idMatch[1] : '';
    
    // Parse dimensions (e.g. 40x16 or 29.5x21.5 or 61x35 or 41x68)
    // Convention in art is usually Height x Width or Width x Height.
    // Let's parse numbers
    const numMatches = dims.match(/(\d+(?:\.\d+)?)\s*[xX×]\s*(\d+(?:\.\d+)?)/);
    let dimOrientation = 'unknown';
    let d1 = 0, d2 = 0;
    if (numMatches) {
      d1 = parseFloat(numMatches[1]);
      d2 = parseFloat(numMatches[2]);
    }
    
    const isImgLandscape = imgInfo.w > imgInfo.h;
    const isImgPortrait = imgInfo.h > imgInfo.w;
    
    console.log(`${id.padEnd(28)} | ${title.padEnd(28)} | dims: ${dims.padEnd(18)} | img: ${imgInfo.w}x${imgInfo.h} (${imgInfo.ratio}) | ${imgInfo.path}`);
  }
}
