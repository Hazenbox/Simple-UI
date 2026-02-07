import * as React from "react";
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "./lib/utils";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
    change?: number;
    helpText?: string;
    icon?: React.ReactNode;
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
    ({ className, label, value, change, helpText, icon, ...props }, ref) => {
        const isPositive = change !== undefined && change > 0;
        const isNegative = change !== undefined && change < 0;

        return (
            <div
                ref={ref}
                className={cn("rounded-lg border bg-card p-4 text-card-foreground", className)}
                {...props}
            >
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    {icon && <div className="text-muted-foreground">{icon}</div>}
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                    <p className="text-2xl font-bold">{value}</p>
                    {change !== undefined && (
                        <span
                            className={cn(
                                "flex items-center text-sm font-medium",
                                isPositive && "text-green-600 dark:text-green-400",
                                isNegative && "text-red-600 dark:text-red-400",
                                change === 0 && "text-muted-foreground"
                            )}
                        >
                            {isPositive && <TrendingUp className="mr-1 h-3 w-3" />}
                            {isNegative && <TrendingDown className="mr-1 h-3 w-3" />}
                            {Math.abs(change)}%
                        </span>
                    )}
                </div>
                {helpText && (
                    <p className="mt-2 text-xs text-muted-foreground">{helpText}</p>
                )}
            </div>
        );
    }
);

Stat.displayName = "Stat";
