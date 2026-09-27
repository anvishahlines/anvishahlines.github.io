import React from 'react';
import { WorkCategory, Artwork } from '../types/portfolio';
import { BookArtDetail } from './BookArtDetail';
import { FormattedArtworkTitle } from './FormattedArtworkTitle';

interface ProjectGalleryProps {
  category: WorkCategory;
  onBackToWorks: () => void;
  onOpenArtworkModal: (artwork: Artwork) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  category,
  onBackToWorks,
  onOpenArtworkModal
}) => {
  // If this category is Book Art, delegate to the dedicated BookArtDetail
  if (category.id === 'book-art') {
    return (
      <BookArtDetail
        category={category}
        onBackToWorks={onBackToWorks}
        onOpenArtworkModal={onOpenArtworkModal}
      />
    );
  }

  return (
    <div className="py-8 sm:py-14 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Navigation Breadcrumb */}
        <div className="w-full flex items-center justify-between pb-6 mb-8 border-b border-stone-200/60 text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2 text-stone-500">
            <button
              onClick={onBackToWorks}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              ← Works
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{category.title}</span>
          </div>

          <span className="text-[11px] text-stone-400">
            {category.works.length} {category.works.length === 1 ? 'Work' : 'Works'}
          </span>
        </div>

        {/* Category Header */}
        <div className="text-center max-w-lg mb-10 sm:mb-14">
          <h2 className="text-base sm:text-lg tracking-[0.2em] uppercase font-medium text-stone-900">
            {category.title}
          </h2>
        </div>

        {/* Center-aligned stack of images of her works (full images now, but still equal scaling) */}
        <div className="w-full flex flex-col items-center gap-16 sm:gap-24">
          {category.works.map((artwork) => (
            <div
              key={artwork.id}
              className="flex flex-col items-center text-center w-full max-w-[460px] sm:max-w-[540px]"
            >
              {/* Full artwork container with equal scaling and uncropped presentation */}
              <div
                onClick={() => onOpenArtworkModal(artwork)}
                className="group cursor-zoom-in w-full transition-all"
              >
                <img
                  src={artwork.image}
                  alt={artwork.alt || artwork.title}
                  className="w-full max-h-[500px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Text goes below each relevant photo: bold title · year · medium · dimensions, center-aligned */}
              <div className="mt-3.5 w-full text-center">
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
                  <FormattedArtworkTitle title={artwork.title} />
                  {artwork.year && (
                    <>
                      <span className="text-stone-400 mx-1.5" aria-hidden="true">·</span>
                      <span>{artwork.year}</span>
                    </>
                  )}
                  {artwork.medium && (
                    <>
                      <span className="text-stone-400 mx-1.5" aria-hidden="true">·</span>
                      <span>{artwork.medium}</span>
                    </>
                  )}
                  {artwork.dimensions && (
                    <>
                      <span className="text-stone-400 mx-1.5" aria-hidden="true">·</span>
                      <span>{artwork.dimensions}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Works Footer link */}
        <div className="mt-20 pt-8 border-t border-stone-200 w-full flex items-center justify-center text-xs uppercase tracking-widest text-stone-500">
          <button
            onClick={onBackToWorks}
            className="hover:text-stone-950 transition-colors cursor-pointer"
          >
            ← Return to Works
          </button>
        </div>
      </div>
    </div>
  );
};
