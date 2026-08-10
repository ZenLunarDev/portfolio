export const theme = {
  colors: {
    background: '#0b0b10',
    surface: '#12121a',
    surfaceHover: '#1a1a25',
    primary: '#6366f1',
    primaryHover: '#818cf8',
    accent: '#f59e0b',
    accentHover: '#fbbf24',
    text: '#f3f4f6',
    textSecondary: '#d1d5db',
    textMuted: '#9ca3af',
    border: '#2a2f3a',
    glass: 'rgba(18, 18, 26, 0.85)',
    glassBorder: 'rgba(255, 255, 255, 0.15)',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 800,
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
  shadows: {
    glass: '0 8px 32px rgba(0, 0, 0, 0.5)',
    glassHover: '0 12px 48px rgba(0, 0, 0, 0.7)',
    glow: '0 0 24px rgba(99, 102, 241, 0.4)',
    glowAccent: '0 0 24px rgba(245, 158, 11, 0.4)',
  },
  motion: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5,
    },
    easing: {
      easeOut: [0.16, 1, 0.3, 1],
      easeInOut: [0.65, 0, 0.35, 1],
    },
  },
} as const;

export type Theme = typeof theme;
