import * as React from "react";
import { cn } from "./lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> { }

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
    ({ className, ...props }, ref) => {
        return (
            <kbd
                ref={ref}
                className={cn(
                    "pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded-md bg-muted px-1 font-mono text-[0.625rem] font-medium leading-none tracking-tight text-muted-foreground",
                    className
                )}
                {...props}
            />
        );
    }
);

Kbd.displayName = "Kbd";
