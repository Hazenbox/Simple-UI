"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "./lib/utils"

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-2", className)}
            {...props}
            ref={ref}
        />
    )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
        error?: boolean
    }
>(({ className, error, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "aspect-square h-4 w-4 rounded-full border-2 border-muted-foreground/40 text-primary ring-offset-background transition-colors hover:border-primary/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
                error && "border-destructive data-[state=checked]:border-destructive data-[state=checked]:text-destructive",
                className
            )}
            aria-invalid={error || undefined}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-current" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

/* ─── RadioGroupCard ─── */

export interface RadioGroupCardProps {
    value: string
    title: string
    description?: string
    id?: string
    disabled?: boolean
    className?: string
}

const RadioGroupCard = React.forwardRef<HTMLLabelElement, RadioGroupCardProps>(
    ({ value, title, description, id, disabled, className, ...props }, ref) => {
        const autoId = React.useId()
        const fieldId = id || autoId

        return (
            <label
                ref={ref}
                htmlFor={fieldId}
                className={cn(
                    "flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-colors hover:bg-accent/50 has-[[data-state=checked]]:border-primary",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                <RadioGroupItem value={value} id={fieldId} disabled={disabled} />
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
RadioGroupCard.displayName = "RadioGroupCard"

export { RadioGroup, RadioGroupItem, RadioGroupCard }
