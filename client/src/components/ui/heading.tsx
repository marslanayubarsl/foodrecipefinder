import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const headingVariants = cva("font-heading font-bold leading-tight tracking-tight", {
  variants: {
    size: {
      xs: "text-lg",
      sm: "text-xl",
      md: "text-2xl md:text-3xl",
      lg: "text-3xl md:text-4xl lg:text-5xl",
      xl: "text-4xl md:text-5xl lg:text-6xl",
    },
    emphasis: {
      default: "",
      accent: "font-accent",
    },
    color: {
      default: "",
      primary: "text-primary",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    emphasis: "default",
    color: "default",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, emphasis, color, as = "h2", children, ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        className={cn(headingVariants({ size, emphasis, color, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
