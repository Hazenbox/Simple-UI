import * as React from "react";
import { cn } from "./lib/utils";

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    onClose?: () => void;
    invisible?: boolean;
}

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
    ({ className, open = false, onClose, invisible = false, ...props }, ref) => {
        if (!open) return null;

        return (
            <div
                ref={ref}
                onClick={onClose}
                className={cn(
                    "fixed inset-0 z-40 transition-opacity",
                    invisible ? "bg-transparent" : "bg-background/80 backdrop-blur-sm",
                    className
                )}
                {...props}
            />
        );
    }
);

Backdrop.displayName = "Backdrop";
