import React from 'react';

export interface SectionBadgeProps {
  label: string;
  number?: string;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  label,
  number,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 bg-vanta-surface border border-vanta-border rounded-sm font-mono text-xs uppercase tracking-widest text-vanta-text-muted ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime animate-pulse" />
      {number && <span className="text-vanta-lime font-semibold">[{number}]</span>}
      <span className="text-vanta-text-primary">{label}</span>
    </div>
  );
};
