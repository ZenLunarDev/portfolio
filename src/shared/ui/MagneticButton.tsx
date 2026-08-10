import { type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { theme } from '../../config/theme';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseButton =
    'relative inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold transition-all duration-200 overflow-hidden';

  const variantClasses: Record<string, string> = {
    primary: `
      ${baseButton}
      text-white
      border border-transparent
      shadow-lg
      hover:shadow-xl
      active:scale-[0.97]
    `,
    secondary: `
      ${baseButton}
      bg-transparent
      border-2
      hover:bg-white/5
      active:scale-[0.97]
    `,
    ghost: `
      ${baseButton}
      bg-transparent
      border border-transparent
      hover:bg-white/5
      active:scale-[0.97]
    `,
  };

  const getVariantStyle = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
          color: '#fff',
          boxShadow: `0 0 24px ${theme.colors.primary}40`,
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          borderColor: theme.colors.primary,
          color: theme.colors.primary,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: theme.colors.textSecondary,
        };
      default:
        return {};
    }
  };

  const getHoverStyle = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: theme.colors.primaryHover };
      case 'secondary':
        return { backgroundColor: `${theme.colors.primary}15` };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      <button
        onClick={onClick}
        className={variantClasses[variant]}
        style={getVariantStyle()}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, getHoverStyle());
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, getVariantStyle());
        }}
      >
        {children}
      </button>
    </motion.div>
  );
}
