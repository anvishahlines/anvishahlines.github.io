import React, { useState } from 'react';

interface GalleryArtworkImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GalleryArtworkImage: React.FC<GalleryArtworkImageProps> = ({
  src,
  alt,
  priority = false,
  className = '',
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`group cursor-zoom-in w-full relative overflow-hidden bg-stone-100/50 rounded-[2px] transition-all ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        // @ts-expect-error - fetchPriority attribute is supported in modern browsers
        fetchpriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        ref={(el) => {
          if (el && el.complete && !isLoaded) {
            setIsLoaded(true);
          }
        }}
        onLoad={() => setIsLoaded(true)}
        className={`w-full max-h-[500px] object-contain mx-auto transition-all duration-500 ease-out group-hover:scale-[1.01] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
