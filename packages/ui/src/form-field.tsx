"use client"

import * as React from "react"
import { cn } from "./lib/utils"
import { Label } from "./label"

export interface FieldWrapperProps {
    label?: string
    htmlFor?: string
    error?: string
    helperText?: string
    required?: boolean
    loading?: boolean
    disabled?: boolean
    children: React.ReactNode
    className?: string
}

const FieldWrapper = React.forwardRef<HTMLDivElement, FieldWrapperProps>(
    (
        {
            label,
            htmlFor,
            error,
            helperText,
            required,
            loading,
            disabled,
            children,
            className,
        },
        ref
    ) => {
        const autoId = React.useId()
        const fieldId = htmlFor || autoId
        const errorId = error ? `${fieldId}-error` : undefined
        const helperTextId = helperText && !error ? `${fieldId}-helper` : undefined
        const describedBy = [errorId, helperTextId].filter(Boolean).join(" ") || undefined

        return (
            <div
                ref={ref}
                className={cn("grid gap-1.5", className)}
                data-error={error ? "true" : undefined}
                data-loading={loading ? "true" : undefined}
                data-disabled={disabled ? "true" : undefined}
            >
                {label && (
                    <Label htmlFor={fieldId} className={cn(disabled && "opacity-50")}>
                        {label}
                        {required && (
                            <span className="ml-0.5 text-destructive" aria-hidden="true">
                                *
                            </span>
                        )}
                    </Label>
                )}

                {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) return child

                    const extraProps: Record<string, unknown> = {}

                    if (!htmlFor) {
                        extraProps.id = fieldId
                    }
                    if (describedBy) {
                        extraProps["aria-describedby"] = describedBy
                    }
                    if (error) {
                        extraProps["aria-invalid"] = true
                    }
                    if (required) {
                        extraProps["aria-required"] = true
                    }
                    if (loading) {
                        extraProps["aria-busy"] = true
                    }
                    if (disabled) {
                        extraProps.disabled = true
                    }

                    return React.cloneElement(
                        child as React.ReactElement<Record<string, unknown>>,
                        extraProps
                    )
                })}

                {error && (
                    <p id={errorId} className="text-xs text-destructive" role="alert">
                        {error}
                    </p>
                )}

                {helperText && !error && (
                    <p id={helperTextId} className="text-xs text-muted-foreground">
                        {helperText}
                    </p>
                )}
            </div>
        )
    }
)

FieldWrapper.displayName = "FieldWrapper"

export { FieldWrapper }
