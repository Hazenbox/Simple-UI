import * as React from "react";
import { cn } from "./lib/utils";

export interface TimelineItem {
    title: string;
    description?: string;
    time?: string;
    icon?: React.ReactNode;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TimelineItem[];
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
    ({ className, items, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("space-y-6", className)} {...props}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <div key={index} className="relative flex gap-4">
                            {/* Timeline Line */}
                            {!isLast && (
                                <div className="absolute left-4 top-8 h-full w-0.5 bg-border" />
                            )}

                            {/* Icon/Dot */}
                            <div className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                                {item.icon || (
                                    <div className="h-3 w-3 rounded-full bg-primary" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-1 pb-6">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold leading-none">{item.title}</p>
                                    {item.time && (
                                        <time className="text-sm text-muted-foreground">
                                            {item.time}
                                        </time>
                                    )}
                                </div>
                                {item.description && (
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
);

Timeline.displayName = "Timeline";
