import * as React from "react";
import { cn } from "./lib/utils";
import { Button } from "./button";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
    ({ className, icon, title, description, action, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col items-center justify-center p-4 text-center",
                    className
                )}
                {...props}
            >
                {icon && (
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground [&>svg]:h-5 [&>svg]:w-5">
                        {icon}
                    </div>
                )}
                <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                {description && (
                    <p className="mb-2 max-w-sm text-xs text-muted-foreground">
                        {description}
                    </p>
                )}
                {action && (
                    <Button onClick={action.onClick} variant="outline" size="sm">
                        {action.label}
                    </Button>
                )}
            </div>
        );
    }
);

EmptyState.displayName = "EmptyState";
