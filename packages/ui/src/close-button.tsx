"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const closeButtonVariants = cva(
  "rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "h-5 w-5",
        default: "h-7 w-7",
        lg: "h-8 w-8",
      },
      variant: {
        default: "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input bg-background hover:bg-accent",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface CloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof closeButtonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
}

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, size, variant, asChild = false, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const iconSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"
    const Icon = icon || <X className={iconSize} />

    if (asChild) {
      return (
        <Comp
          className={cn(closeButtonVariants({ size, variant, className }))}
          ref={ref}
          aria-label="Close"
          {...props}
        >
          {Icon}
          <span className="sr-only">Close</span>
        </Comp>
      )
    }

    // Exclude props that conflict with framer-motion
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...motionProps
    } = props;
    
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        className={cn(closeButtonVariants({ size, variant, className }))}
        ref={ref}
        aria-label="Close"
        {...(motionProps as any)}
      >
        {Icon}
        <span className="sr-only">Close</span>
      </motion.button>
    )
  }
)
CloseButton.displayName = "CloseButton"

export { CloseButton, closeButtonVariants }
