import { WORK_CATEGORIES, ARTIST_PROFILE } from '../data/portfolioData';

export interface PageMetadata {
  title: string;
  description: string;
  url: string;
  image: string;
  imageType?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  type: string;
  jsonLd: Record<string, unknown>;
}

const BASE_URL = 'https://anvistevens.com';

export function getPageMetadata(
  view: 'home' | 'works' | 'category' | 'about' | 'contact',
  categoryId?: string,
  subProjectId?: string
): PageMetadata {
  if (view === 'about') {
    return {
      title: 'About & CV — Anvi Stevens | Boston Contemporary Painter',
      description: 'Artist biography, statement, education, and exhibition history of Boston and Massachusetts painter Anvi Stevens (MFA Boston University).',
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/images/profile_pic.jpg`,
      type: 'profile',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Anvi Stevens',
        url: `${BASE_URL}/about`,
        mainEntity: {
          '@type': 'VisualArtist',
          '@id': `${BASE_URL}/#artist`,
          name: ARTIST_PROFILE.name,
          jobTitle: 'Visual Artist & Contemporary Painter',
          description: ARTIST_PROFILE.bioParagraph,
          alumniOf: [
            {
              '@type': 'CollegeOrUniversity',
              name: 'Boston University'
            },
            {
              '@type': 'CollegeOrUniversity',
              name: 'Maharaja Sayajirao University of Baroda'
            }
          ]
        }
      }
    };
  }

  if (view === 'contact') {
    return {
      title: 'Contact & Inquiries — Anvi Stevens | Visual Artist',
      description: 'Inquire about artwork, exhibitions, and commissions with contemporary visual artist Anvi Stevens in the Boston area.',
      url: `${BASE_URL}/contact`,
      image: `${BASE_URL}/images/profile_pic.jpg`,
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Anvi Stevens',
        url: `${BASE_URL}/contact`,
        mainEntity: {
          '@type': 'VisualArtist',
          '@id': `${BASE_URL}/#artist`,
          name: ARTIST_PROFILE.name,
          email: ARTIST_PROFILE.email
        }
      }
    };
  }

  if (view === 'works') {
    return {
      title: 'Selected Works — Anvi Stevens | Contemporary Fine Art & Painting',
      description: 'Selected bodies of work by contemporary visual artist Anvi Stevens: Nature of Things, Landscape, Sculptures, Installation, Drawings, and Book Art.',
      url: `${BASE_URL}/works`,
      image: `${BASE_URL}/images/nature-of-things/02_Pull%20the%20curtain.JPG`,
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Selected Works — Anvi Stevens',
        url: `${BASE_URL}/works`,
        description: 'Selected bodies of work by contemporary visual artist Anvi Stevens.',
        creator: {
          '@type': 'VisualArtist',
          '@id': `${BASE_URL}/#artist`,
          name: ARTIST_PROFILE.name
        },
        hasPart: WORK_CATEGORIES.map((cat) => ({
          '@type': 'CreativeWork',
          name: cat.title,
          url: `${BASE_URL}/works/${cat.id}`,
          image: `${BASE_URL}${encodeURI(cat.coverImage)}`
        }))
      }
    };
  }

  if (view === 'category' && categoryId) {
    const category = WORK_CATEGORIES.find((c) => c.id === categoryId) || WORK_CATEGORIES[0];

    // Check for subproject
    if (subProjectId && category.subProjects) {
      const subProject = category.subProjects.find((sp) => sp.id === subProjectId);
      if (subProject) {
        return {
          title: `${subProject.title} — Book Art — Anvi Stevens`,
          description: `${subProject.title}: ${subProject.description || 'Handmade artist book series by Anvi Stevens.'}`,
          url: `${BASE_URL}/works/${category.id}/${subProject.id}`,
          image: `${BASE_URL}${encodeURI(subProject.coverImage)}`,
          type: 'article',
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${subProject.title} — Book Art`,
            url: `${BASE_URL}/works/${category.id}/${subProject.id}`,
            description: subProject.description || '',
            creator: {
              '@type': 'VisualArtist',
              '@id': `${BASE_URL}/#artist`,
              name: ARTIST_PROFILE.name
            },
            hasPart: subProject.works.map((w) => ({
              '@type': 'VisualArtwork',
              name: w.title || subProject.title,
              image: `${BASE_URL}${encodeURI(w.image)}`,
              creator: {
                '@type': 'VisualArtist',
                name: ARTIST_PROFILE.name
              },
              ...(w.medium ? { artMedium: w.medium } : {}),
              ...(w.year ? { dateCreated: w.year } : {})
            }))
          }
        };
      }
    }

    // Category page
    const categoryTitle = category.title;
    const categorySnippet = category.statementSnippet || `${category.title} by contemporary artist Anvi Stevens.`;
    return {
      title: `${categoryTitle} — Anvi Stevens | Contemporary Fine Art`,
      description: `${categoryTitle}: ${categorySnippet}`,
      url: `${BASE_URL}/works/${category.id}`,
      image: `${BASE_URL}${encodeURI(category.coverImage)}`,
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${categoryTitle} — Anvi Stevens`,
        url: `${BASE_URL}/works/${category.id}`,
        description: categorySnippet,
        creator: {
          '@type': 'VisualArtist',
          '@id': `${BASE_URL}/#artist`,
          name: ARTIST_PROFILE.name
        },
        hasPart: category.works.map((w) => ({
          '@type': 'VisualArtwork',
          name: w.title || categoryTitle,
          image: `${BASE_URL}${encodeURI(w.image)}`,
          creator: {
            '@type': 'VisualArtist',
            name: ARTIST_PROFILE.name
          },
          ...(w.medium ? { artMedium: w.medium } : {}),
          ...(w.year ? { dateCreated: w.year } : {})
        }))
      }
    };
  }

  // Default Home
  return {
    title: 'Anvi Stevens — Artist | Boston, MA',
    description: 'Artist | Boston, MA',
    url: `${BASE_URL}/`,
    image: `${BASE_URL}/images/profile_pic.jpg`,
    imageType: 'image/jpeg',
    imageWidth: '896',
    imageHeight: '1040',
    imageAlt: 'Anvi Stevens — Artist | Boston, MA',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: 'Anvi Stevens',
          url: `${BASE_URL}/`,
          description: 'Artist | Boston, MA'
        },
        {
          '@type': 'VisualArtist',
          '@id': `${BASE_URL}/#artist`,
          name: ARTIST_PROFILE.name,
          alternateName: 'Anvi Shah',
          url: BASE_URL,
          image: `${BASE_URL}/images/profile_pic.jpg`,
          jobTitle: 'Artist | Boston, MA',
          description: 'Artist | Boston, MA',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Wakefield',
            addressRegion: 'MA',
            addressCountry: 'US'
          },
          sameAs: [
            ARTIST_PROFILE.instagramUrl,
            'https://www.createmagazine.co/artists/anvi-stevens'
          ]
        }
      ]
    }
  };
}

