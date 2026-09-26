import React from 'react';

interface HomeViewProps {
  onNavigateToWorks: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToWorks }) => {
  return (
    <section className="py-8 sm:py-14 md:py-16 px-4 flex flex-col items-center justify-center">
      {/* 
        Home page according to the artist's sketch:
        Only the headers and the profile image of her in her studio (from the about page of anvistevens.com)
      */}
      <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] flex flex-col items-center">
        <div 
          onClick={onNavigateToWorks}
          className="group cursor-pointer w-full aspect-[3/4] overflow-hidden bg-stone-100 border border-stone-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:border-stone-400 transition-all duration-500"
        >
          <img
            src="/images/profile_pic.jpg"
            alt="Anvi Stevens in her studio"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="eager"
          />
        </div>

        {/* Instagram link under the photo */}
        <div className="mt-4 flex flex-col items-center">
          <a
            href="https://www.instagram.com/aunvi20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-1.5"
            aria-label="Anvi Stevens on Instagram @aunvi20"
          >
            <span>Instagram: @aunvi20</span>
            <svg className="w-3 h-3 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
