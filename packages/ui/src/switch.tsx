"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./lib/utils"

const switchVariants = cva(
    "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input",
    {
        variants: {
            size: {
                xs: "h-3.5 w-6",
                sm: "h-4 w-7",
                default: "h-5 w-9",
                lg: "h-6 w-11",
            },
            colorScheme: {
                default: "data-[state=checked]:bg-primary",
                success: "data-[state=checked]:bg-success",
                warning: "data-[state=checked]:bg-warning",
                destructive: "data-[state=checked]:bg-destructive",
                info: "data-[state=checked]:bg-info",
            },
        },
        defaultVariants: {
            size: "default",
            colorScheme: "default",
        },
    }
)

const switchThumbVariants = cva(
    "pointer-events-none flex items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
    {
        variants: {
            size: {
                xs: "h-2 w-2 data-[state=checked]:translate-x-2.5",
                sm: "h-2.5 w-2.5 data-[state=checked]:translate-x-3",
                default: "h-3.5 w-3.5 data-[state=checked]:translate-x-4",
                lg: "h-4.5 w-4.5 data-[state=checked]:translate-x-5",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
    loading?: boolean
    error?: boolean
}

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    SwitchProps
>(({ className, size, colorScheme, loading, error, disabled, ...props }, ref) => (
    <SwitchPrimitive.Root
        className={cn(
            switchVariants({ size, colorScheme, className }),
            error && "border-destructive data-[state=unchecked]:border-destructive",
            loading && "opacity-70 pointer-events-none"
        )}
        disabled={disabled || loading}
        aria-invalid={error || undefined}
        aria-busy={loading || undefined}
        {...props}
        ref={ref}
    >
        <SwitchPrimitive.Thumb
            className={cn(switchThumbVariants({ size }))}
        >
            {loading && (
                <Loader2 className={cn(
                    "animate-spin text-muted-foreground",
                    size === "xs" || size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2"
                )} />
            )}
        </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch, switchVariants }
