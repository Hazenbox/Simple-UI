"use client"

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";

const circularProgressVariants = cva("relative inline-flex", {
    variants: {
        size: {
            sm: "h-8 w-8",
            md: "h-12 w-12",
            lg: "h-16 w-16",
            xl: "h-24 w-24",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export interface CircularProgressProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof circularProgressVariants> {
    value?: number;
    max?: number;
    showValue?: boolean;
    thickness?: number;
    indeterminate?: boolean;
}

const SIZE_CONFIG = {
    sm: { radius: 14, center: 16, viewBox: "0 0 32 32" },
    md: { radius: 20, center: 24, viewBox: "0 0 48 48" },
    lg: { radius: 28, center: 32, viewBox: "0 0 64 64" },
    xl: { radius: 42, center: 48, viewBox: "0 0 96 96" },
} as const;

export const CircularProgress = React.forwardRef<
    HTMLDivElement,
    CircularProgressProps
>(
    (
        {
            className,
            size = "md",
            value = 0,
            max = 100,
            showValue = false,
            thickness = 4,
            indeterminate = false,
            ...props
        },
        ref
    ) => {
        const percentage = indeterminate ? 0 : Math.min(Math.max((value / max) * 100, 0), 100);
        const config = SIZE_CONFIG[size || "md"];
        const circumference = 2 * Math.PI * config.radius;
        const offset = indeterminate ? 0 : circumference - (percentage / 100) * circumference;

        return (
            <div
                ref={ref}
                className={cn(circularProgressVariants({ size, className }))}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={indeterminate ? undefined : value}
                aria-label={indeterminate ? "Loading" : `Progress: ${Math.round(percentage)}%`}
                {...props}
            >
                <svg 
                    className="h-full w-full -rotate-90 transform" 
                    viewBox={config.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="text-muted"
                        strokeWidth={thickness}
                        stroke="currentColor"
                        fill="transparent"
                        r={config.radius}
                        cx={config.center}
                        cy={config.center}
                    />
                    {indeterminate ? (
                        <motion.circle
                            className="text-primary"
                            strokeWidth={thickness}
                            strokeDasharray={circumference}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r={config.radius}
                            cx={config.center}
                            cy={config.center}
                            animate={{
                                strokeDashoffset: [0, circumference * 0.75, circumference],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    ) : (
                        <motion.circle
                            className="text-primary"
                            strokeWidth={thickness}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r={config.radius}
                            cx={config.center}
                            cy={config.center}
                            initial={false}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    )}
                </svg>
                {showValue && !indeterminate && (
                    <motion.span 
                        className="absolute inset-0 flex items-center justify-center text-sm font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {Math.round(percentage)}%
                    </motion.span>
                )}
            </div>
        );
    }
);

CircularProgress.displayName = "CircularProgress";
