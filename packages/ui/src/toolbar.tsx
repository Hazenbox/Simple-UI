import * as React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";

import { cn } from "./lib/utils";
import { toggleVariants } from "./toggle";

const Toolbar = React.forwardRef<
    React.ElementRef<typeof ToolbarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <ToolbarPrimitive.Root
        ref={ref}
        className={cn(
            "flex w-full min-w-max items-center gap-1 rounded-md border bg-background p-1",
            className
        )}
        {...props}
    />
));
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

const ToolbarSeparator = React.forwardRef<
    React.ElementRef<typeof ToolbarPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <ToolbarPrimitive.Separator
        ref={ref}
        className={cn("mx-2 h-6 w-px bg-border", className)}
        {...props}
    />
));
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

const ToolbarButton = React.forwardRef<
    React.ElementRef<typeof ToolbarPrimitive.Button>,
    React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>
>(({ className, ...props }, ref) => (
    <ToolbarPrimitive.Button
        ref={ref}
        className={cn(
            toggleVariants({ variant: "default", size: "sm" }),
            className
        )}
        {...props}
    />
));
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

const ToolbarLink = React.forwardRef<
    React.ElementRef<typeof ToolbarPrimitive.Link>,
    React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link>
>(({ className, ...props }, ref) => (
    <ToolbarPrimitive.Link
        ref={ref}
        className={cn(
            toggleVariants({ variant: "default", size: "sm" }),
            className
        )}
        {...props}
    />
));
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName;

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

const ToolbarToggleItem = React.forwardRef<
    React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
    React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem>
>(({ className, ...props }, ref) => (
    <ToolbarPrimitive.ToggleItem
        ref={ref}
        className={cn(
            toggleVariants({ variant: "default", size: "sm" }),
            "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
            className
        )}
        {...props}
    />
));
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName;

export {
    Toolbar,
    ToolbarSeparator,
    ToolbarButton,
    ToolbarLink,
    ToolbarToggleGroup,
    ToolbarToggleItem,
};
