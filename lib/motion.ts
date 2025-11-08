/**
 * Framer Motion Animation Presets
 * 
 * Reusable animation variants for consistent motion design
 * across the SmartDeeds application.
 */

import { Variants, Transition } from 'framer-motion';

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  smooth: {
    type: 'tween' as const,
    ease: 'easeInOut',
    duration: 0.3,
  },
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  bounce: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
  },
  slow: {
    type: 'tween' as const,
    ease: 'easeOut',
    duration: 0.6,
  },
} as const;

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: { 
    opacity: 0, 
    y: -30 
  },
};

export const fadeInDown: Variants = {
  initial: { 
    opacity: 0, 
    y: -30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    y: 30 
  },
};

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

export const slideInFromRight: Variants = {
  initial: { 
    x: '100%',
    opacity: 0,
  },
  animate: { 
    x: 0,
    opacity: 1,
    transition: transitions.spring,
  },
  exit: { 
    x: '100%',
    opacity: 0,
  },
};

export const slideInFromLeft: Variants = {
  initial: { 
    x: '-100%',
    opacity: 0,
  },
  animate: { 
    x: 0,
    opacity: 1,
    transition: transitions.spring,
  },
  exit: { 
    x: '-100%',
    opacity: 0,
  },
};

export const slideInFromBottom: Variants = {
  initial: { 
    y: '100%',
    opacity: 0,
  },
  animate: { 
    y: 0,
    opacity: 1,
    transition: transitions.spring,
  },
  exit: { 
    y: '100%',
    opacity: 0,
  },
};

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleIn: Variants = {
  initial: { 
    scale: 0.8, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: transitions.spring,
  },
  exit: { 
    scale: 0.8, 
    opacity: 0 
  },
};

export const scaleUp: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: 1.05,
    transition: transitions.smooth,
  },
};

// ============================================================================
// CARD & INTERACTIVE ELEMENTS
// ============================================================================

export const cardHover: Variants = {
  initial: { 
    y: 0,
    scale: 1,
  },
  hover: { 
    y: -4,
    scale: 1.01,
    transition: transitions.smooth,
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export const cardWithGlow: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 0 0 rgba(238, 254, 147, 0)',
  },
  hover: {
    y: -4,
    boxShadow: '0 0 30px rgba(238, 254, 147, 0.4)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// BUTTON VARIANTS
// ============================================================================

export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: transitions.smooth,
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export const buttonGlow: Variants = {
  initial: {
    boxShadow: '0 0 0 rgba(238, 254, 147, 0)',
  },
  hover: {
    boxShadow: '0 0 20px rgba(238, 254, 147, 0.5)',
    transition: {
      duration: 0.2,
    },
  },
};

// ============================================================================
// MODAL / DIALOG VARIANTS
// ============================================================================

export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalContent: Variants = {
  initial: { 
    scale: 0.95,
    opacity: 0,
    y: 20,
  },
  animate: { 
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: { 
    scale: 0.95,
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// ============================================================================
// STAGGER CHILDREN
// ============================================================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
};

// ============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================================================

export const scrollFadeIn: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const scrollSlideIn: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export const scrollScale: Variants = {
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

// ============================================================================
// LOADER / SPINNER
// ============================================================================

export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// NAVIGATION MENU
// ============================================================================

export const mobileMenuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const menuItemVariants: Variants = {
  closed: { x: -20, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

// ============================================================================
// HERO ANIMATIONS
// ============================================================================

export const heroHeading: Variants = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

export const heroSubheading: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const heroCTA: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// PARALLAX EFFECT
// ============================================================================

export const parallaxVariants = (offset: number) => ({
  initial: { y: 0 },
  animate: { 
    y: offset,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
});

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if user prefers reduced motion
 */
export const useReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get transition based on reduced motion preference
 */
export const getTransition = (normal: Transition, reduced?: Transition): Transition => {
  if (useReducedMotion()) {
    return reduced || { duration: 0 };
  }
  return normal;
};

/**
 * Viewport configuration for scroll animations
 */
export const scrollViewport = {
  once: true,
  amount: 0.3, // Trigger when 30% visible
  margin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
};

// ============================================================================
// EXPORT ALL
// ============================================================================

export const motionPresets = {
  // Transitions
  transitions,
  
  // Page
  pageVariants,
  
  // Fade
  fadeIn,
  fadeInUp,
  fadeInDown,
  
  // Slide
  slideInFromRight,
  slideInFromLeft,
  slideInFromBottom,
  
  // Scale
  scaleIn,
  scaleUp,
  
  // Cards
  cardHover,
  cardWithGlow,
  
  // Buttons
  buttonVariants,
  buttonGlow,
  
  // Modals
  modalBackdrop,
  modalContent,
  
  // Stagger
  staggerContainer,
  staggerItem,
  
  // Scroll
  scrollFadeIn,
  scrollSlideIn,
  scrollScale,
  scrollViewport,
  
  // Loaders
  spinnerVariants,
  pulseVariants,
  
  // Navigation
  mobileMenuVariants,
  menuItemVariants,
  
  // Hero
  heroHeading,
  heroSubheading,
  heroCTA,
  
  // Utilities
  parallaxVariants,
  useReducedMotion,
  getTransition,
} as const;

export default motionPresets;

