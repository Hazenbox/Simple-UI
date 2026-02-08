"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./lib/utils"
import { Label } from "./label"

const checkboxVariants = cva(
    "peer shrink-0 rounded-sm border border-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 hover:border-primary/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[error=true]:border-destructive data-[error=true]:data-[state=checked]:bg-destructive",
    {
        variants: {
            size: {
                sm: "h-3.5 w-3.5",
                md: "h-4 w-4",
                lg: "h-5 w-5",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

const checkboxIconVariants = cva("", {
    variants: {
        size: {
            sm: "h-2.5 w-2.5",
            md: "h-3 w-3",
            lg: "h-3.5 w-3.5",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
    error?: boolean
    loading?: boolean
}

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, size, error, loading, disabled, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkboxVariants({ size }), className)}
        data-error={error ? "true" : undefined}
        disabled={disabled || loading}
        aria-invalid={error || undefined}
        aria-busy={loading || undefined}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
            forceMount={loading ? true : undefined}
        >
            {loading ? (
                <Loader2 className={cn(checkboxIconVariants({ size }), "animate-spin")} />
            ) : (
                <Check className={checkboxIconVariants({ size })} strokeWidth={3} />
            )}
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

/* ─── Card variant ─── */

export interface CheckboxCardProps {
    value?: string
    title: string
    description?: string
    id?: string
    defaultChecked?: boolean
    checked?: boolean | "indeterminate"
    onCheckedChange?: (checked: boolean | "indeterminate") => void
    disabled?: boolean
    size?: "sm" | "md" | "lg"
    className?: string
}

const CheckboxCard = React.forwardRef<HTMLLabelElement, CheckboxCardProps>(
    ({ title, description, id, size, className, ...checkboxProps }, ref) => {
        const autoId = React.useId()
        const fieldId = id || autoId

        return (
            <label
                ref={ref}
                htmlFor={fieldId}
                className={cn(
                    "flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-colors hover:bg-accent/50 has-[[data-state=checked]]:border-primary",
                    checkboxProps.disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                <Checkbox id={fieldId} size={size} {...checkboxProps} />
                <div className="grid gap-0.5">
                    <span className="text-sm font-medium leading-none">{title}</span>
                    {description && (
                        <span className="text-xs text-muted-foreground">{description}</span>
                    )}
                </div>
            </label>
        )
    }
)
CheckboxCard.displayName = "CheckboxCard"

export { Checkbox, CheckboxCard, checkboxVariants }
