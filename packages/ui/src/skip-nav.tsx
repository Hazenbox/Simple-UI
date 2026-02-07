"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const skipNavVariants = cva(
  "fixed left-0 top-0 z-50 -translate-x-full focus:translate-x-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground px-4 py-2 rounded-br-md",
        outline: "bg-background border border-input px-4 py-2 rounded-br-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SkipNavProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof skipNavVariants> {
  href?: string
  targetId?: string
}

const SkipNav = React.forwardRef<HTMLAnchorElement, SkipNavProps>(
  ({ className, variant, href = "#main-content", targetId, children, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (targetId) {
        e.preventDefault()
        const target = document.getElementById(targetId)
        if (target) {
          target.focus()
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
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
      <motion.a
        ref={ref}
        href={href}
        className={cn(skipNavVariants({ variant, className }))}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        aria-label="Skip to main content"
        {...(motionProps as any)}
      >
        <AnimatePresence>
          {isFocused && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children || "Skip to main content"}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    )
  }
)
SkipNav.displayName = "SkipNav"

export { SkipNav, skipNavVariants }
