const fs = require('fs');
const { execSync } = require('child_process');
const gitPath = 'C:\\Users\\Trent\\AppData\\Local\\Programs\\PortableGit\\cmd\\git.exe';

const diff = execSync(`"${gitPath}" show --name-status --oneline da116e4`).toString();
const modifiedImgs = diff.split('\n')
  .filter(l => l.startsWith('M\t') && l.includes('public/images/'))
  .map(l => l.replace('M\t', '').trim());

console.log('Modified image count:', modifiedImgs.length);

const rotatedFiles = [];
for (const imgPath of modifiedImgs) {
  try {
    const origBuf = execSync(`"${gitPath}" show eb6f4c7:"${imgPath}"`, { maxBuffer: 30 * 1024 * 1024 });
    const exifIdx = origBuf.indexOf(Buffer.from('Exif\0\0'));
    if (exifIdx !== -1) {
      const tiffStart = exifIdx + 6;
      const isLE = origBuf.toString('ascii', tiffStart, tiffStart + 2) === 'II';
      const readU16 = (off) => isLE ? origBuf.readUInt16LE(off) : origBuf.readUInt16BE(off);
      const readU32 = (off) => isLE ? origBuf.readUInt32LE(off) : origBuf.readUInt32BE(off);
      
      const ifd0Off = tiffStart + readU32(tiffStart + 4);
      const numEntries = readU16(ifd0Off);
      for (let i = 0; i < numEntries; i++) {
        const entryOff = ifd0Off + 2 + i * 12;
        const tag = readU16(entryOff);
        if (tag === 0x0112) {
          const val = readU16(entryOff + 8);
          if (val > 1) {
            rotatedFiles.push({ imgPath, orientation: val });
          }
        }
      }
    }
  } catch (e) {
    // skip
  }
}

console.log(`Found ${rotatedFiles.length} images with EXIF orientation > 1:`);
console.log(JSON.stringify(rotatedFiles, null, 2));
