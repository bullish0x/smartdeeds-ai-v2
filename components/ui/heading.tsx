import * as React from "react";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cn, getHeadingClasses } from "@/lib/ui";
import { fadeInUp } from "@/lib/motion";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (h1-h6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Enable yellowish accent for matching text */
  accent?: string;
  /** Enable scroll-triggered animation */
  animated?: boolean;
  /** Use Slot for composition */
  asChild?: boolean;
  /** Center align text */
  centered?: boolean;
  /** Enable motion animations */
  motionEnabled?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level = 2,
      accent,
      animated = false,
      asChild = false,
      centered = false,
      motionEnabled = false, // Disable motion by default to avoid complexity
      children,
      ...props
    },
    ref
  ) => {
    const Tag = asChild ? Slot : (`h${level}` as React.ElementType);
    const Comp = Tag;


    // Process children to add accent if specified
    const processedChildren = accent && typeof children === 'string'
      ? children.split(accent).map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <span className="text-yellowish">{accent}</span>}
          </React.Fragment>
        ))
      : children;

    return (
      <Comp
        ref={ref}
        className={cn(
          getHeadingClasses(level),
          centered && "text-center",
          "text-white",
          className
        )}
        {...props}
      >
        {processedChildren}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

export { Heading };

