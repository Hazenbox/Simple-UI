"use client"

import * as React from "react"
import { Loader2, Check } from "lucide-react"
import { cn } from "./lib/utils"
import { Input, type InputProps } from "./input"

/* ─── InputWithIcon ─── */

export interface InputWithIconProps extends InputProps {
    icon: React.ReactNode
    iconPosition?: "left" | "right"
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
    ({ icon, iconPosition = "left", className, ...props }, ref) => (
        <div className="relative">
            <span
                className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none flex items-center justify-center",
                    iconPosition === "left" ? "left-2.5" : "right-2.5"
                )}
            >
                {icon}
            </span>
            <Input
                ref={ref}
                className={cn(
                    iconPosition === "left" ? "pl-8" : "pr-8",
                    className
                )}
                {...props}
            />
        </div>
    )
)
InputWithIcon.displayName = "InputWithIcon"

/* ─── InputWithSlot ─── */

export interface InputWithSlotProps extends InputProps {
    /** Content rendered at the right edge of the input field (e.g., Switch, IconButton) */
    slot: React.ReactNode
}

const InputWithSlot = React.forwardRef<HTMLInputElement, InputWithSlotProps>(
    ({ slot, className, ...props }, ref) => (
        <div className="relative flex items-center">
            <Input
                ref={ref}
                className={cn("pr-10", className)}
                {...props}
            />
            <div className="absolute right-2 flex items-center">
                {slot}
            </div>
        </div>
    )
)
InputWithSlot.displayName = "InputWithSlot"

/* ─── FloatingLabelInput ─── */

export interface FloatingLabelInputProps extends InputProps {
    label: string
    error?: boolean
}

const FloatingLabelInput = React.forwardRef<
    HTMLInputElement,
    FloatingLabelInputProps
>(({ label, error, className, id, ...props }, ref) => {
    const autoId = React.useId()
    const fieldId = id || autoId

    return (
        <div className="relative">
            <Input
                ref={ref}
                id={fieldId}
                placeholder=" "
                className={cn(
                    "peer pt-4 pb-1",
                    error && "border-destructive focus-visible:ring-destructive",
                    className
                )}
                aria-invalid={error || undefined}
                {...props}
            />
            <label
                htmlFor={fieldId}
                className={cn(
                    "absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none transition-all duration-150",
                    "peer-focus-visible:top-2 peer-focus-visible:translate-y-0 peer-focus-visible:text-[10px] peer-focus-visible:font-medium peer-focus-visible:text-foreground",
                    "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-foreground",
                    error && "peer-focus-visible:text-destructive peer-[:not(:placeholder-shown)]:text-destructive"
                )}
            >
                {label}
            </label>
        </div>
    )
})
FloatingLabelInput.displayName = "FloatingLabelInput"

/* ─── InputWithValidation ─── */

export interface InputWithValidationProps extends InputProps {
    loading?: boolean
    valid?: boolean
    error?: boolean
}

const InputWithValidation = React.forwardRef<
    HTMLInputElement,
    InputWithValidationProps
>(({ loading, valid, error, className, ...props }, ref) => (
    <div className="relative flex items-center">
        <Input
            ref={ref}
            className={cn(
                (loading || valid) && "pr-8",
                error && "border-destructive focus-visible:ring-destructive",
                className
            )}
            aria-invalid={error || undefined}
            aria-busy={loading || undefined}
            {...props}
        />
        {loading && (
            <Loader2 className="absolute right-2.5 h-3.5 w-3.5 animate-spin text-muted-foreground" />
        )}
        {valid && !loading && (
            <Check className="absolute right-2.5 h-3.5 w-3.5 text-success" />
        )}
    </div>
))
InputWithValidation.displayName = "InputWithValidation"

export { InputWithIcon, InputWithSlot, FloatingLabelInput, InputWithValidation }
