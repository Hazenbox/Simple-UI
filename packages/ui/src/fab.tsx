import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";

const fabVariants = cva(
    "inline-flex items-center justify-center rounded-full font-medium shadow-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-14 w-14",
                sm: "h-10 w-10",
                lg: "h-16 w-16",
                extended: "h-14 gap-2 px-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface FABProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fabVariants> {
    icon?: React.ReactNode;
    label?: string;
}

export const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
    ({ className, variant, size, icon, label, children, ...props }, ref) => {
        const isExtended = size === "extended";

        return (
            <button
                ref={ref}
                className={cn(fabVariants({ variant, size, className }))}
                {...props}
            >
                {icon && <div className={cn(isExtended && label && "h-5 w-5")}>{icon}</div>}
                {isExtended && label && <span>{label}</span>}
                {!isExtended && children}
            </button>
        );
    }
);

FAB.displayName = "FAB";
