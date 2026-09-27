import fs from 'fs';
import path from 'path';
import { WORK_CATEGORIES, ARTIST_PROFILE } from '../src/data/portfolioData.js';
import { WorkCategory, Artwork, CVSection } from '../src/types/portfolio.js';

// Generates static HTML files for all core routes and artwork categories
// so search engines and social scrapers receive real pre-rendered HTML on GitHub Pages.
function generateStaticPages() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist! Run npm run build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  // Helper to construct pre-rendered HTML wrapper
  const buildPageHtml = (title: string, desc: string, url: string, ogImage: string, contentBody: string) => {
    let html = baseHtml;
    // Replace title
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    // Replace meta description
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);
    // Replace canonical URL
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
    // Replace OG tags
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${desc}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
    html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${ogImage}" />`);

    // Inject crawler-readable pre-rendered body inside root as initial content
    html = html.replace('<div id="root"></div>', `<div id="root">${contentBody}</div>`);
    return html;
  };

  const routes: { dir: string; title: string; desc: string; url: string; image: string; body: string }[] = [
    {
      dir: 'works',
      title: 'Works — Anvi Stevens | Contemporary Fine Art & Painting',
      desc: 'Selected bodies of work by contemporary visual artist Anvi Stevens: Nature of Things, Landscape, and Sculptures.',
      url: 'https://anvistevens.com/works',
      image: 'https://anvistevens.com/images/01_rooted.jpg',
      body: `
        <div class="py-12 px-4 max-w-5xl mx-auto text-stone-800">
          <h1 class="font-gallery text-3xl mb-8">Selected Works</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${WORK_CATEGORIES.map((cat: WorkCategory) => `
              <article>
                <h2 class="text-xl font-gallery mb-2"><a href="/works/${cat.id}">${cat.title}</a></h2>
                <img src="${cat.coverImage}" alt="${cat.title} by Anvi Stevens" class="w-full object-cover mb-4" />
                <p class="text-sm text-stone-600">${cat.statementSnippet || ''}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `
    },
    {
      dir: 'about',
      title: 'About & CV — Anvi Stevens | Boston Contemporary Painter',
      desc: 'Artist biography, statement, education, and exhibition history of Boston and Massachusetts painter Anvi Stevens (MFA Boston University).',
      url: 'https://anvistevens.com/about',
      image: 'https://anvistevens.com/images/profile_pic.jpg',
      body: `
        <div class="py-12 px-4 max-w-4xl mx-auto text-stone-800">
          <h1 class="font-gallery text-3xl mb-6">About Anvi Stevens</h1>
          <p class="mb-8 leading-relaxed">${ARTIST_PROFILE.bioParagraph}</p>
          <div class="my-8 border-t border-stone-200"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-lg font-semibold uppercase tracking-widest mb-4">Statement</h2>
              ${ARTIST_PROFILE.statementParagraphs.map((p: string) => `<p class="mb-4 leading-relaxed">${p}</p>`).join('')}
            </div>
            <div>
              <h2 class="text-lg font-semibold uppercase tracking-widest mb-4">Curriculum Vitae</h2>
              ${ARTIST_PROFILE.cvSections.map((sec: CVSection) => `
                <div class="mb-6">
                  <h3 class="text-xs uppercase tracking-wider text-stone-500 mb-2">${sec.title}</h3>
                  <ul>
                    ${sec.items.map((it) => `
                      <li class="mb-2 text-sm">
                        <strong>${it.primary}</strong> — ${it.secondary || ''} (${it.year || ''})
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `
    },
    {
      dir: 'contact',
      title: 'Contact — Anvi Stevens',
      desc: 'Inquire about artwork, exhibitions, and commissions with visual artist Anvi Stevens.',
      url: 'https://anvistevens.com/contact',
      image: 'https://anvistevens.com/images/profile_pic.jpg',
      body: `
        <div class="py-12 px-4 max-w-xl mx-auto text-stone-800 text-center">
          <h1 class="font-gallery text-3xl mb-4">Contact Anvi Stevens</h1>
          <p class="mb-4">Email: <a href="mailto:${ARTIST_PROFILE.email}">${ARTIST_PROFILE.email}</a></p>
          <p class="text-stone-500">Based in ${ARTIST_PROFILE.location}</p>
        </div>
      `
    }
  ];

  // Also generate Category pages: /works/nature-of-things, /works/landscape, /works/sculptures
  WORK_CATEGORIES.forEach((category: WorkCategory) => {
    routes.push({
      dir: path.join('works', category.id),
      title: `${category.title} — Anvi Stevens`,
      desc: `${category.title}: ${category.statementSnippet || 'Paintings and artwork by Anvi Stevens.'}`,
      url: `https://anvistevens.com/works/${category.id}`,
      image: `https://anvistevens.com${category.coverImage}`,
      body: `
        <div class="py-12 px-4 max-w-4xl mx-auto text-stone-800">
          <h1 class="font-gallery text-3xl mb-4">${category.title}</h1>
          <p class="text-sm text-stone-600 mb-8">${category.statementSnippet || ''}</p>
          <div class="space-y-12">
            ${category.works.map((w: Artwork) => `
              <article class="text-center">
                <img src="${w.image}" alt="${w.alt || `${w.title} by Anvi Stevens`}" class="max-h-[600px] mx-auto mb-4" />
                <h2 class="text-base font-semibold">${w.title}</h2>
                <p class="text-xs text-stone-500">${w.year ? `${w.year} · ` : ''}${w.medium || ''}${w.dimensions ? ` · ${w.dimensions}` : ''}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `
    });
  });

  // Write out directories and index.html
  routes.forEach(route => {
    const targetDir = path.join(distDir, route.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const html = buildPageHtml(route.title, route.desc, route.url, route.image, route.body);
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  });

  // Also create a 404.html from dist/index.html so GitHub Pages routes client requests seamlessly to the SPA
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

  console.log(`Successfully pre-rendered ${routes.length} crawlable static HTML pages and 404.html!`);
}

generateStaticPages();

