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
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary: `
      bg-[${theme.colors.primary}] text-white
      hover:bg-[${theme.colors.primaryHover}]
      shadow-[${theme.shadows.glow}]
    `,
    secondary: `
      bg-transparent border-2 border-[${theme.colors.primary}] text-[${theme.colors.primary}]
      hover:bg-[${theme.colors.primary}] hover:text-white
    `,
    ghost: `
      bg-transparent text-[${theme.colors.textSecondary}]
      hover:text-[${theme.colors.text}]
    `,
  };

  return (
    <motion.div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={onClick}
        className={`
          px-8 py-3 rounded-xl font-medium
          transition-colors duration-200
          ${variantStyles[variant]}
        `.trim().replace(/\s+/g, ' ')}
      >
        {children}
      </button>
    </motion.div>
  );
}
