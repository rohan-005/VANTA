import React from 'react';

export interface SectionBadgeProps {
  label: string;
  number?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  label,
  number,
  theme = 'light',
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-sm font-mono text-xs uppercase tracking-widest ${
        isLight
          ? 'bg-vanta-stone/80 border border-vanta-sand text-vanta-dark'
          : 'bg-vanta-dark border border-vanta-border text-vanta-ivory'
      } ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime animate-pulse" />
      {number && (
        <span className={isLight ? 'text-vanta-dark font-bold' : 'text-vanta-lime font-bold'}>
          [{number}]
        </span>
      )}
      <span>{label}</span>
    </div>
  );
};
