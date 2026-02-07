import * as React from "react";
import { cn } from "./lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
    label?: string;
    variant?: "solid" | "dashed";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    (
        { className, orientation = "horizontal", decorative, label, variant = "solid", ...props },
        ref
    ) => {
        const isHorizontal = orientation === "horizontal";

        if (label) {
            return (
                <div
                    ref={ref}
                    className={cn(
                        "flex items-center gap-3",
                        isHorizontal ? "w-full" : "h-full flex-col",
                        className
                    )}
                    {...props}
                >
                    <div
                        className={cn(
                            "flex-1 border-t",
                            variant === "dashed" && "border-dashed",
                            !isHorizontal && "h-full border-l border-t-0"
                        )}
                    />
                    <span className="text-xs text-muted-foreground">{label}</span>
                    <div
                        className={cn(
                            "flex-1 border-t",
                            variant === "dashed" && "border-dashed",
                            !isHorizontal && "h-full border-l border-t-0"
                        )}
                    />
                </div>
            );
        }

        return (
            <div
                ref={ref}
                role={decorative ? "none" : "separator"}
                aria-orientation={orientation}
                className={cn(
                    "shrink-0",
                    variant === "dashed"
                        ? cn(
                              "border-border border-dashed",
                              isHorizontal ? "w-full border-t" : "h-full border-l"
                          )
                        : cn(
                              "bg-border",
                              isHorizontal ? "h-px w-full" : "h-full w-px"
                          ),
                    className
                )}
                {...props}
            />
        );
    }
);

Divider.displayName = "Divider";
