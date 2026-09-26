import React from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, categoryId?: string, subProjectId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf9]/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pt-5 pb-3.5 sm:pt-8 sm:pb-5">
          {/* Brand Mark: Functions as Home */}
          <button
            onClick={() => handleNav('home')}
            className="group cursor-pointer text-center focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
            aria-label="Anvi Stevens - Return to Home"
          >
            <h1 className="font-gallery text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.22em] font-normal text-stone-900 group-hover:text-stone-600 transition-colors">
              ANVI STEVENS
            </h1>
          </button>

          {/* Unified Navigation: Works · About · Contact (synced on both mobile & desktop) */}
          <nav className="flex items-center gap-6 sm:gap-10 mt-4 sm:mt-5 pt-3 border-t border-stone-200/50 w-full justify-center text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium text-stone-600">
            <button
              onClick={() => handleNav('works')}
              className={`pb-1 transition-all cursor-pointer hover:text-stone-950 ${
                currentView === 'works' || currentView === 'category' || currentView === 'subproject'
                  ? 'text-stone-950 border-b border-stone-900 font-semibold'
                  : 'text-stone-500 border-b border-transparent hover:border-stone-300'
              }`}
            >
              Works
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`pb-1 transition-all cursor-pointer hover:text-stone-950 ${
                currentView === 'about'
                  ? 'text-stone-950 border-b border-stone-900 font-semibold'
                  : 'text-stone-500 border-b border-transparent hover:border-stone-300'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`pb-1 transition-all cursor-pointer hover:text-stone-950 ${
                currentView === 'contact'
                  ? 'text-stone-950 border-b border-stone-900 font-semibold'
                  : 'text-stone-500 border-b border-transparent hover:border-stone-300'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
