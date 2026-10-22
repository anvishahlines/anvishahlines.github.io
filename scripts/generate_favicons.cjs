const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="100" fill="#fafaf9"/>
  <rect width="500" height="500" x="6" y="6" rx="94" fill="none" stroke="#e7e5e4" stroke-width="12"/>
  <text x="256" y="280" font-family="'Cormorant Garamond', Georgia, 'Times New Roman', serif" font-size="220" font-weight="500" letter-spacing="10" fill="#1c1917" text-anchor="middle" dominant-baseline="middle">AS</text>
</svg>`;

async function run() {
  const publicDir = path.resolve('public');
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent, 'utf8');
  console.log('✓ Created public/favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 1. apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png');

  // 2. favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ Created public/favicon-32x32.png');

  // 3. favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ Created public/favicon-16x16.png');

  // 4. favicon.ico (using 32x32 png)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('✓ Created public/favicon.ico');

  // 5. site.webmanifest
  const manifest = {
    name: "Anvi Stevens — Artist | Boston, MA",
    short_name: "Anvi Stevens",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#fafaf9",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('✓ Created public/site.webmanifest');
}

run().catch(console.error);
