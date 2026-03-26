import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'dark';
  children: React.ReactNode;
  className?: string;
  onLightBackground?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  children,
  className = '',
  onLightBackground = false
}) => {
  const colors = {
    primary: onLightBackground ? 'text-[var(--brand-primary)]' : 'text-[var(--brand-accent)]',
    secondary: 'text-[var(--brand-secondary)]',
    dark: 'text-black/80'
  };

  return (
    <span className={`inline-block glass-card px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider ${colors[variant]} mb-6 ${className}`}>
      {children}
    </span>
  );
};
