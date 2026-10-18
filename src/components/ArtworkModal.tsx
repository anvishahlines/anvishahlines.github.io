import React, { useEffect, useState, useCallback } from 'react';
import { Artwork } from '../types/portfolio';
import { FormattedArtworkTitle } from './FormattedArtworkTitle';
import { getWebpSrcSet, getJpegSrcSet } from '../utils/imageUtils';

interface ArtworkModalProps {
  artwork: Artwork | null;
  artworks?: Artwork[];
  onClose: () => void;
  onNavigate?: (artwork: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  artworks = [],
  onClose,
  onNavigate
}) => {
  const currentIndex = artwork && artworks.length > 0
    ? artworks.findIndex((a) => a.id === artwork.id)
    : -1;

  const hasMultiple = artworks.length > 1 && currentIndex !== -1;

  const goToNext = useCallback(() => {
    if (!hasMultiple || !onNavigate) return;
    const nextIndex = (currentIndex + 1) % artworks.length;
    onNavigate(artworks[nextIndex]);
  }, [hasMultiple, currentIndex, artworks, onNavigate]);

  const goToPrev = useCallback(() => {
    if (!hasMultiple || !onNavigate) return;
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    onNavigate(artworks[prevIndex]);
  }, [hasMultiple, currentIndex, artworks, onNavigate]);

  // Keyboard navigation: Escape to close, Left/Right arrows to flip through works
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose, goToNext, goToPrev]);

  // Preload adjacent images in the background for zero-latency flipping
  useEffect(() => {
    if (!hasMultiple) return;
    const nextIdx = (currentIndex + 1) % artworks.length;
    const prevIdx = (currentIndex - 1 + artworks.length) % artworks.length;

    const imgNext = new Image();
    imgNext.src = artworks[nextIdx].image;
    const imgPrev = new Image();
    imgPrev.src = artworks[prevIdx].image;
  }, [hasMultiple, currentIndex, artworks]);

  // Mobile Touch Swipe Handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      goToNext(); // Swiped left -> next
    } else if (distance < -minSwipeDistance) {
      goToPrev(); // Swiped right -> prev
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!artwork) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Dialog Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#fafaf9] border border-stone-200 shadow-2xl p-4 sm:p-6 overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 text-stone-500 hover:text-stone-950 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Previous Artwork Chevron Button */}
        {hasMultiple && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 sm:left-4 top-[40%] -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/90 sm:bg-white/75 hover:bg-white text-stone-700 hover:text-stone-950 shadow-md backdrop-blur-sm transition-all focus:outline-none cursor-pointer group"
            aria-label="Previous artwork"
            title="Previous artwork (Left arrow)"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next Artwork Chevron Button */}
        {hasMultiple && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-4 top-[40%] -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/90 sm:bg-white/75 hover:bg-white text-stone-700 hover:text-stone-950 shadow-md backdrop-blur-sm transition-all focus:outline-none cursor-pointer group"
            aria-label="Next artwork"
            title="Next artwork (Right arrow)"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* High-Resolution Artwork Image */}
        <div className="w-full flex items-center justify-center max-h-[70vh] sm:max-h-[72vh]">
          <picture>
            <source
              type="image/webp"
              srcSet={getWebpSrcSet(artwork.image)}
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <source
              srcSet={getJpegSrcSet(artwork.image)}
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <img
              key={artwork.image}
              src={artwork.image}
              alt={artwork.alt || artwork.title}
              className="max-h-[66vh] sm:max-h-[70vh] max-w-full object-contain mx-auto transition-opacity duration-300 animate-fadeIn"
              decoding="async"
            />
          </picture>
        </div>

        {/* Artwork Details & Captions */}
        <div className="w-full mt-4 text-center max-w-lg">
          {hasMultiple && (
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-400 font-mono mb-1.5">
              {currentIndex + 1} of {artworks.length}
            </p>
          )}

          {(artwork.title || artwork.year || artwork.medium || artwork.dimensions) && (
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
              {artwork.title && <FormattedArtworkTitle title={artwork.title} />}
              {artwork.year && (
                <>
                  {artwork.title && <span className="text-stone-400 mx-1.5" aria-hidden="true">·</span>}
                  <span>{artwork.year}</span>
                </>
              )}
              {artwork.medium && (
                <>
                  {(artwork.title || artwork.year) && <span className="text-stone-400 mx-1.5" aria-hidden="true">·</span>}
                  <span>{artwork.medium}</span>
                </>
              )}
              {artwork.dimensions && (
                <>
                  {(artwork.title || artwork.year || artwork.medium) && <span className="text-stone-400 mx-1.5" aria-hidden="true">·</span>}
                  <span>{artwork.dimensions}</span>
                </>
              )}
            </p>
          )}
          {artwork.poem && (
            <p className="mt-2 text-xs sm:text-[13px] text-stone-500 italic font-light whitespace-pre-line leading-relaxed">
              {artwork.poem}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
