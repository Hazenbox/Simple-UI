"use client"

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "./lib/utils";

/* ─── Size scale (aligned with Spinner at 2× ratio) ─── */

const SIZE_CONFIG = {
    xs: { dimension: 24, radius: 10, center: 12, viewBox: "0 0 24 24" },
    sm: { dimension: 32, radius: 13, center: 16, viewBox: "0 0 32 32" },
    md: { dimension: 40, radius: 17, center: 20, viewBox: "0 0 40 40" },
    lg: { dimension: 56, radius: 24, center: 28, viewBox: "0 0 56 56" },
    xl: { dimension: 80, radius: 35, center: 40, viewBox: "0 0 80 80" },
} as const;

type Size = keyof typeof SIZE_CONFIG;

/* ─── Thickness scale ─── */

const THICKNESS_MAP = {
    thin: 2,
    default: 3,
    thick: 4,
    bold: 6,
} as const;

type ThicknessVariant = keyof typeof THICKNESS_MAP;

/* ─── Color config ─── */

const COLOR_CONFIG = {
    primary: { track: "text-muted", progress: "text-primary" },
    success: { track: "text-success/20", progress: "text-success" },
    warning: { track: "text-warning/20", progress: "text-warning" },
    info: { track: "text-info/20", progress: "text-info" },
    destructive: { track: "text-destructive/20", progress: "text-destructive" },
} as const;

type Color = keyof typeof COLOR_CONFIG;

/* ─── Label font size per size (theme tokens only) ─── */

const LABEL_SIZE_MAP: Record<Size, string | null> = {
    xs: null,   // too small — hide label
    sm: null,   // too small — hide label
    md: "text-xs font-semibold",
    lg: "text-sm font-semibold",
    xl: "text-sm font-semibold",
};

/* ─── Icon size per size ─── */

const ICON_SIZE_MAP: Record<Size, string> = {
    xs: "h-3 w-3",
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
    xl: "h-6 w-6",
};

/* ─── CVA wrapper ─── */

const circularProgressVariants = cva("relative inline-flex items-center justify-center", {
    variants: {
        size: {
            xs: "h-6 w-6",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-14 w-14",
            xl: "h-20 w-20",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

/* ─── Props ─── */

export interface CircularProgressProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof circularProgressVariants> {
    /** Current progress value (0 to max). Ignored when indeterminate. */
    value?: number;
    /** Maximum value. Defaults to 100. */
    max?: number;
    /** Show percentage label in the center. Hidden for xs/sm sizes. */
    showValue?: boolean;
    /** Named thickness variant. */
    strokeVariant?: ThicknessVariant;
    /** Numeric thickness override (wins over strokeVariant if provided). */
    thickness?: number;
    /** Indeterminate spinning animation. */
    indeterminate?: boolean;
    /** Color variant. Follows the design system's status palette. */
    color?: Color;
    /** Icon to display in center (takes precedence over showValue). Hidden during indeterminate. */
    icon?: React.ReactNode;
}

/* ─── Component ─── */

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
            strokeVariant = "default",
            thickness,
            indeterminate = false,
            color = "primary",
            icon,
            ...props
        },
        ref
    ) => {
        const prefersReducedMotion = useReducedMotion();
        const resolvedSize: Size = size || "md";
        const resolvedColor: Color = color || "primary";
        const config = SIZE_CONFIG[resolvedSize];
        const colorConfig = COLOR_CONFIG[resolvedColor];
        const resolvedThickness = thickness ?? THICKNESS_MAP[strokeVariant || "default"];

        const circumference = 2 * Math.PI * config.radius;
        const percentage = indeterminate ? 0 : Math.min(Math.max((value / max) * 100, 0), 100);
        const offset = indeterminate ? 0 : circumference - (percentage / 100) * circumference;

        // Label logic: icon > showValue > nothing. Hide on xs/sm.
        const labelClass = LABEL_SIZE_MAP[resolvedSize];
        const canShowLabel = labelClass !== null && !indeterminate;
        const showIcon = canShowLabel && icon != null;
        const showPercentage = canShowLabel && !showIcon && showValue;

        // Static fallback arc for reduced motion during indeterminate
        const staticOffset = circumference - (25 / 100) * circumference;

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
                {/* SVG ring */}
                {indeterminate && !prefersReducedMotion ? (
                    <motion.svg
                        className="h-full w-full"
                        viewBox={config.viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* Track */}
                        <circle
                            className={colorConfig.track}
                            strokeWidth={resolvedThickness}
                            stroke="currentColor"
                            fill="transparent"
                            r={config.radius}
                            cx={config.center}
                            cy={config.center}
                        />
                        {/* Animated arc */}
                        <motion.circle
                            className={colorConfig.progress}
                            strokeWidth={resolvedThickness}
                            strokeDasharray={circumference}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r={config.radius}
                            cx={config.center}
                            cy={config.center}
                            initial={{ strokeDashoffset: circumference * 0.75 }}
                            animate={{
                                strokeDashoffset: [circumference * 0.75, circumference * 0.15, circumference * 0.75],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{ transformOrigin: "center", rotate: -90 }}
                        />
                    </motion.svg>
                ) : (
                    <svg
                        className="h-full w-full -rotate-90 transform"
                        viewBox={config.viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Track */}
                        <circle
                            className={colorConfig.track}
                            strokeWidth={resolvedThickness}
                            stroke="currentColor"
                            fill="transparent"
                            r={config.radius}
                            cx={config.center}
                            cy={config.center}
                        />
                        {/* Progress arc */}
                        {indeterminate && prefersReducedMotion ? (
                            <circle
                                className={colorConfig.progress}
                                strokeWidth={resolvedThickness}
                                strokeDasharray={circumference}
                                strokeDashoffset={staticOffset}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r={config.radius}
                                cx={config.center}
                                cy={config.center}
                            />
                        ) : (
                            <motion.circle
                                className={colorConfig.progress}
                                strokeWidth={resolvedThickness}
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
                )}

                {/* Center content: icon or percentage */}
                {showIcon && (
                    <span className={cn("absolute inset-0 flex items-center justify-center", ICON_SIZE_MAP[resolvedSize])}>
                        {icon}
                    </span>
                )}
                {showPercentage && (
                    <motion.span
                        className={cn("absolute inset-0 flex items-center justify-center", labelClass)}
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
