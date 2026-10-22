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

  // Helper to construct pre-rendered HTML wrapper with complete metadata
  const buildPageHtml = (
    title: string,
    desc: string,
    url: string,
    ogImage: string,
    jsonLd: Record<string, unknown>,
    contentBody: string,
    imageWidth?: string,
    imageHeight?: string,
    imageAlt?: string
  ) => {
    let html = baseHtml;
    // Replace title
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    // Replace meta description
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);
    // Replace canonical URL
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
    // Replace OpenGraph tags
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${desc}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
    html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${ogImage}" />`);
    html = html.replace(/<meta property="og:image:width" content=".*?" \/>/, `<meta property="og:image:width" content="${imageWidth || '1200'}" />`);
    html = html.replace(/<meta property="og:image:height" content=".*?" \/>/, `<meta property="og:image:height" content="${imageHeight || '1200'}" />`);
    html = html.replace(/<meta property="og:image:alt" content=".*?" \/>/, `<meta property="og:image:alt" content="${imageAlt || title}" />`);
    // Replace Twitter Card tags
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${desc}" />`);
    html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${ogImage}" />`);
    html = html.replace(/<meta name="twitter:image:alt" content=".*?" \/>/, `<meta name="twitter:image:alt" content="${imageAlt || title}" />`);

    // Replace Schema.org JSON-LD structured data
    const jsonLdString = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>`;
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonLdString);

    // Inject crawler-readable pre-rendered body inside root as initial content
    html = html.replace('<div id="root"></div>', `<div id="root">${contentBody}</div>`);
    return html;
  };

  const routes: {
    dir: string;
    title: string;
    desc: string;
    url: string;
    image: string;
    imageWidth?: string;
    imageHeight?: string;
    imageAlt?: string;
    jsonLd: Record<string, unknown>;
    body: string;
  }[] = [
    {
      dir: 'works',
      title: 'Selected Works — Anvi Stevens | Artist | Boston, MA',
      desc: 'Selected bodies of work by contemporary visual artist Anvi Stevens: Nature of Things, Landscape, Sculptures, Installation, Drawings, and Book Art.',
      url: 'https://anvistevens.com/works',
      image: `https://anvistevens.com${encodeURI(WORK_CATEGORIES[0].coverImage)}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Selected Works — Anvi Stevens',
        url: 'https://anvistevens.com/works',
        description: 'Selected bodies of work by contemporary visual artist Anvi Stevens.',
        creator: {
          '@type': 'VisualArtist',
          '@id': 'https://anvistevens.com/#artist',
          name: ARTIST_PROFILE.name
        },
        hasPart: WORK_CATEGORIES.map((cat: WorkCategory) => ({
          '@type': 'CreativeWork',
          name: cat.title,
          url: `https://anvistevens.com/works/${cat.id}`,
          image: `https://anvistevens.com${encodeURI(cat.coverImage)}`
        }))
      },
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
      title: 'About & CV — Anvi Stevens | Artist | Boston, MA',
      desc: 'Artist biography, statement, education, and exhibition history of Boston and Massachusetts painter Anvi Stevens (MFA Boston University).',
      url: 'https://anvistevens.com/about',
      image: 'https://anvistevens.com/images/profile_pic.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Anvi Stevens',
        url: 'https://anvistevens.com/about',
        mainEntity: {
          '@type': 'VisualArtist',
          '@id': 'https://anvistevens.com/#artist',
          name: ARTIST_PROFILE.name,
          jobTitle: 'Artist | Boston, MA',
          description: ARTIST_PROFILE.bioParagraph,
          alumniOf: [
            {
              '@type': 'CollegeOrUniversity',
              name: 'Boston University',
              department: 'College of Fine Arts (MFA in Painting)'
            },
            {
              '@type': 'CollegeOrUniversity',
              name: 'Maharaja Sayajirao University of Baroda',
              department: 'Faculty of Fine Arts (BVA in Painting)'
            }
          ]
        }
      },
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
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-lg font-semibold uppercase tracking-widest">Curriculum Vitae</h2>
                <a href="/cv/Anvi_Stevens_CV.pdf" download="Anvi_Stevens_CV.pdf" class="text-xs uppercase tracking-wider underline">Download CV (PDF)</a>
              </div>
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
      title: 'Contact & Inquiries — Anvi Stevens | Visual Artist',
      desc: 'Inquire about artwork, exhibitions, and commissions with contemporary visual artist Anvi Stevens in the Boston area.',
      url: 'https://anvistevens.com/contact',
      image: 'https://anvistevens.com/images/profile_pic.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Anvi Stevens',
        url: 'https://anvistevens.com/contact',
        mainEntity: {
          '@type': 'VisualArtist',
          '@id': 'https://anvistevens.com/#artist',
          name: ARTIST_PROFILE.name,
          email: ARTIST_PROFILE.email
        }
      },
      body: `
        <div class="py-12 px-4 max-w-xl mx-auto text-stone-800 text-center">
          <h1 class="font-gallery text-3xl mb-4">Contact Anvi Stevens</h1>
          <p class="mb-4">Email: <a href="mailto:${ARTIST_PROFILE.email}">${ARTIST_PROFILE.email}</a></p>
          <p class="text-stone-500">Based in ${ARTIST_PROFILE.location}</p>
        </div>
      `
    }
  ];

  // Generate Category pages: /works/nature-of-things, /works/landscape, etc.
  WORK_CATEGORIES.forEach((category: WorkCategory) => {
    const categoryTitle = category.title;
    const categorySnippet = category.statementSnippet || `${category.title} by contemporary artist Anvi Stevens.`;
    const categoryUrl = `https://anvistevens.com/works/${category.id}`;
    const categoryImage = `https://anvistevens.com${encodeURI(category.coverImage)}`;

    routes.push({
      dir: path.join('works', category.id),
      title: `${categoryTitle} — Anvi Stevens | Artist | Boston, MA`,
      desc: `${categoryTitle}: ${categorySnippet}`,
      url: categoryUrl,
      image: categoryImage,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${categoryTitle} — Anvi Stevens`,
        url: categoryUrl,
        description: categorySnippet,
        creator: {
          '@type': 'VisualArtist',
          '@id': 'https://anvistevens.com/#artist',
          name: ARTIST_PROFILE.name
        },
        hasPart: category.works.map((w: Artwork) => ({
          '@type': 'VisualArtwork',
          name: w.title || categoryTitle,
          image: `https://anvistevens.com${encodeURI(w.image)}`,
          creator: {
            '@type': 'VisualArtist',
            name: ARTIST_PROFILE.name
          },
          ...(w.medium ? { artMedium: w.medium } : {}),
          ...(w.year ? { dateCreated: w.year } : {})
        }))
      },
      body: `
        <div class="py-12 px-4 max-w-4xl mx-auto text-stone-800">
          <nav class="text-xs uppercase tracking-widest text-stone-500 mb-6">
            <a href="/works">Works</a> / <span class="text-stone-900 font-semibold">${categoryTitle}</span>
          </nav>
          <h1 class="font-gallery text-3xl mb-4">${categoryTitle}</h1>
          <p class="text-sm text-stone-600 mb-8">${categorySnippet}</p>
          <div class="space-y-12">
            ${category.works.map((w: Artwork) => `
              <article class="text-center mb-8">
                <img src="${w.image}" alt="${w.alt || `${w.title || 'Artwork'} by Anvi Stevens`}" class="max-h-[600px] mx-auto mb-4" />
                ${w.title ? `<h2 class="text-base font-semibold">${w.title}</h2>` : ''}
                ${(w.year || w.medium || w.dimensions) ? `
                  <p class="text-xs text-stone-500">${w.year ? `${w.year} · ` : ''}${w.medium || ''}${w.dimensions ? ` · ${w.dimensions}` : ''}</p>
                ` : ''}
                ${w.poem ? `<p class="mt-2 text-xs text-stone-500 italic max-w-md mx-auto whitespace-pre-line">${w.poem}</p>` : ''}
              </article>
            `).join('')}
          </div>
        </div>
      `
    });

    // If category has subprojects (e.g. Book Art), also prerender separate webpages for each subproject
    if (category.subProjects && category.subProjects.length > 0) {
      category.subProjects.forEach((subProject) => {
        const subProjectUrl = `https://anvistevens.com/works/${category.id}/${subProject.id}`;
        const subProjectImage = `https://anvistevens.com${encodeURI(subProject.coverImage)}`;
        const subProjectDesc = `${subProject.title}: ${subProject.description || 'Handmade artist book series by Anvi Stevens.'}`;

        routes.push({
          dir: path.join('works', category.id, subProject.id),
          title: `${subProject.title} — Book Art — Anvi Stevens`,
          desc: subProjectDesc,
          url: subProjectUrl,
          image: subProjectImage,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${subProject.title} — Book Art`,
            url: subProjectUrl,
            description: subProject.description || '',
            creator: {
              '@type': 'VisualArtist',
              '@id': 'https://anvistevens.com/#artist',
              name: ARTIST_PROFILE.name
            },
            hasPart: subProject.works.map((w: Artwork) => ({
              '@type': 'VisualArtwork',
              name: w.title || subProject.title,
              image: `https://anvistevens.com${encodeURI(w.image)}`,
              creator: {
                '@type': 'VisualArtist',
                name: ARTIST_PROFILE.name
              },
              ...(w.medium ? { artMedium: w.medium } : {}),
              ...(w.year ? { dateCreated: w.year } : {})
            }))
          },
          body: `
            <div class="py-12 px-4 max-w-4xl mx-auto text-stone-800">
              <nav class="text-xs uppercase tracking-widest text-stone-500 mb-6">
                <a href="/works">Works</a> / <a href="/works/${category.id}">${category.title}</a> / <span class="text-stone-900 font-semibold">${subProject.title}</span>
              </nav>
              <h1 class="font-gallery text-3xl mb-4">${subProject.title}</h1>
              <p class="text-sm text-stone-600 mb-8">${subProject.description || ''}</p>
              <div class="space-y-12">
                ${subProject.works.map((w: Artwork) => `
                  <article class="text-center mb-8">
                    <img src="${w.image}" alt="${w.alt || `${w.title || 'Artwork'} by Anvi Stevens`}" class="max-h-[600px] mx-auto mb-4" />
                    ${w.title ? `<h2 class="text-base font-semibold">${w.title}</h2>` : ''}
                    ${(w.year || w.medium || w.dimensions) ? `
                      <p class="text-xs text-stone-500">${w.year ? `${w.year} · ` : ''}${w.medium || ''}${w.dimensions ? ` · ${w.dimensions}` : ''}</p>
                    ` : ''}
                    ${w.poem ? `<p class="mt-2 text-xs text-stone-500 italic max-w-md mx-auto whitespace-pre-line">${w.poem}</p>` : ''}
                  </article>
                `).join('')}
              </div>
            </div>
          `
        });
      });
    }
  });

  // Write out directories and index.html
  routes.forEach((route) => {
    const targetDir = path.join(distDir, route.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const html = buildPageHtml(
      route.title,
      route.desc,
      route.url,
      route.image,
      route.jsonLd,
      route.body,
      route.imageWidth,
      route.imageHeight,
      route.imageAlt
    );
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  });

  // Also create a 404.html from dist/index.html so GitHub Pages routes client requests seamlessly to the SPA
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

  console.log(`Successfully pre-rendered ${routes.length} crawlable static HTML pages and 404.html!`);
}

generateStaticPages();
