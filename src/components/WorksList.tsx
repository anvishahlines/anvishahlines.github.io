import React from 'react';
import { WorkCategory } from '../types/portfolio';

interface WorksListProps {
  categories: WorkCategory[];
  onSelectCategory: (categoryId: string) => void;
}

export const WorksList: React.FC<WorksListProps> = ({ categories, onSelectCategory }) => {
  return (
    <section className="py-10 sm:py-16 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Gallery Stack: Single center-aligned column matching the artist sketch */}
        <div className="w-full flex flex-col items-center gap-12 sm:gap-16">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group cursor-pointer flex flex-col items-center text-center w-full max-w-[280px] sm:max-w-[340px]"
            >
              {/* Detail-cropped thumbnail container:
                  - Equivalently sized for desktop and mobile
                  - Intentional detail crop with scale & overflow-hidden so it acts as an evocative detail shot
              */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100 border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-stone-400 group-hover:shadow-md">
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className={`w-full h-full object-cover scale-[1.28] ${category.cropPosition || 'object-center'} transition-transform duration-700 ease-out group-hover:scale-[1.36]`}
                  loading="lazy"
                />
                
                {/* Subtle vignette/sheen on hover */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/[0.04] transition-colors" />
              </div>

              {/* Project / work category text below relevant photo */}
              <div className="mt-3.5 flex flex-col items-center">
                <h3 className="text-xs sm:text-[13px] tracking-[0.2em] uppercase font-medium text-stone-800 group-hover:text-stone-950 transition-colors">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="mt-1 text-[11px] text-stone-400 tracking-wide font-light max-w-[260px] line-clamp-1">
                    {category.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
