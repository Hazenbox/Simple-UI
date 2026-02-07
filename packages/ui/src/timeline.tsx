"use client"

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";

/* ------------------------------------------------------------------ */
/*  Timeline Root                                                      */
/* ------------------------------------------------------------------ */

const timelineVariants = cva("flex flex-col", {
    variants: {
        variant: {
            default: "gap-0",
            compact: "gap-0",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface TimelineProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> { }

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
    ({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(timelineVariants({ variant }), className)}
            {...props}
        />
    )
);
Timeline.displayName = "Timeline";

/* ------------------------------------------------------------------ */
/*  Timeline Item                                                      */
/* ------------------------------------------------------------------ */

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
    ({ className, isLast, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("relative flex gap-3", className)}
            {...props}
        />
    )
);
TimelineItem.displayName = "TimelineItem";

/* ------------------------------------------------------------------ */
/*  Timeline Connector – the vertical line                             */
/* ------------------------------------------------------------------ */

export interface TimelineConnectorProps extends React.HTMLAttributes<HTMLDivElement> {
    isLast?: boolean;
}

const TimelineConnector = React.forwardRef<HTMLDivElement, TimelineConnectorProps>(
    ({ className, isLast, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex flex-col items-center",
                className
            )}
            {...props}
        />
    )
);
TimelineConnector.displayName = "TimelineConnector";

/* ------------------------------------------------------------------ */
/*  Timeline Dot – the circle / icon container                         */
/* ------------------------------------------------------------------ */

const dotVariants = cva(
    "relative z-10 flex shrink-0 items-center justify-center rounded-full",
    {
        variants: {
            size: {
                sm: "h-5 w-5",
                md: "h-6 w-6",
            },
            status: {
                default: "border-2 border-border bg-background",
                active: "border-2 border-primary bg-primary text-primary-foreground",
                success: "border-2 border-success bg-success text-white",
                destructive: "border-2 border-destructive bg-destructive text-white",
                warning: "border-2 border-warning bg-warning text-white",
                info: "border-2 border-info bg-info text-white",
                muted: "border-2 border-muted-foreground/20 bg-muted",
            },
        },
        defaultVariants: {
            size: "md",
            status: "default",
        },
    }
);

export interface TimelineDotProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dotVariants> { }

const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>(
    ({ className, size, status, children, ...props }, ref) => (
        <div ref={ref} className={cn(dotVariants({ size, status }), className)} {...props}>
            {children || (
                <div className={cn(
                    "rounded-full",
                    status === "default" || !status ? "h-2 w-2 bg-primary" : "h-0 w-0",
                )} />
            )}
        </div>
    )
);
TimelineDot.displayName = "TimelineDot";

/* ------------------------------------------------------------------ */
/*  Timeline Line – vertical segment between dots                      */
/* ------------------------------------------------------------------ */

export interface TimelineLineProps extends React.HTMLAttributes<HTMLDivElement> {
    isLast?: boolean;
}

const TimelineLine = React.forwardRef<HTMLDivElement, TimelineLineProps>(
    ({ className, isLast, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "w-0.5 grow",
                isLast ? "bg-transparent" : "bg-border",
                className
            )}
            {...props}
        />
    )
);
TimelineLine.displayName = "TimelineLine";

/* ------------------------------------------------------------------ */
/*  Timeline Content – right-side content area                         */
/* ------------------------------------------------------------------ */

const TimelineContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex-1 pb-4", className)}
        {...props}
    />
));
TimelineContent.displayName = "TimelineContent";

/* ------------------------------------------------------------------ */
/*  Timeline Heading                                                   */
/* ------------------------------------------------------------------ */

const TimelineHeading = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm font-medium leading-none", className)}
        {...props}
    />
));
TimelineHeading.displayName = "TimelineHeading";

/* ------------------------------------------------------------------ */
/*  Timeline Description                                               */
/* ------------------------------------------------------------------ */

const TimelineDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("mt-1 text-xs text-muted-foreground", className)}
        {...props}
    />
));
TimelineDescription.displayName = "TimelineDescription";

/* ------------------------------------------------------------------ */
/*  Timeline Time                                                      */
/* ------------------------------------------------------------------ */

const TimelineTime = React.forwardRef<
    HTMLTimeElement,
    React.TimeHTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
    <time
        ref={ref}
        className={cn("text-xs text-muted-foreground", className)}
        {...props}
    />
));
TimelineTime.displayName = "TimelineTime";

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */

export {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineDot,
    TimelineLine,
    TimelineContent,
    TimelineHeading,
    TimelineDescription,
    TimelineTime,
    timelineVariants,
    dotVariants,
};
