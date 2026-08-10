import { type ReactNode } from 'react';
import { theme } from '../../config/theme';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = '',
  onClick,
  hover = false,
  glow = false,
}: GlassCardProps) {
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    bg-[${theme.colors.glass}]
    backdrop-blur-xl
    border border-[${theme.colors.glassBorder}]
    transition-all duration-300 ease-out
  `;

  const hoverStyles = hover
    ? `hover:border-[rgba(255,255,255,0.15)] hover:shadow-[${theme.shadows.glassHover}] hover:-translate-y-1`
    : '';

  const glowStyles = glow
    ? `before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[rgba(99,102,241,0.1)] before:to-[rgba(245,158,11,0.1)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`
    : '';

  return (
    <div
      className={`
        ${baseStyles}
        ${hoverStyles}
        ${glowStyles}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
