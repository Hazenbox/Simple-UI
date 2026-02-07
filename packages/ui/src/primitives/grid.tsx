"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const gridVariants = cva("grid", {
    variants: {
        columns: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            12: "grid-cols-12",
            none: "grid-cols-none",
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
        },
    },
    defaultVariants: {
        columns: 1,
        gap: "md",
        align: "stretch",
    },
})

export interface GridProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
    asChild?: boolean
    sm?: VariantProps<typeof gridVariants>["columns"]
    md?: VariantProps<typeof gridVariants>["columns"]
    lg?: VariantProps<typeof gridVariants>["columns"]
    xl?: VariantProps<typeof gridVariants>["columns"]
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ className, asChild = false, columns, gap, align, sm, md, lg, xl, ...props }, ref) => {
        const Comp = asChild ? Slot : "div"

        // Manual mapping for responsive because CVA doesn't handle objects/screens easily in this setup
        const responsiveClasses = cn(
            sm && `sm:grid-cols-${sm}`,
            md && `md:grid-cols-${md}`,
            lg && `lg:grid-cols-${lg}`,
            xl && `xl:grid-cols-${xl}`
        )

        return (
            <Comp
                className={cn(gridVariants({ columns, gap, align, className }), responsiveClasses)}
                ref={ref}
                {...props}
            />
        )
    }
)
Grid.displayName = "Grid"

export { Grid, gridVariants }
