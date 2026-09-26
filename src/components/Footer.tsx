import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-stone-200/80 bg-[#fafaf9] py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
        {/* Navigation shortcuts: Works · About · Contact */}
        <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-widest text-stone-500 font-light">
          <button
            onClick={() => onNavigate('works')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Works
          </button>
          <span className="text-stone-300">·</span>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            About
          </button>
          <span className="text-stone-300">·</span>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Minimal artist signature */}
        <p className="text-[11px] text-stone-400 font-light tracking-[0.2em] uppercase mt-2">
          Anvi Stevens
        </p>
      </div>
    </footer>
  );
};
