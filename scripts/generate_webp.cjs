const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      // Skip already generated -800w files to avoid reprocessing
      if (entry.name.includes('-800w')) continue;

      const ext = path.extname(entry.name);
      const baseName = entry.name.slice(0, -ext.length);

      const webpFull = path.join(dir, `${baseName}.webp`);
      const webp800 = path.join(dir, `${baseName}-800w.webp`);
      const jpg800 = path.join(dir, `${baseName}-800w.jpg`);

      try {
        const image = sharp(fullPath).rotate(); // auto-orient based on EXIF
        const metadata = await image.metadata();

        const origWidth = metadata.width || 1200;

        // 1. Generate full WebP (max 1600px width, quality 84)
        if (!fs.existsSync(webpFull)) {
          const width1600 = Math.min(origWidth, 1600);
          await sharp(fullPath)
            .rotate()
            .resize({ width: width1600, withoutEnlargement: true })
            .webp({ quality: 84, effort: 5 })
            .toFile(webpFull);
        }

        // 2. Generate 800w WebP (max 800px width, quality 80)
        if (!fs.existsSync(webp800)) {
          const width800 = Math.min(origWidth, 800);
          await sharp(fullPath)
            .rotate()
            .resize({ width: width800, withoutEnlargement: true })
            .webp({ quality: 80, effort: 5 })
            .toFile(webp800);
        }

        // 3. Generate 800w JPEG fallback (max 800px width, quality 82)
        if (!fs.existsSync(jpg800)) {
          const width800 = Math.min(origWidth, 800);
          await sharp(fullPath)
            .rotate()
            .resize({ width: width800, withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(jpg800);
        }

        // 4. Compress original file in place if > 400KB to save bandwidth on fallbacks
        const stat = fs.statSync(fullPath);
        if (stat.size > 400 * 1024) {
          const compressedTemp = `${fullPath}.tmp.jpg`;
          await sharp(fullPath)
            .rotate()
            .resize({ width: Math.min(origWidth, 1800), withoutEnlargement: true })
            .jpeg({ quality: 85, mozjpeg: true })
            .toFile(compressedTemp);

          fs.unlinkSync(fullPath);
          fs.renameSync(compressedTemp, fullPath);
        }

        console.log(`✓ Processed: ${entry.name}`);
      } catch (err) {
        console.error(`Error processing ${entry.name}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('Starting WebP, srcset, and compression generation for public/images...');
  const start = Date.now();
  await processDirectory(path.resolve('public/images'));
  console.log(`WebP + srcset generation completed in ${((Date.now() - start) / 1000).toFixed(1)}s!`);
}

run();
