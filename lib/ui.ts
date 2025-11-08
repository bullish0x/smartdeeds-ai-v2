/**
 * UI Utility Functions
 * 
 * Helper functions for consistent UI patterns across components
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============================================================================
// SECTION UTILITIES
// ============================================================================

/**
 * Get alternating section background variant
 */
export function getSectionBg(index: number): string {
  return index % 2 === 0 ? 'bg-black' : 'bg-zinc-950';
}

/**
 * Get section classes with consistent spacing
 */
export function getSectionClasses(index?: number, className?: string): string {
  const base = 'py-16 md:py-20 lg:py-24';
  const bg = index !== undefined ? getSectionBg(index) : '';
  return cn(base, bg, className);
}

// ============================================================================
// CONTAINER UTILITIES
// ============================================================================

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'content' | 'full';

/**
 * Get responsive container classes
 */
export function getContainerClasses(
  size: ContainerSize = 'xl',
  className?: string
): string {
  const sizeMap: Record<ContainerSize, string> = {
    sm: 'max-w-3xl',      // 768px
    md: 'max-w-4xl',      // 896px
    lg: 'max-w-5xl',      // 1024px
    xl: 'max-w-7xl',      // 1280px
    '2xl': 'max-w-[1536px]',
    content: 'max-w-[70rem]', // Optimal reading width
    full: 'max-w-full',
  };

  return cn(
    sizeMap[size],
    'mx-auto px-4 sm:px-6 lg:px-8',
    className
  );
}

// ============================================================================
// TIER UTILITIES
// ============================================================================

export type TierType = 'gold' | 'platinum' | 'diamond' | 'founder';

interface TierColors {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  glow: string;
  border: string;
}

/**
 * Get tier-specific color scheme
 */
export function getTierColors(tier: TierType): TierColors {
  const tierMap: Record<TierType, TierColors> = {
    gold: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFE55C',
      gradient: 'from-yellow-400 via-yellow-500 to-amber-600',
      glow: '0 0 30px rgba(255, 215, 0, 0.4)',
      border: 'border-yellow-500/30',
    },
    platinum: {
      primary: '#E5E4E2',
      secondary: '#C0C0C0',
      accent: '#F0F0F0',
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
      glow: '0 0 30px rgba(229, 228, 226, 0.4)',
      border: 'border-gray-400/30',
    },
    diamond: {
      primary: '#B9F2FF',
      secondary: '#4FC3F7',
      accent: '#E3F2FD',
      gradient: 'from-cyan-300 via-blue-400 to-blue-500',
      glow: '0 0 30px rgba(185, 242, 255, 0.4)',
      border: 'border-cyan-400/30',
    },
    founder: {
      primary: '#EEFE93',
      secondary: '#D4E97A',
      accent: '#F5FFC8',
      gradient: 'from-yellow-200 via-lime-300 to-green-400',
      glow: '0 0 30px rgba(238, 254, 147, 0.5)',
      border: 'border-yellowish/30',
    },
  };

  return tierMap[tier];
}

/**
 * Get tier badge classes
 */
export function getTierBadgeClasses(tier: TierType): string {
  const colors = getTierColors(tier);
  return cn(
    'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold',
    colors.border,
    'border',
    'backdrop-blur-sm'
  );
}

/**
 * Get tier icon/emoji
 */
export function getTierIcon(tier: TierType): string {
  const iconMap: Record<TierType, string> = {
    gold: '🥇',
    platinum: '🥈',
    diamond: '💎',
    founder: '👑',
  };
  return iconMap[tier];
}

/**
 * Get tier display name
 */
export function getTierName(tier: TierType): string {
  const nameMap: Record<TierType, string> = {
    gold: 'Gold — Insider',
    platinum: 'Platinum — Social',
    diamond: 'Diamond — Estate',
    founder: 'Founders Circle — Legacy',
  };
  return nameMap[tier];
}

// ============================================================================
// MOTION UTILITIES
// ============================================================================

/**
 * Focus ring classes with brand color
 */
