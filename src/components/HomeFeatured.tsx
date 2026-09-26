import React from 'react';
import { WorkCategory } from '../types/portfolio';

interface HomeFeaturedProps {
  onExploreWorks: () => void;
  onSelectCategory: (categoryId: string) => void;
  categories: WorkCategory[];
}

export const HomeFeatured: React.FC<HomeFeaturedProps> = ({
  onExploreWorks,
  onSelectCategory,
  categories
}) => {
  // Use a signature piece as featured artwork: e.g. "Nature of Things" (stevensanvi05.jpg) or "Fabric Paintings"
  const featuredArtwork = {
    title: "Nature of Things",
    subtitle: "Chairs as vessels of personification & residual social space",
    image: "/images/stevensanvi05.jpg",
    medium: "Dyed textiles, stitching, and paint on linen",
    year: "2023"
  };

  return (
    <section className="py-8 sm:py-14 px-4 flex flex-col items-center">
      <div className="max-w-xl w-full flex flex-col items-center text-center">
        {/* Featured Artwork Box from the handwritten sketch */}
        <div
          onClick={onExploreWorks}
          className="group cursor-pointer w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] overflow-hidden bg-stone-100 transition-all duration-500">
            <img
              src={featuredArtwork.image}
              alt={featuredArtwork.title}
              className="w-full h-full object-cover scale-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.10]"
            />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/[0.04] transition-colors" />
          </div>

          {/* Caption underneath */}
          <div className="mt-4 flex flex-col items-center">
            <h2 className="font-gallery text-lg sm:text-xl text-stone-900 font-normal group-hover:text-stone-700 transition-colors">
              {featuredArtwork.title}
            </h2>
            <p className="mt-1 text-xs text-stone-500 font-light tracking-wide">
              {featuredArtwork.medium} · {featuredArtwork.year}
            </p>
          </div>
        </div>

        {/* Enter Works CTA */}
        <div className="mt-8">
          <button
            onClick={onExploreWorks}
            className="cursor-pointer px-6 py-2 border border-stone-300 text-xs uppercase tracking-[0.2em] text-stone-700 hover:text-stone-950 hover:border-stone-900 transition-all"
          >
            View Selected Works
          </button>
        </div>

        {/* Quiet divider */}
        <div className="my-12 w-24 border-t border-stone-200/80" />

        {/* Quick Category Jump (Unboxed text with typographic separators) */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-widest uppercase text-stone-500">
          {categories.map((cat, idx) => (
            <React.Fragment key={cat.id}>
              <button
                onClick={() => onSelectCategory(cat.id)}
                className="hover:text-stone-900 transition-colors cursor-pointer"
              >
                {cat.title}
              </button>
              {idx < categories.length - 1 && (
                <span className="text-stone-300" aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
