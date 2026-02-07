"use client"

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";
import { Input } from "./input";
import { Stack } from "./primitives/stack";
import { Box } from "./primitives/box";

const inputAddonVariants = cva(
    "flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground transition-colors",
    {
        variants: {
            position: {
                left: "rounded-l-md border-r-0",
                right: "rounded-r-md border-l-0",
            },
        },
        defaultVariants: {
            position: "left",
        },
    }
);

export interface InputGroupProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
    ({ className, ...props }, ref) => {
        return (
            <Stack
                ref={ref}
                direction="row"
                gap="none"
                align="stretch"
                className={cn("w-full", className)}
                role="group"
                {...props}
            />
        );
    }
);
InputGroup.displayName = "InputGroup";

export interface InputAddonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputAddonVariants> {
    position?: "left" | "right";
}

export const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
    ({ className, position = "left", ...props }, ref) => {
        return (
            <Box
                ref={ref}
                className={cn(inputAddonVariants({ position }), className)}
                {...props}
            />
        );
    }
);
InputAddon.displayName = "InputAddon";

export interface InputGroupInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    hasLeftAddon?: boolean;
    hasRightAddon?: boolean;
}

export const InputGroupInput = React.forwardRef<
    HTMLInputElement,
    InputGroupInputProps
>(({ className, hasLeftAddon, hasRightAddon, ...props }, ref) => {
    return (
        <Input
            ref={ref}
            className={cn(
                "flex-1 transition-all",
                hasLeftAddon && "rounded-l-none",
                hasRightAddon && "rounded-r-none",
                className
            )}
            {...props}
        />
    );
});
InputGroupInput.displayName = "InputGroupInput";
