import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";

const chipVariants = cva(
    "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outline: "text-foreground",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface ChipProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
    onDelete?: () => void;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
    ({ className, variant, onDelete, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(chipVariants({ variant }), className)}
                {...props}
            >
                {children}
                {onDelete && (
                    <button
                        onClick={onDelete}
                        className="ml-1 rounded-full outline-none ring-offset-background hover:bg-black/10 focus:ring-2 focus:ring-ring focus:ring-offset-1 dark:hover:bg-white/10"
                    >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                    </button>
                )}
            </div>
        );
    }
);

Chip.displayName = "Chip";

export { chipVariants };
