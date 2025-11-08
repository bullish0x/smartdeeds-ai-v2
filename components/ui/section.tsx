import * as React from "react";
import { motion } from "framer-motion";
import { cn, getContainerClasses, getSectionClasses } from "@/lib/ui";
import { scrollFadeIn, scrollViewport } from "@/lib/motion";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Container size variant */
  container?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'content' | 'full';
  /** Section index for alternating backgrounds */
  index?: number;
  /** Enable scroll-triggered animation */
  animated?: boolean;
  /** Custom scroll animation variants */
  variants?: typeof scrollFadeIn;
  /** Use as motion.section instead of regular section */
  motionEnabled?: boolean;
  /** Background variant override */
  bgVariant?: 'primary' | 'secondary' | 'transparent';
  /** Element ID for anchor links */
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      container = 'xl',
      index,
      animated = false,
      variants = scrollFadeIn,
      motionEnabled = true,
      bgVariant,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = 'section'; // Simplified to avoid TypeScript conflicts with motion
    
    // Get background class based on variant or index
    const bgClass = bgVariant === 'transparent' 
      ? '' 
      : bgVariant === 'secondary' 
        ? 'bg-zinc-950' 
        : bgVariant === 'primary'
          ? 'bg-black'
          : index !== undefined && index % 2 !== 0
            ? 'bg-zinc-950'
            : 'bg-black';

    return (
      <Comp
        ref={ref}
        id={id}
        className={cn(
          getSectionClasses(undefined, bgClass),
          className
        )}
        {...props}
      >
        <div className={getContainerClasses(container)}>
          {children}
        </div>
      </Comp>
    );
  }
);

Section.displayName = "Section";

export { Section };

