import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-lime' | 'dark';
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
    'inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-vanta-lime focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 h-9',
    md: 'text-sm px-5 py-2.5 gap-2 h-11',
    lg: 'text-base px-7 py-3.5 gap-2.5 h-13',
  };

  const variantStyles = {
    primary:
      'bg-vanta-lime text-vanta-dark hover:bg-vanta-lime-hover shadow-glow-lime-sm active:translate-y-0.5 rounded-sm border border-vanta-lime font-bold',
    secondary:
      'bg-vanta-dark text-vanta-ivory border border-vanta-dark hover:bg-vanta-charcoal active:translate-y-0.5 rounded-sm',
    dark:
      'bg-vanta-dark text-vanta-ivory border border-vanta-charcoal hover:border-vanta-lime hover:text-vanta-lime active:translate-y-0.5 rounded-sm',
    'outline-lime':
      'bg-transparent text-vanta-dark border border-vanta-dark/40 hover:border-vanta-lime hover:bg-vanta-lime hover:text-vanta-dark active:translate-y-0.5 rounded-sm',
    ghost:
      'bg-transparent text-vanta-text-muted-dark hover:text-vanta-dark hover:bg-vanta-stone/50 rounded-sm',
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
