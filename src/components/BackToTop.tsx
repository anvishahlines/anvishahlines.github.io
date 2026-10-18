import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-1.5 px-3 py-2 bg-[#fafaf9]/95 hover:bg-white text-stone-600 hover:text-stone-950 border border-stone-300/80 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-full text-[10px] tracking-[0.2em] uppercase font-medium backdrop-blur-sm transition-all duration-300 animate-fadeIn cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 group"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg
        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span className="hidden sm:inline">Top</span>
    </button>
  );
};
