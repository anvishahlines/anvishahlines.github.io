import { WORK_CATEGORIES } from '../src/data/portfolioData';
import fs from 'fs';
import path from 'path';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Core Pages -->
  <url>
    <loc>https://anvistevens.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://anvistevens.com/works</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://anvistevens.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://anvistevens.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;

  for (const cat of WORK_CATEGORIES) {
    xml += `  <!-- ${cat.title} Category Page -->\n  <url>\n    <loc>https://anvistevens.com/works/${cat.id}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n`;
    for (const w of cat.works) {
      const wtitle = escapeXml(w.title || `${cat.title} Artwork`);
      let caption = w.title || '';
      if (w.year) caption += `, ${w.year}`;
      if (w.medium) caption += `. ${w.medium}`;
      if (w.dimensions) caption += `, ${w.dimensions}`;
      const escapedCaption = escapeXml(caption || wtitle);
      xml += `    <image:image>\n      <image:loc>https://anvistevens.com${w.image}</image:loc>\n      <image:title>${wtitle} by Anvi Stevens</image:title>\n      <image:caption>${escapedCaption}.</image:caption>\n    </image:image>\n`;
    }
    xml += `  </url>\n`;

    // Subproject separate webpages (e.g. for Book Art)
    if (cat.subProjects && cat.subProjects.length > 0) {
      for (const sp of cat.subProjects) {
        xml += `  <!-- ${sp.title} (Book Art) Page -->\n  <url>\n    <loc>https://anvistevens.com/works/${cat.id}/${sp.id}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n`;
        for (const w of sp.works) {
          const wtitle = escapeXml(w.title || `${sp.title} Artwork`);
          let caption = w.title || '';
          if (w.year) caption += `, ${w.year}`;
          if (w.medium) caption += `. ${w.medium}`;
          if (w.dimensions) caption += `, ${w.dimensions}`;
          const escapedCaption = escapeXml(caption || wtitle);
          xml += `    <image:image>\n      <image:loc>https://anvistevens.com${w.image}</image:loc>\n      <image:title>${wtitle} by Anvi Stevens</image:title>\n      <image:caption>${escapedCaption}.</image:caption>\n    </image:image>\n`;
        }
        xml += `  </url>\n`;
      }
    }
  }

  xml += `</urlset>\n`;
  const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf-8');
  console.log(`Successfully generated public/sitemap.xml for ${WORK_CATEGORIES.length} categories!`);
}

generateSitemap();
