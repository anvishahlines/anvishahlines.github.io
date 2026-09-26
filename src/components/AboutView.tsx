import React from 'react';
import { ArtistProfile } from '../types/portfolio';

interface AboutViewProps {
  profile: ArtistProfile;
}

export const AboutView: React.FC<AboutViewProps> = ({ profile }) => {
  return (
    <div className="py-10 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xs sm:text-[13px] tracking-[0.25em] uppercase font-medium text-stone-400">
            About the Artist
          </h2>
        </div>

        {/* 1. Horizontal Paragraph that contains her Biography */}
        <div className="max-w-3xl mx-auto">
          <p className="text-[15px] sm:text-[16px] text-stone-800 leading-relaxed sm:leading-[1.8] font-normal tracking-normal text-justify sm:text-left">
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
              Artist Statement
            </h3>

            <div className="space-y-5 text-[14px] sm:text-[15px] text-stone-700 leading-relaxed font-light">
              {profile.statementParagraphs.map((para, index) => (
                <p key={index} className="text-justify sm:text-left">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: CV */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-stone-900 mb-6 pb-2 border-b border-stone-200/60 inline-block">
              Curriculum Vitae
            </h3>

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
                          <span className="font-medium text-stone-800">
                            {item.primary}
                          </span>
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