export const focusRing = 
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish focus-visible:ring-offset-2 focus-visible:ring-offset-black';

/**
 * Glass morphism utility
 */
export const glassMorphism = 
  'backdrop-blur-md bg-white/5 border border-white/10';

/**
 * Hover lift effect
 */
export const hoverLift = 
  'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg';

/**
 * Glow effect on hover
 */
export const hoverGlow = 
  'transition-shadow duration-300 hover:shadow-glow';

/**
 * Smooth transition
 */
export const smoothTransition = 
  'transition-all duration-200 ease-smooth';

// ============================================================================
// TYPOGRAPHY UTILITIES
// ============================================================================

/**
 * Heading classes with proper hierarchy
 */
export function getHeadingClasses(
  level: 1 | 2 | 3 | 4 | 5 | 6,
  className?: string
): string {
  const levelMap = {
    1: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
    2: 'text-4xl md:text-5xl font-bold tracking-tight',
    3: 'text-3xl md:text-4xl font-bold tracking-tight',
    4: 'text-2xl md:text-3xl font-semibold',
    5: 'text-xl md:text-2xl font-semibold',
    6: 'text-lg md:text-xl font-semibold',
  };

  return cn(levelMap[level], className);
}

/**
 * Body text classes
 */
export function getTextClasses(
  variant: 'default' | 'muted' | 'emphasis' = 'default',
  className?: string
): string {
  const variantMap = {
    default: 'text-base text-gray-100',
    muted: 'text-sm text-gray-400',
    emphasis: 'text-lg text-white',
  };

  return cn(variantMap[variant], className);
}

/**
 * Split text into parts for accent highlighting
 * Returns array of text parts that can be rendered with accent
 */
export function splitAccentText(text: string, accent: string): string[] {
  return text.split(accent);
}

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================

/**
 * Get responsive padding classes
 */
export function getResponsivePadding(
  size: 'sm' | 'md' | 'lg' = 'md'
): string {
  const sizeMap = {
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
  };
  return sizeMap[size];
}

/**
 * Get responsive gap classes
 */
export function getResponsiveGap(
  size: 'sm' | 'md' | 'lg' = 'md'
): string {
  const sizeMap = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  };
  return sizeMap[size];
}

// ============================================================================
// BUTTON UTILITIES
// ============================================================================

/**
 * Get CTA button classes
 */
export function getCtaClasses(
  variant: 'primary' | 'secondary' | 'ghost' = 'primary',
  className?: string
): string {
  const variantMap = {
    primary: 'bg-yellowish text-black hover:bg-yellowish/90 hover:shadow-glow',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  };

  return cn(
    'inline-flex items-center justify-center',
    'px-6 py-3 md:px-8 md:py-4',
    'rounded-lg font-semibold',
    'transition-all duration-200',
    focusRing,
    variantMap[variant],
    className
  );
}

// ============================================================================
// CARD UTILITIES
// ============================================================================

/**
 * Get card classes with variants
 */
export function getCardClasses(
  variant: 'default' | 'elevated' | 'flat' | 'glass' = 'default',
  className?: string
): string {
  const variantMap = {
    default: 'bg-zinc-900 border border-zinc-800 shadow-md',
    elevated: 'bg-zinc-900 border border-zinc-800 shadow-xl',
    flat: 'bg-zinc-900 border-none',
    glass: glassMorphism,
  };

  return cn(
    'rounded-lg p-6',
    'transition-all duration-200',
    variantMap[variant],
    className
  );
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export const uiUtils = {
  cn,
  getSectionBg,
  getSectionClasses,
  getContainerClasses,
  getTierColors,
  getTierBadgeClasses,
  getTierIcon,
  getTierName,
  focusRing,
  glassMorphism,
  hoverLift,
  hoverGlow,
  smoothTransition,
  getHeadingClasses,
  getTextClasses,
  splitAccentText,
  getResponsivePadding,
  getResponsiveGap,
  getCtaClasses,
  getCardClasses,
} as const;

export default uiUtils;

