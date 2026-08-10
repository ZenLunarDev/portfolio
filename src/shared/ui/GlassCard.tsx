import { type ReactNode } from 'react';
import { theme } from '../../config/theme';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  glow?: boolean;
  border?: boolean;
}

export function GlassCard({
  children,
  className = '',
  onClick,
  hover = false,
  glow = false,
  border = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        transition-all duration-300 ease-out
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={{
        backgroundColor: theme.colors.glass,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: border ? `1px solid ${theme.colors.glassBorder}` : 'none',
        boxShadow: hover
          ? `0 20px 40px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)`
          : `0 8px 24px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.03)`,
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onClick={onClick}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}10, ${theme.colors.accent}10)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
