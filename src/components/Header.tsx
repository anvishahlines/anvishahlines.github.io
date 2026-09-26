import React, { useState } from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, categoryId?: string, subProjectId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf9]/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pt-6 pb-4 sm:pt-8 sm:pb-5">
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

          {/* Desktop Navigation: Centered beneath brand */}
          <nav className="hidden sm:flex items-center gap-10 mt-5 pt-3 border-t border-stone-200/50 w-full justify-center text-xs tracking-[0.2em] uppercase font-medium text-stone-600">
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
              Bio + CV
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

            <a
              href="https://www.instagram.com/aunvi20/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 transition-all text-stone-500 border-b border-transparent hover:border-stone-300 hover:text-stone-950 flex items-center gap-1.5"
              aria-label="Anvi Stevens on Instagram @aunvi20"
            >
              <span>Instagram</span>
              <svg className="w-3 h-3 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="sm:hidden flex items-center justify-between w-full mt-3 pt-2 border-t border-stone-200/60">
            <span className="text-[11px] uppercase tracking-widest text-stone-400">
              {currentView === 'works' || currentView === 'category'
                ? 'Portfolio / Works'
                : currentView === 'about'
                ? 'Biography & CV'
                : currentView === 'contact'
                ? 'Contact'
                : 'Studio Gallery'}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-700 hover:text-black focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="sm:hidden w-full pt-4 pb-2 flex flex-col items-center gap-4 text-xs uppercase tracking-[0.2em] border-t border-stone-200/50 mt-2 animate-fadeIn">
              <button
                onClick={() => handleNav('works')}
                className={`py-1.5 ${
                  currentView === 'works' || currentView === 'category'
                    ? 'text-stone-950 font-semibold underline underline-offset-4'
                    : 'text-stone-600'
                }`}
              >
                Works
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`py-1.5 ${
                  currentView === 'about'
                    ? 'text-stone-950 font-semibold underline underline-offset-4'
                    : 'text-stone-600'
                }`}
              >
                Bio + CV
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`py-1.5 ${
                  currentView === 'contact'
                    ? 'text-stone-950 font-semibold underline underline-offset-4'
                    : 'text-stone-600'
                }`}
              >
                Contact
              </button>
              <a
                href="https://www.instagram.com/aunvi20/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 text-stone-500 hover:text-stone-900 flex items-center gap-1.5"
              >
                <span>Instagram (@aunvi20)</span>
                <svg className="w-3 h-3 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
