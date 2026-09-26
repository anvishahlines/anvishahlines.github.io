import React, { useEffect } from 'react';
import { Artwork } from '../types/portfolio';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Dialog Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#fafaf9] border border-stone-200 shadow-2xl p-4 sm:p-6 overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-950 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* High-Resolution Artwork Image */}
        <div className="w-full flex items-center justify-center bg-stone-100/70 p-2 sm:p-4 border border-stone-200/60 max-h-[68vh]">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-h-[64vh] max-w-full object-contain mx-auto"
          />
        </div>

        {/* Artwork Details & Captions */}
        <div className="w-full mt-4 text-center max-w-lg">
          <h3 className="font-gallery text-xl sm:text-2xl text-stone-900 font-normal">
            {artwork.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-2 text-xs text-stone-500 font-light">
            {artwork.medium && <span>{artwork.medium}</span>}
            {artwork.dimensions && (
              <>
                <span aria-hidden="true">·</span>
                <span>{artwork.dimensions}</span>
              </>
            )}
            {artwork.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{artwork.year}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
