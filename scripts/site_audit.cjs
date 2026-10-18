const fs = require('fs');
const path = require('path');

// Read portfolioData.ts as text to parse cleanly without ESM issues
const dataContent = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

console.log('=== 1. AUDITING PORTFOLIO DATA & ARTWORK IMAGES ===');

// Check profile image
const profileMatch = dataContent.match(/profileImage:\s*["']([^"']+)["']/);
if (profileMatch) {
  const pPath = path.join('public', profileMatch[1]);
  if (!fs.existsSync(pPath)) {
    console.error('❌ Missing profile image:', pPath);
  } else {
    console.log('✅ Profile image found:', pPath, `(${fs.statSync(pPath).size} bytes)`);
  }
}

// Find all image references in portfolioData.ts
const imageRegex = /image:\s*["']([^"']+)["']/g;
let match;
const foundImages = new Set();
while ((match = imageRegex.exec(dataContent)) !== null) {
  foundImages.add(match[1]);
}

const coverRegex = /coverImage:\s*["']([^"']+)["']/g;
while ((match = coverRegex.exec(dataContent)) !== null) {
  foundImages.add(match[1]);
}

console.log(`Auditing ${foundImages.size} unique image references...`);
let missingCount = 0;
let largeCount = 0;
for (const imgUrl of foundImages) {
  const localPath = path.join('public', imgUrl.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    console.error(`❌ MISSING IMAGE: ${imgUrl} -> ${localPath}`);
    missingCount++;
  } else {
    const size = fs.statSync(localPath).size;
    if (size === 0) {
      console.error(`❌ ZERO BYTE IMAGE: ${imgUrl}`);
      missingCount++;
    } else if (size > 1024 * 1024) {
      console.warn(`⚠️ LARGE IMAGE (>1MB): ${imgUrl} (${(size / 1024 / 1024).toFixed(2)} MB)`);
      largeCount++;
    }
  }
}
if (missingCount === 0) {
  console.log('✅ All image paths exist and have non-zero size.');
}

console.log('\n=== 2. AUDITING ALT TEXTS ===');
const altRegex = /alt:\s*["']([^"']+)["']/g;
let altMatch;
let altCount = 0;
let shortAlts = [];
while ((altMatch = altRegex.exec(dataContent)) !== null) {
  altCount++;
  const altText = altMatch[1];
  if (altText.trim().length < 15) {
    shortAlts.push(altText);
  }
}
console.log(`Found ${altCount} alt text definitions.`);
if (shortAlts.length > 0) {
  console.warn('⚠️ Short alt texts (<15 chars):', shortAlts);
} else {
  console.log('✅ All alt texts are detailed, comprehensive, and non-empty.');
}

console.log('\n=== 3. AUDITING ALL PRE-RENDERED PAGES FOR METADATA, SOCIAL TAGS & SCHEMA ===');
function checkHtmlFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Check title
  if (!html.includes('<title>') || html.includes('<title></title>')) {
    issues.push('Missing or empty <title>');
  }

  // Check canonical link
  if (!html.includes('<link rel="canonical"')) {
    issues.push('Missing canonical link');
  }

  // Check meta description
  if (!html.includes('<meta name="description"')) {
    issues.push('Missing meta description');
  }

  // Check OpenGraph tags
  const ogTags = ['og:title', 'og:description', 'og:url', 'og:image'];
  for (const tag of ogTags) {
    if (!html.includes(`property="${tag}"`)) {
      issues.push(`Missing OpenGraph tag: ${tag}`);
    }
  }

  // Check Twitter Cards
  const twitterTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  for (const tag of twitterTags) {
    if (!html.includes(`name="${tag}"`)) {
      issues.push(`Missing Twitter tag: ${tag}`);
    }
  }

  // Check Schema.org JSON-LD
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!jsonLdMatch) {
    issues.push('Missing Schema.org JSON-LD script');
  } else {
    try {
      JSON.parse(jsonLdMatch[1]);
    } catch (e) {
      issues.push(`Invalid JSON in Schema.org JSON-LD: ${e.message}`);
    }
  }

  // Check for any broken relative image links (src attributes)
  const srcRegex = /src=["']([^"']+)["']/g;
  let srcMatch;
  while ((srcMatch = srcRegex.exec(html)) !== null) {
    const src = srcMatch[1];
    if (src.startsWith('http') || src.startsWith('data:')) continue;
    // Check in docs/ or public/
    const checkDocs = path.join('docs', decodeURI(src.replace(/^\//, '')));
    if (!fs.existsSync(checkDocs)) {
      issues.push(`Broken src: ${src}`);
    }
  }

  // Check for broken internal href links
  const hrefRegex = /href=["']([^"']+)["']/g;
  let hrefMatch;
  while ((hrefMatch = hrefRegex.exec(html)) !== null) {
    const href = hrefMatch[1];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('tel:')) continue;
    if (href.endsWith('.css') || href.endsWith('.xml') || href.endsWith('.txt') || href.endsWith('.pdf')) {
      const checkDocs = path.join('docs', decodeURI(href.replace(/^\//, '')));
      if (!fs.existsSync(checkDocs)) {
        issues.push(`Broken asset link: ${href}`);
      }
    } else {
      // Internal page route
      let cleanRoute = href.split('#')[0].split('?')[0].replace(/^\//, '');
      if (cleanRoute === '') cleanRoute = 'index.html';
      else if (!cleanRoute.endsWith('.html')) cleanRoute = path.join(cleanRoute, 'index.html');
      const checkDocs = path.join('docs', decodeURI(cleanRoute));
      if (!fs.existsSync(checkDocs)) {
        issues.push(`Broken internal page link: ${href} (checked ${checkDocs})`);
      }
    }
  }

  return issues;
}

function walkDocs(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(walkDocs(full));
    } else if (file.endsWith('.html')) {
      files.push(full);
    }
  });
  return files;
}

const htmlFiles = walkDocs('docs');
console.log(`Checking ${htmlFiles.length} HTML files in docs/...`);
let totalIssues = 0;
for (const file of htmlFiles) {
  const issues = checkHtmlFile(file);
  if (issues.length > 0) {
    console.error(`Issues in ${file}:`, issues);
    totalIssues += issues.length;
  }
}
if (totalIssues === 0) {
  console.log('✅ All pre-rendered HTML files have valid titles, meta descriptions, canonical links, OpenGraph tags, Twitter Cards, valid JSON-LD schemas, and 0 broken links or assets.');
}

console.log('\n=== AUDIT COMPLETE ===');
