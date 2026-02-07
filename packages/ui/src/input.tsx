"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./lib/utils"

const inputVariants = cva(
    "flex w-full rounded-md border border-input bg-background px-2.5 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            size: {
                default: "h-8",
                sm: "h-7 px-2 text-xs",
                lg: "h-9 px-3",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
    /** @deprecated Use `size` instead */
    density?: "default" | "compact"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, size, density, ...props }, ref) => {
        // Support deprecated density prop
        const resolvedSize = density === "compact" ? "sm" : (size ?? "default")
        return (
            <input
                type={type}
                className={cn(inputVariants({ size: resolvedSize, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input, inputVariants }
