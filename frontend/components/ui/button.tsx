import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 gap-2",
  {
    variants: {
      variant: {
        default:
          "primary bg-primary text-white [&_svg]:stroke-primary-foreground rounded-full hover:scale-105 active:scale-95 font-bold",
        outline:
          "border-2 border-border !bg-transparent !text-secondary-text hover:text-slate-700 rounded-full hover:scale-105 active:scale-95 font-regular",
        plain: "bg-transparent [&_svg]:stroke-secondary-text",
        muted: "bg-black/20 rounded-full text-primary-foreground font-bold",
      },
      size: {
        default: "h-11 md:h-14 px-10 py-4 text-sm lg:text-base",
        md: "px-5 py-2 h-10 md:h-11 text-xs lg:text-sm",
        icon: "h-11 w-11 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
