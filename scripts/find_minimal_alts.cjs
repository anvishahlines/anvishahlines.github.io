const fs = require('fs');

const content = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

// Match each work block in portfolioData.ts
// A work object has id, optionally title, medium, dimensions, year, image, alt, poem
const workRegex = /\{\s*id:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["'][\s\S]*?alt:\s*["']([^"']+)["'][\s\S]*?\}/g;

let m;
let count = 0;
const candidates = [];

while ((m = workRegex.exec(content)) !== null) {
  count++;
  const id = m[1];
  const img = m[2];
  const alt = m[3];
  
  // Check if alt is just metadata repetition (e.g., includes dimensions or year or starts with Title)
  const isMetadataOnly = /\d+x\d+|\d+["”]|inches|\b20\d\d\b/.test(alt) && (alt.length < 130);
  const isShort = alt.length < 100;
  const isMinimal = alt.split(' ').length < 15;
  const subjective = ['expressive', 'poetic', 'evoking', 'subtle', 'dynamic', 'intricate', 'delicate', 'serene', 'exploring'].filter(w => alt.toLowerCase().includes(w));

  candidates.push({
    num: count,
    id,
    img,
    alt,
    isMetadataOnly,
    isShort,
    isMinimal,
    subjective
  });
}

console.log(`Total works parsed: ${candidates.length}`);
console.log('\n--- POTENTIALLY MINIMAL / METADATA / SUBJECTIVE ALTS ---');
candidates.forEach(c => {
  if (c.isMetadataOnly || c.isMinimal || c.subjective.length > 0) {
    console.log(`[#${c.num}] ID: ${c.id} | Img: ${c.img}`);
    console.log(`   Flags: ${c.isMetadataOnly ? 'METADATA_ONLY ' : ''}${c.isMinimal ? 'MINIMAL ' : ''}${c.subjective.length ? 'SUBJECTIVE(' + c.subjective.join(',') + ') ' : ''}`);
    console.log(`   Alt: "${c.alt}"\n`);
  }
});
