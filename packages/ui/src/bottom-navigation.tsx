import * as React from "react";
import { cn } from "./lib/utils";

export interface BottomNavigationProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export interface BottomNavigationItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    label: string;
    active?: boolean;
}

export const BottomNavigation = React.forwardRef<
    HTMLDivElement,
    BottomNavigationProps
>(({ className, ...props }, ref) => {
    return (
        <nav
            ref={ref}
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 border-t bg-background",
                className
            )}
            {...props}
        />
    );
});
BottomNavigation.displayName = "BottomNavigation";

export const BottomNavigationItem = React.forwardRef<
    HTMLButtonElement,
    BottomNavigationItemProps
>(({ className, icon, label, active, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs transition-colors",
                active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                className
            )}
            {...props}
        >
            {icon && <div className="h-6 w-6">{icon}</div>}
            <span className="font-medium">{label}</span>
        </button>
    );
});
BottomNavigationItem.displayName = "BottomNavigationItem";