export function updatePageHead(meta: PageMetadata): void {
  if (typeof document === 'undefined') return;

  // Title
  document.title = meta.title;

  // Helpers
  const setMeta = (attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const setLink = (rel: string, href: string) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  };

  // Standard & Canonical
  setMeta('name', 'description', meta.description);
  setLink('canonical', meta.url);

  // OpenGraph
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', meta.url);
  setMeta('property', 'og:image', meta.image);
  setMeta('property', 'og:image:type', meta.imageType || 'image/jpeg');
  setMeta('property', 'og:image:width', meta.imageWidth || '1200');
  setMeta('property', 'og:image:height', meta.imageHeight || '1200');
  setMeta('property', 'og:image:alt', meta.imageAlt || meta.title);
  setMeta('property', 'og:type', meta.type);
  setMeta('property', 'og:site_name', 'Anvi Stevens');

  // Twitter Cards
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  setMeta('name', 'twitter:image', meta.image);
  setMeta('name', 'twitter:image:alt', meta.imageAlt || meta.title);

  // Schema JSON-LD
  let jsonLdScript = document.getElementById('route-jsonld') as HTMLScriptElement | null;
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'route-jsonld';
    jsonLdScript.type = 'application/ld+json';
    document.head.appendChild(jsonLdScript);
  }
  jsonLdScript.textContent = JSON.stringify(meta.jsonLd, null, 2);
}
