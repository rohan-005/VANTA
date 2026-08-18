import React from 'react';

export interface SpecPillProps {
  label: string;
  value: string;
  highlight?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SpecPill: React.FC<SpecPillProps> = ({
  label,
  value,
  highlight = false,
  theme = 'light',
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`flex items-center justify-between p-2.5 rounded-sm text-xs border ${
        isLight
          ? highlight
            ? 'border-vanta-dark bg-vanta-stone font-semibold text-vanta-dark'
            : 'border-vanta-sand bg-vanta-cream text-vanta-dark'
          : highlight
            ? 'border-vanta-lime/50 bg-vanta-lime-dim text-vanta-lime font-semibold'
            : 'border-vanta-border bg-vanta-dark text-vanta-ivory'
      } ${className}`}
    >
      <span className="font-mono text-[11px] uppercase tracking-wider opacity-80">
        {label}
      </span>
      <span className="font-mono font-medium">
        {value}
      </span>
    </div>
  );
};
