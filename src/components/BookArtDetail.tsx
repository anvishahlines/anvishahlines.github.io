import React, { useState } from 'react';
import { WorkCategory, SubProject, Artwork } from '../types/portfolio';

interface BookArtDetailProps {
  category: WorkCategory;
  initialSubProjectId?: string;
  onBackToWorks: () => void;
  onOpenArtworkModal: (artwork: Artwork) => void;
}

export const BookArtDetail: React.FC<BookArtDetailProps> = ({
  category,
  initialSubProjectId,
  onBackToWorks,
  onOpenArtworkModal
}) => {
  const [selectedSubProjectId, setSelectedSubProjectId] = useState<string | null>(
    initialSubProjectId || null
  );

  const subProjects = category.subProjects || [];
  const currentSubProject = subProjects.find((sp) => sp.id === selectedSubProjectId);

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
            {selectedSubProjectId ? (
              <button
                onClick={() => setSelectedSubProjectId(null)}
                className="cursor-pointer hover:text-stone-900 transition-colors"
              >
                {category.title}
              </button>
            ) : (
              <span className="text-stone-900 font-semibold">{category.title}</span>
            )}
            {currentSubProject && (
              <>
                <span>/</span>
                <span className="text-stone-900 font-semibold">{currentSubProject.title}</span>
              </>
            )}
          </div>

          {selectedSubProjectId && (
            <button
              onClick={() => setSelectedSubProjectId(null)}
              className="text-stone-500 hover:text-stone-900 transition-colors text-[11px]"
            >
              View All Books
            </button>
          )}
        </div>

        {/* View Mode 1: Sub-Projects Photo Links Overview */}
        {!selectedSubProjectId && (
          <div className="w-full flex flex-col items-center">
            {/* Category Intro */}
            <div className="text-center max-w-md mb-12">
              <h2 className="text-sm tracking-[0.25em] uppercase font-medium text-stone-900 mb-2">
                {category.title}
              </h2>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                {category.description}
              </p>
            </div>

            {/* Photo links to separate projects: "Her Little Black Book", "Story Board", and "New York Poem" */}
            <div className="w-full flex flex-col items-center gap-14">
              {subProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedSubProjectId(project.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer flex flex-col items-center text-center w-full max-w-[280px] sm:max-w-[340px]"
                >
                  {/* Cropped photo link container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100 border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-stone-400 group-hover:shadow-md">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover scale-[1.26] transition-transform duration-700 ease-out group-hover:scale-[1.34]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/[0.04] transition-colors" />
                  </div>

                  {/* Project text below photo */}
                  <div className="mt-3.5 flex flex-col items-center">
                    <h3 className="text-xs sm:text-[13px] tracking-[0.2em] uppercase font-medium text-stone-800 group-hover:text-stone-950 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-stone-400 tracking-wide font-light line-clamp-1">
                      {project.works.length} works · Click to open project
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Contained Single Sub-Project Page with full images & text below */}
        {selectedSubProjectId && currentSubProject && (
          <div className="w-full flex flex-col items-center">
            {/* Sub-Project Title & Narrative */}
            <div className="text-center max-w-lg mb-12 sm:mb-16">
              <h2 className="text-base sm:text-lg tracking-[0.2em] uppercase font-medium text-stone-900 mb-3">
                {currentSubProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {currentSubProject.description}
              </p>
            </div>

            {/* Center-aligned stack of full artwork images with equal scaling */}
            <div className="w-full flex flex-col items-center gap-16 sm:gap-24">
              {currentSubProject.works.map((artwork) => (
                <div
                  key={artwork.id}
                  className="flex flex-col items-center text-center w-full max-w-[460px] sm:max-w-[540px]"
                >
                  {/* Full image viewer container with equal scaling and uncropped presentation */}
                  <div
                    onClick={() => onOpenArtworkModal(artwork)}
                    className="group cursor-zoom-in w-full bg-stone-100/60 p-2 sm:p-3 border border-stone-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:border-stone-400 transition-all"
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full max-h-[500px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>

                  {/* Text below relevant photo */}
                  <div className="mt-4 flex flex-col items-center max-w-md">
                    <h3 className="font-gallery text-lg sm:text-xl text-stone-900 font-normal">
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

                    {artwork.description && (
                      <p className="mt-2 text-xs text-stone-600 font-light leading-relaxed italic">
                        {artwork.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Navigation for other books */}
            <div className="mt-20 pt-8 border-t border-stone-200 w-full flex items-center justify-center gap-6 text-xs uppercase tracking-widest text-stone-500">
              <button
                onClick={() => setSelectedSubProjectId(null)}
                className="hover:text-stone-950 transition-colors"
              >
                ← All Book Art Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
