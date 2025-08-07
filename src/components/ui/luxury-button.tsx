import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const luxuryButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-gradient-gold text-luxury-navy-dark shadow-gold hover:shadow-hover hover:scale-105 border border-luxury-gold-light",
        outline: "glass border-2 border-luxury-gold text-luxury-cream hover:bg-luxury-gold hover:text-luxury-navy-dark",
        ghost: "text-luxury-cream hover:bg-white/10 hover:text-luxury-gold",
        premium: "bg-luxury-navy border border-luxury-gold text-luxury-cream hover:bg-luxury-navy-light hover:shadow-glass",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
)

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxuryButtonVariants> {
  asChild?: boolean
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(luxuryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LuxuryButton.displayName = "LuxuryButton"

export { LuxuryButton, luxuryButtonVariants }