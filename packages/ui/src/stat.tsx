"use client"

import * as React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "./lib/utils";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
    change?: number;
    helpText?: string;
    compareText?: string;
    icon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
    footer?: React.ReactNode;
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
    ({ className, label, value, change, helpText, compareText, icon, prefix, suffix, footer, ...props }, ref) => {
        const isPositive = change !== undefined && change > 0;
        const isNegative = change !== undefined && change < 0;

        return (
            <div
                ref={ref}
                className={cn("rounded-lg border bg-card p-3 text-card-foreground", className)}
                {...props}
            >
                <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    {icon && <div className="text-muted-foreground">{icon}</div>}
                </div>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                    <p className="text-xl font-bold">
                        {prefix && <span className="text-sm font-semibold text-muted-foreground">{prefix}</span>}
                        {value}
                        {suffix && <span className="ml-0.5 text-xs font-medium text-muted-foreground">{suffix}</span>}
                    </p>
                    {change !== undefined && (
                        <span
                            className={cn(
                                "flex items-center text-xs font-medium",
                                isPositive && "text-trend-up",
                                isNegative && "text-trend-down",
                                change === 0 && "text-muted-foreground"
                            )}
                        >
                            {isPositive && <TrendingUp className="mr-0.5 h-3 w-3" />}
                            {isNegative && <TrendingDown className="mr-0.5 h-3 w-3" />}
                            {isPositive && "+"}
                            {Math.abs(change)}%
                        </span>
                    )}
                    {compareText && (
                        <span className="text-xs text-muted-foreground">{compareText}</span>
                    )}
                </div>
                {helpText && (
                    <p className="mt-1 text-xs text-muted-foreground">{helpText}</p>
                )}
                {footer && (
                    <div className="mt-2 border-t pt-2">{footer}</div>
                )}
            </div>
        );
    }
);

Stat.displayName = "Stat";

/* ------------------------------------------------------------------ */
/*  StatGroup – multiple label+value pairs in one card                 */
/* ------------------------------------------------------------------ */

export interface StatGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    items: Array<{
        label: string;
        value: string | number;
        suffix?: string;
    }>;
}

export const StatGroup = React.forwardRef<HTMLDivElement, StatGroupProps>(
    ({ className, items, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("rounded-lg border bg-card p-3 text-card-foreground", className)}
            {...props}
        >
            <div className="flex items-baseline gap-4">
                {items.map((item, i) => (
                    <div key={i} className={cn(i > 0 && "border-l pl-4")}>
                        <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                        <p className="mt-0.5 text-xl font-bold">
                            {item.value}
                            {item.suffix && <span className="ml-0.5 text-xs font-medium text-muted-foreground">{item.suffix}</span>}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
);

StatGroup.displayName = "StatGroup";
