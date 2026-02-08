"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./lib/utils"

const textareaVariants = cva(
    "flex min-h-16 w-full rounded-lg border border-input bg-background px-2.5 py-1.5 pb-4 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground hover:border-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive",
    {
        variants: {
            size: {
                default: "",
                sm: "px-2 py-1 text-xs",
                lg: "px-3 py-2",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
    /** @deprecated Use `size` instead */
    density?: "default" | "compact"
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, size, density, ...props }, ref) => {
        const resolvedSize = density === "compact" ? "sm" : (size ?? "default")
        return (
            <textarea
                className={cn(textareaVariants({ size: resolvedSize, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
