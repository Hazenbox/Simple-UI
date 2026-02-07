"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const stackVariants = cva("flex", {
    variants: {
        direction: {
            row: "flex-row",
            column: "flex-col",
            rowReverse: "flex-row-reverse",
            columnReverse: "flex-col-reverse",
        },
        gap: {
            none: "gap-0",
            xs: "gap-space-xs",
            sm: "gap-space-sm",
            md: "gap-space-md",
            lg: "gap-space-lg",
            xl: "gap-space-xl",
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
        },
        wrap: {
            true: "flex-wrap",
            false: "flex-nowrap",
        },
    },
    defaultVariants: {
        direction: "column",
        gap: "sm",
        align: "stretch",
        justify: "start",
        wrap: false,
    },
})

export interface StackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
    asChild?: boolean
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, asChild = false, direction, gap, align, justify, wrap, ...props }, ref) => {
        const Comp = asChild ? Slot : "div"
        return (
            <Comp
                className={cn(stackVariants({ direction, gap, align, justify, wrap, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Stack.displayName = "Stack"

export { Stack, stackVariants }
