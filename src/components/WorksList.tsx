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
          {categories.map((category) => {
            // Guarantee that the header image is an artwork contained within this specific category
            const isContained = category.works && category.works.some((w) => w.image === category.coverImage);
            const headerImage = isContained
              ? category.coverImage
              : (category.works && category.works.length > 0 ? category.works[0].image : category.coverImage);

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="group cursor-pointer flex flex-col items-center text-center w-full max-w-[280px] sm:max-w-[340px]"
              >
                {/* Artwork thumbnail container showcasing the actual work contained in this category */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100 transition-all duration-300">
                  <img
                    src={headerImage}
                    alt={category.title}
                    className={`w-full h-full object-cover ${category.cropPosition || 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
