import React from 'react';
import { ArtistProfile } from '../types/portfolio';

interface AboutViewProps {
  profile: ArtistProfile;
}

export const AboutView: React.FC<AboutViewProps> = ({ profile }) => {
  return (
    <div className="py-6 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 1. Horizontal Paragraph that contains her Biography */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[15px] sm:text-[16px] text-stone-800 leading-relaxed sm:leading-[1.8] font-normal tracking-normal text-left">
            {profile.bioParagraph}
          </p>
        </div>

        {/* Clean Horizontal Dividing Line */}
        <div className="my-12 sm:my-16 border-t border-stone-200/80 w-full" />

        {/* 2. Two-Column Layout: Statement on the Left, CV on the Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* Left Column: Statement */}
          <div className="md:border-r md:border-stone-200/80 md:pr-10 lg:pr-12">
            <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-stone-900 mb-6 pb-2 border-b border-stone-200/60 inline-block">
              Statement
            </h3>

            <div className="space-y-5 text-[14px] sm:text-[15px] text-stone-700 leading-relaxed font-light">
              {profile.statementParagraphs.map((para, index) => (
                <p key={index} className="text-left">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: CV */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200/60 flex-wrap gap-2">
              <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-stone-900">
                Curriculum Vitae
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="/cv/Anvi_Stevens_CV.pdf"
                  download="Anvi_Stevens_CV.pdf"
                  className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-stone-600 hover:text-stone-950 font-medium transition-colors border border-stone-300 hover:border-stone-900 px-2.5 py-1 bg-white cursor-pointer shadow-xs"
                  title="Download Anvi Stevens CV as PDF"
                >
                  <svg className="w-3.5 h-3.5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="hidden sm:inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  title="Print CV"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Print</span>
                </button>
              </div>
            </div>

            <div className="space-y-8">
              {profile.cvSections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-medium text-stone-400">
                    {section.title}
                  </h4>

                  <div className="space-y-3 text-xs sm:text-[13px]">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col">
                        <div className="flex items-baseline justify-between gap-2">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-700 transition-colors inline-flex items-center gap-1 group"
                            >
                              <span>{item.primary}</span>
                              <span className="text-[10px] text-stone-400 group-hover:text-stone-700 transition-colors">↗</span>
                            </a>
                          ) : (
                            <span className="font-medium text-stone-800">
                              {item.primary}
                            </span>
                          )}
                          {item.year && (
                            <span className="text-[11px] text-stone-400 font-mono tracking-tight shrink-0">
                              {item.year}
                            </span>
                          )}
                        </div>
                        {item.secondary && (
                          <span className="text-stone-500 font-light mt-0.5">
                            {item.secondary}
                          </span>
                        )}
                        {item.details && (
                          <span className="text-[11px] text-stone-400 italic mt-0.5">
                            {item.details}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
