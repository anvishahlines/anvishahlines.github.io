import React from 'react';

/**
 * Formats artwork title so parenthetical descriptions (e.g. "(detail)", 
 * "(installation view of re:trace)", "(installation view of re:trace - detail 1)")
 * are displayed in normal weight font instead of bold.
 */
export const FormattedArtworkTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className = "font-semibold text-stone-900"
}) => {
  const match = title.match(/^([^(]+)(\(.*\))$/);
  if (!match) {
    return <span className={className}>{title}</span>;
  }

  const mainTitle = match[1].trimEnd();
  const parenthetical = match[2];

  return (
    <>
      <span className={className}>{mainTitle}</span>{' '}
      <span className="font-normal text-stone-600">{parenthetical}</span>
    </>
  );
};
