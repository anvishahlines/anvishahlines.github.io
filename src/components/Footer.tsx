import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-stone-200/80 bg-[#fafaf9] py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Navigation shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-stone-500 font-light">
          <button
            onClick={() => onNavigate('works')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Works
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Bio + CV
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
          <span>·</span>
          <a
            href="https://www.instagram.com/aunvi20/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors"
          >
            Instagram (@aunvi20)
          </a>
        </div>

        {/* Quiet copyright */}
        <p className="text-[11px] text-stone-400 font-light tracking-wide">
          © {new Date().getFullYear()} Anvi Stevens. All rights reserved. Artwork and images protected by copyright.
        </p>
      </div>
    </footer>
  );
};
