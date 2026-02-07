import * as React from "react";
import { cn } from "./lib/utils";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    axis?: "horizontal" | "vertical";
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
    ({ className, size = 1, axis = "vertical", ...props }, ref) => {
        const sizeValue = typeof size === "number" ? `${size}rem` : size;

        return (
            <div
                ref={ref}
                aria-hidden="true"
                className={cn(className)}
                style={{
                    [axis === "vertical" ? "height" : "width"]: sizeValue,
                    flexShrink: 0,
                }}
                {...props}
            />
        );
    }
);

Spacer.displayName = "Spacer";
