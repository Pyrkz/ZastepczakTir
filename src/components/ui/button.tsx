import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "group relative overflow-hidden bg-gradient-to-br from-white via-gold-50/40 to-gold-100/30 text-gold-700 border border-gold-300/60 shadow-[0_8px_30px_rgb(164,131,59,0.12)] hover:shadow-[0_20px_40px_rgb(164,131,59,0.2)] transition-all duration-700 ease-out hover:scale-[1.02] font-bold tracking-wide hover:text-gold-800 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-gold-200/20 before:opacity-90 hover:before:opacity-100 before:transition-all before:duration-700 after:absolute after:inset-[-1px] after:bg-gradient-to-r after:from-transparent after:via-gold-300/0 after:to-transparent hover:after:via-gold-300/50 after:transition-all after:duration-1000 after:ease-in-out after:animate-[shimmer_2s_ease-in-out_infinite] [&>*]:relative [&>*]:z-10",
        gradient:
          "bg-gradient-to-r from-gold-700 to-gold-500 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-[1.02] font-semibold tracking-wide border-0 hover:from-gold-700/90 hover:to-gold-500/90",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-5 rounded-lg",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3.5 py-2",
        lg: "h-12 rounded-lg px-8 has-[>svg]:px-6 py-3.5",
        icon: "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
