import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./lib/utils";

const toggleVariants = cva(
    "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-transparent data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
                outline:
                    "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
                subtle:
                    "bg-transparent data-[state=on]:bg-accent/50 data-[state=on]:text-accent-foreground",
                bold:
                    "bg-transparent data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
            },
            size: {
                default: "h-8 px-2.5",
                sm: "h-7 px-2",
                lg: "h-9 px-4",
            },
            shape: {
                default: "rounded-lg",
                square: "rounded-lg aspect-square p-0",
                circle: "rounded-full aspect-square p-0",
            },
        },
        compoundVariants: [
            { shape: "square", size: "default", className: "h-8 w-8" },
            { shape: "square", size: "sm", className: "h-7 w-7" },
            { shape: "square", size: "lg", className: "h-9 w-9" },
            { shape: "circle", size: "default", className: "h-8 w-8" },
            { shape: "circle", size: "sm", className: "h-7 w-7" },
            { shape: "circle", size: "lg", className: "h-9 w-9" },
        ],
        defaultVariants: {
            variant: "default",
            size: "default",
            shape: "default",
        },
    }
);

const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, shape, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, shape, className }))}
        {...props}
    />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
