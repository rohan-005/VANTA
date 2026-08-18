import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-lime';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-vanta-lime focus-visible:ring-offset-2 focus-visible:ring-offset-vanta-black disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 h-8',
    md: 'text-sm px-5 py-2.5 gap-2 h-11',
    lg: 'text-base px-7 py-3.5 gap-2.5 h-13',
  };

  const variantStyles = {
    primary:
      'bg-vanta-lime text-vanta-black hover:bg-vanta-lime-hover shadow-glow-lime-sm active:translate-y-0.5 rounded-sm border border-vanta-lime',
    secondary:
      'bg-vanta-elevated text-vanta-text-primary border border-vanta-border hover:border-vanta-border-bright hover:bg-vanta-surface active:translate-y-0.5 rounded-sm',
    'outline-lime':
      'bg-transparent text-vanta-lime border border-vanta-lime/60 hover:border-vanta-lime hover:bg-vanta-lime-dim active:translate-y-0.5 rounded-sm',
    ghost:
      'bg-transparent text-vanta-text-muted hover:text-vanta-text-primary hover:bg-vanta-elevated/50 rounded-sm',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
