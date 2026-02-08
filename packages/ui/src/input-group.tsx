"use client"

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";
import { Input, type InputProps } from "./input";

/* ─── InputGroup (container) ─── */

const inputGroupVariants = cva(
    "flex w-full items-center rounded-lg border border-input bg-background transition-colors focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1 hover:border-muted-foreground/50",
    {
        variants: {
            size: {
                default: "h-8",
                sm: "h-7",
                lg: "h-9",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface InputGroupProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> { }

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
    ({ className, size, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(inputGroupVariants({ size }), className)}
            role="group"
            {...props}
        />
    )
);
InputGroup.displayName = "InputGroup";

/* ─── InputAddon ─── */

export interface InputAddonProps
    extends React.HTMLAttributes<HTMLDivElement> {
    position?: "left" | "right";
}

export const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
    ({ className, position = "left", ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex shrink-0 items-center rounded-md bg-muted/50 px-2 text-xs text-muted-foreground",
                position === "left" ? "ml-1" : "mr-1",
                className
            )}
            {...props}
        />
    )
);
InputAddon.displayName = "InputAddon";

/* ─── InputGroupInput ─── */

export interface InputGroupInputProps extends InputProps { }

export const InputGroupInput = React.forwardRef<
    HTMLInputElement,
    InputGroupInputProps
>(({ className, ...props }, ref) => (
    <Input
        ref={ref}
        className={cn(
            "flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-transparent",
            className
        )}
        {...props}
    />
));
InputGroupInput.displayName = "InputGroupInput";
