const { execSync } = require('child_process');
const fs = require('fs');
const gitPath = 'C:\\Users\\Trent\\AppData\\Local\\Programs\\PortableGit\\cmd\\git.exe';

const list = [
  'public/images/nature-of-things/05_Adorned.JPG',
  'public/images/installation/101A2298.JPG',
  'public/images/installation/Collaboration with Aisling Wilson 5.jpg',
  'public/images/book-art/new-year-poem/IMG_5611.jpg',
  'public/images/book-art/new-year-poem/IMG_5614.jpg',
  'public/images/book-art/new-year-poem/New Year Poem.jpg'
];

for (const p of list) {
  const origBuf = execSync(`"${gitPath}" show eb6f4c7:"${p}"`, { maxBuffer: 30 * 1024 * 1024 });
  const sofs = [];
  for (let i = 0; i < origBuf.length - 8; i++) {
    if (origBuf[i] === 0xFF && (origBuf[i+1] === 0xC0 || origBuf[i+1] === 0xC2)) {
      sofs.push({ h: origBuf.readUInt16BE(i+5), w: origBuf.readUInt16BE(i+7) });
    }
  }
  const lastSof = sofs[sofs.length - 1];
  
  // Current file dims
  const curBuf = fs.readFileSync(p);
  const curSofs = [];
  for (let i = 0; i < curBuf.length - 8; i++) {
    if (curBuf[i] === 0xFF && (curBuf[i+1] === 0xC0 || curBuf[i+1] === 0xC2)) {
      curSofs.push({ h: curBuf.readUInt16BE(i+5), w: curBuf.readUInt16BE(i+7) });
    }
  }
  const curLastSof = curSofs[curSofs.length - 1];

  console.log(`${p}:`);
  console.log(`   Orig: ${lastSof.w} x ${lastSof.h} (ratio: ${(lastSof.w/lastSof.h).toFixed(3)})`);
  console.log(`   Cur:  ${curLastSof.w} x ${curLastSof.h} (ratio: ${(curLastSof.w/curLastSof.h).toFixed(3)})`);
}
