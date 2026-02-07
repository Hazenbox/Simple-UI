import * as React from "react";
import { cn } from "./lib/utils";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "static" | "fixed" | "sticky";
}

export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
    ({ className, position = "static", ...props }, ref) => {
        const positionClasses = {
            static: "",
            fixed: "fixed top-0 left-0 right-0 z-50",
            sticky: "sticky top-0 z-50",
        };

        return (
            <header
                ref={ref}
                className={cn(
                    "flex h-12 items-center border-b bg-background px-4",
                    positionClasses[position],
                    className
                )}
                {...props}
            />
        );
    }
);
AppBar.displayName = "AppBar";

export const AppBarTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
    return (
        <h1
            ref={ref}
            className={cn("text-lg font-semibold", className)}
            {...props}
        />
    );
});
AppBarTitle.displayName = "AppBarTitle";

export const AppBarActions = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("ml-auto flex items-center gap-2", className)}
            {...props}
        />
    );
});
AppBarActions.displayName = "AppBarActions";
