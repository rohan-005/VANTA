import React from 'react';

export interface SpecPillProps {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
}

export const SpecPill: React.FC<SpecPillProps> = ({
  label,
  value,
  highlight = false,
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-between p-2.5 bg-vanta-dark/80 border ${
        highlight
          ? 'border-vanta-lime/40 bg-vanta-lime-dim/20'
          : 'border-vanta-border'
      } rounded-sm text-xs ${className}`}
    >
      <span className="font-mono text-vanta-text-muted uppercase tracking-wider text-[11px]">
        {label}
      </span>
      <span
        className={`font-mono font-medium ${
          highlight ? 'text-vanta-lime font-semibold' : 'text-vanta-text-primary'
        }`}
      >
        {value}
      </span>
    </div>
  );
};
