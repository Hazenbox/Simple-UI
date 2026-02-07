"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const boxVariants = cva("block", {
    variants: {
        padding: {
            none: "p-0",
            xs: "p-space-xs",
            sm: "p-space-sm",
            md: "p-space-md",
            lg: "p-space-lg",
            xl: "p-space-xl",
        },
        background: {
            transparent: "bg-transparent",
            surface: "bg-background",
            secondary: "bg-secondary",
            muted: "bg-muted",
        },
        border: {
            none: "border-0",
            default: "border border-border",
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full",
        },
    },
    defaultVariants: {
        padding: "none",
        background: "transparent",
        border: "none",
        radius: "none",
    },
})

export interface BoxProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
    asChild?: boolean
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
    ({ className, asChild = false, padding, background, border, radius, ...props }, ref) => {
        const Comp = asChild ? Slot : "div"
        return (
            <Comp
                className={cn(boxVariants({ padding, background, border, radius, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Box.displayName = "Box"

export { Box, boxVariants }
