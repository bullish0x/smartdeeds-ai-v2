/**
 * Centralized Design System Configuration
 * 
 * This file contains semantic design tokens and theme utilities
 * for consistent UI implementation across the SmartDeeds application.
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors = {
  // Brand Colors
  brand: {
    yellow: '#EEFE93',
    yellowLight: '#F5FFC8',
    yellowDark: '#D4E97A',
    black: '#09090b',
    blackLight: '#18181b',
    white: '#FFFFFF',
  },
  
  // Semantic Colors (Dark Mode Default)
  surface: {
    primary: '#09090b',      // Main background
    secondary: '#18181b',    // Elevated surfaces
    tertiary: '#27272a',     // Further elevated
    hover: '#3f3f46',        // Hover states
  },
  
  text: {
    primary: '#fafafa',      // Primary text
    secondary: '#d4d4d8',    // Secondary text
    tertiary: '#a1a1aa',     // Muted text
    inverse: '#09090b',      // Text on light backgrounds
  },
  
  accent: {
    primary: '#EEFE93',      // Primary brand accent
    hover: '#F5FFC8',        // Accent hover
    active: '#D4E97A',       // Accent active/pressed
  },
  
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(238, 254, 147, 0.3)',
    focus: 'rgba(238, 254, 147, 0.5)',
  },
} as const;

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    sans: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'var(--font-geist-mono), ui-monospace, "SF Mono", Consolas, monospace',
  },
  
  // Font Sizes (with line-height and letter-spacing)
  fontSize: {
    xs: { size: '0.75rem', lineHeight: '1rem', letterSpacing: '0.02em' },
    sm: { size: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.01em' },
    base: { size: '1rem', lineHeight: '1.5rem', letterSpacing: '0' },
    lg: { size: '1.125rem', lineHeight: '1.75rem', letterSpacing: '0' },
    xl: { size: '1.25rem', lineHeight: '1.75rem', letterSpacing: '0' },
    '2xl': { size: '1.5rem', lineHeight: '2rem', letterSpacing: '-0.01em' },
    '3xl': { size: '1.875rem', lineHeight: '2.25rem', letterSpacing: '-0.01em' },
    '4xl': { size: '2.25rem', lineHeight: '2.5rem', letterSpacing: '-0.02em' },
    '5xl': { size: '3rem', lineHeight: '3.5rem', letterSpacing: '-0.02em' },
    '6xl': { size: '3.75rem', lineHeight: '4rem', letterSpacing: '-0.02em' },
    '7xl': { size: '4.5rem', lineHeight: '4.75rem', letterSpacing: '-0.02em' },
  },
  
  // Font Weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// ============================================================================
// SPACING SCALE
// ============================================================================

export const spacing = {
  section: {
    sm: '4rem',    // 64px
    md: '5rem',    // 80px
    lg: '6rem',    // 96px
    xl: '8rem',    // 128px
  },
  component: {
    xs: '0.5rem',  // 8px
    sm: '0.75rem', // 12px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
  },
  container: {
    padding: {
      mobile: '1rem',    // 16px
      tablet: '1.5rem',  // 24px
      desktop: '2rem',   // 32px
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      content: '1120px',  // 70rem - optimal for reading
    },
  },
} as const;

// ============================================================================
// SHADOW SYSTEM
// ============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  glow: '0 0 20px rgba(238, 254, 147, 0.3)',
  glowLg: '0 0 40px rgba(238, 254, 147, 0.4)',
  glowXl: '0 0 60px rgba(238, 254, 147, 0.5)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.5rem',   // 8px
  md: '0.75rem',  // 12px
  lg: '1rem',     // 16px
  xl: '1.5rem',   // 24px
  '2xl': '2rem',  // 32px
  full: '9999px',
} as const;

// ============================================================================
// Z-INDEX LAYERS
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  toast: 60,
  tooltip: 70,
} as const;

// ============================================================================
// TRANSITION TIMING
// ============================================================================

export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '400ms',
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get tier-specific color scheme
 */
export const getTierColor = (tier: 'gold' | 'platinum' | 'diamond' | 'founder') => {
  const tierColors = {
    gold: {
      primary: '#FFD700',
      gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
      glow: '0 0 30px rgba(255, 215, 0, 0.4)',
    },
    platinum: {
      primary: '#E5E4E2',
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
      glow: '0 0 30px rgba(229, 228, 226, 0.4)',
    },
    diamond: {
      primary: '#B9F2FF',
      gradient: 'from-cyan-300 via-blue-400 to-blue-500',
      glow: '0 0 30px rgba(185, 242, 255, 0.4)',
    },
    founder: {
      primary: '#EEFE93',
      gradient: 'from-yellow-200 via-lime-300 to-green-400',
      glow: '0 0 30px rgba(238, 254, 147, 0.5)',
    },
  };
  
  return tierColors[tier];
};

/**
 * Get section background variant (alternating pattern)
 */
export const getSectionVariant = (index: number): 'primary' | 'secondary' => {
  return index % 2 === 0 ? 'primary' : 'secondary';
};

/**
 * Get container size class
 */
export const getContainerClass = (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'xl') => {
  const sizeMap = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1536px]',
    full: 'max-w-full',
  };
  
  return `${sizeMap[size]} mx-auto px-4 sm:px-6 lg:px-8`;
};

/**
 * Focus ring styles with brand color
 */
export const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish focus-visible:ring-offset-2 focus-visible:ring-offset-black';

/**
 * Glass morphism utility
 */
export const glassMorphism = 'backdrop-blur-md bg-white/10 border border-white/20';

/**
 * Hover lift effect
 */
export const hoverLift = 'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg';

/**
 * Glow effect on hover
 */
export const hoverGlow = 'transition-all duration-300 hover:shadow-glow';

// ============================================================================
// EXPORT ALL
// ============================================================================

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  zIndex,
  transitions,
  breakpoints,
  getTierColor,
  getSectionVariant,
  getContainerClass,
  focusRing,
  glassMorphism,
  hoverLift,
  hoverGlow,
} as const;

export default theme;

