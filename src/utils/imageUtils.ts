/**
 * Utility functions for modern responsive images, WebP formatting, and srcSets
 */

export function getWebpSrc(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}

export function getWebpSrcSet(src: string): string {
  const extMatch = src.match(/\.(jpe?g|png)$/i);
  if (!extMatch) return src;
  const base = src.slice(0, -extMatch[0].length);
  return `${base}-800w.webp 800w, ${base}.webp 1600w`;
}

export function getJpegSrcSet(src: string): string {
  const extMatch = src.match(/\.(jpe?g|png)$/i);
  if (!extMatch) return src;
  const base = src.slice(0, -extMatch[0].length);
  return `${base}-800w.jpg 800w, ${src} 1600w`;
}
