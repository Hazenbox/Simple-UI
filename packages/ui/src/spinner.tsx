"use client"

import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

/* ─── Spinner icon variants ─── */

const spinnerIconVariants = cva("animate-spin", {
    variants: {
        size: {
            xs: "h-3 w-3",
            sm: "h-4 w-4",
            md: "h-5 w-5",
            lg: "h-7 w-7",
            xl: "h-10 w-10",
        },
        color: {
            default: "text-muted-foreground",
            primary: "text-primary",
            success: "text-success",
            warning: "text-warning",
            info: "text-info",
            destructive: "text-destructive",
        },
    },
    defaultVariants: {
        size: "md",
        color: "default",
    },
})

/* ─── Layout variants for wrapper ─── */

const spinnerLayoutVariants = cva("inline-flex items-center", {
    variants: {
        layout: {
            stacked: "flex-col gap-space-xs",
            inline: "flex-row gap-space-sm",
        },
    },
    defaultVariants: {
        layout: "stacked",
    },
})

/* ─── Props ─── */

export interface SpinnerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof spinnerIconVariants> {
    /** Optional loading text displayed alongside the spinner. */
    label?: string;
    /** Layout direction when label is present. */
    layout?: "stacked" | "inline";
}

/* ─── Component ─── */

export function Spinner({
    className,
    size = "md",
    color = "default",
    label,
    layout = "stacked",
    ...props
}: SpinnerProps) {
    const hasLabel = label != null && label.length > 0

    return (
        <div
            className={cn(
                hasLabel
                    ? spinnerLayoutVariants({ layout })
                    : "inline-flex",
                className
            )}
            {...(hasLabel ? { role: "status" } : {})}
            {...props}
        >
            <div className={cn(spinnerIconVariants({ size, color }))}>
                <Loader2 className="h-full w-full" />
            </div>
            {hasLabel ? (
                <span className="text-xs text-muted-foreground">{label}</span>
            ) : (
                <span className="sr-only">Loading...</span>
            )}
        </div>
    )
}
