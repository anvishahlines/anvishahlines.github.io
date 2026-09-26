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
      </div>
    </section>
  );
};
