"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const skeletonVariants = cva("", {
    variants: {
        variant: {
            line: "h-3 rounded-lg",
            heading: "h-4 rounded-lg",
            circle: "rounded-full",
            rect: "rounded-xl",
        },
        animation: {
            pulse: "animate-pulse bg-muted",
            shimmer:
                "animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-muted via-muted-foreground/5 to-muted",
        },
    },
    defaultVariants: {
        variant: "line",
        animation: "pulse",
    },
})

export interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> { }

function Skeleton({
    className,
    variant,
    animation,
    ...props
}: SkeletonProps) {
    return (
        <div
            className={cn(skeletonVariants({ variant, animation, className }))}
            {...props}
        />
    )
}

export { Skeleton }
