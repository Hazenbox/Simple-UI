"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "framer-motion"
import { cn } from "./lib/utils"

export interface LinkOverlayProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
  href: string
  external?: boolean
}

const LinkOverlay = React.forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  ({ className, asChild = false, href, external = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.a
    
    // Exclude props that conflict with framer-motion
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...restProps
    } = props;
    
    const linkProps = {
      href,
      ...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      }),
      className: cn(
        "absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md",
        className
      ),
      ...(asChild ? {} : {
        whileHover: { opacity: 1 },
        whileFocus: { opacity: 1 },
        initial: { opacity: 0.95 },
        transition: { duration: 0.2 },
      }),
      ...restProps,
    }

    if (asChild) {
      return (
        <Comp ref={ref} {...linkProps}>
          {children}
        </Comp>
      )
    }

    return (
      <Comp ref={ref} {...(linkProps as any)}>
        <span className="sr-only">Link to {href}</span>
        {children}
      </Comp>
    )
  }
)
LinkOverlay.displayName = "LinkOverlay"

export { LinkOverlay }
