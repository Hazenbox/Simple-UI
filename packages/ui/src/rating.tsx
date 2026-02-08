import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "./lib/utils";

export interface RatingProps {
    value?: number;
    onChange?: (value: number) => void;
    max?: number;
    size?: "sm" | "md" | "lg";
    readOnly?: boolean;
    disabled?: boolean;
    allowHalf?: boolean;
    className?: string;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
    (
        {
            value = 0,
            onChange,
            max = 5,
            size = "md",
            readOnly = false,
            disabled = false,
            allowHalf = false,
            className,
        },
        ref
    ) => {
        const [hoverValue, setHoverValue] = React.useState<number | null>(null);

        const sizeClasses = {
            sm: "h-4 w-4",
            md: "h-6 w-6",
            lg: "h-8 w-8",
        };

        const handleClick = (index: number, isHalf: boolean) => {
            if (readOnly || disabled) return;
            const newValue = isHalf && allowHalf ? index + 0.5 : index + 1;
            onChange?.(newValue);
        };

        const handleMouseMove = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
            if (readOnly || disabled) return;

            if (allowHalf) {
                const rect = e.currentTarget.getBoundingClientRect();
                const isHalf = e.clientX - rect.left < rect.width / 2;
                setHoverValue(isHalf ? index + 0.5 : index + 1);
            } else {
                setHoverValue(index + 1);
            }
        };

        const handleMouseLeave = () => {
            setHoverValue(null);
        };

        const displayValue = hoverValue ?? value;

        return (
            <div
                ref={ref}
                className={cn("flex items-center gap-1", className)}
                onMouseLeave={handleMouseLeave}
            >
                {Array.from({ length: max }, (_, index) => {
                    const isFilled = displayValue >= index + 1;
                    const isHalfFilled = displayValue > index && displayValue < index + 1;

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={(e) => {
                                if (allowHalf) {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const isHalf = e.clientX - rect.left < rect.width / 2;
                                    handleClick(index, isHalf);
                                } else {
                                    handleClick(index, false);
                                }
                            }}
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            disabled={disabled}
                            className={cn(
                                "relative transition-colors",
                                !readOnly && !disabled && "cursor-pointer hover:scale-110",
                                disabled && "cursor-not-allowed opacity-50"
                            )}
                        >
                            <Star
                                className={cn(
                                    sizeClasses[size],
                                    "transition-colors",
                                    isFilled
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "fill-transparent text-muted-foreground/40"
                                )}
                                strokeWidth={isFilled ? 2 : 1}
                            />
                            {isHalfFilled && (
                                <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                                    <Star
                                        className={cn(
                                            sizeClasses[size],
                                            "fill-yellow-400 text-yellow-400"
                                        )}
                                    />
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        );
    }
);

Rating.displayName = "Rating";
