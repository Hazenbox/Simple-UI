import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "./lib/utils";

export interface Step {
    label: string;
    description?: string;
    optional?: boolean;
    icon?: React.ReactNode;
}

export type StepperVariant = "default" | "compact" | "iconText";

export interface StepperProps {
    steps: Step[];
    activeStep: number;
    orientation?: "horizontal" | "vertical";
    variant?: StepperVariant;
    className?: string;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
    (
        {
            steps,
            activeStep,
            orientation = "horizontal",
            variant = "default",
            className,
        },
        ref
    ) => {
        const isCompact = variant === "compact";
        const isIconText = variant === "iconText";
        const circleSize = "h-7 w-7";

        return (
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal"
                        ? "flex-row items-center"
                        : "flex-col",
                    className
                )}
            >
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isActive = index === activeStep;
                    const isLast = index === steps.length - 1;

                    return (
                        <React.Fragment key={index}>
                            <div
                                className={cn(
                                    "flex items-center",
                                    orientation === "vertical" && "w-full"
                                )}
                            >
                                {/* Step Circle */}
                                <div className="flex flex-col items-center">
                                    <div
                                        className={cn(
                                            "flex items-center justify-center rounded-full border-2 transition-colors",
                                            circleSize,
                                            isCompleted &&
                                                "border-primary bg-primary text-primary-foreground",
                                            isActive &&
                                                "border-primary bg-background text-primary",
                                            !isCompleted &&
                                                !isActive &&
                                                "border-muted bg-background text-muted-foreground"
                                        )}
                                    >
                                        {isCompleted ? (
                                            <Check className="h-4 w-4" />
                                        ) : isIconText && step.icon ? (
                                            <span className="flex h-4 w-4 items-center justify-center">
                                                {step.icon}
                                            </span>
                                        ) : (
                                            <span className="text-xs font-medium">
                                                {index + 1}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Step Content */}
                                {!isCompact && (
                                    <div
                                        className={cn(
                                            "ml-2",
                                            orientation === "horizontal" &&
                                                "min-w-0",
                                            orientation === "vertical" &&
                                                "flex-1 pb-6"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "text-xs font-medium",
                                                isActive && "text-primary",
                                                !isActive &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {step.label}
                                            {step.optional && (
                                                <span className="ml-1.5 text-xs text-muted-foreground">
                                                    (Optional)
                                                </span>
                                            )}
                                        </div>
                                        {step.description && (
                                            <div className="mt-0.5 text-xs text-muted-foreground">
                                                {step.description}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Compact: Label below circle */}
                                {isCompact && (
                                    <div className="ml-2">
                                        <span
                                            className={cn(
                                                "text-xs font-medium",
                                                isActive && "text-primary",
                                                !isActive &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {step.label}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Connector Line */}
                            {!isLast && (
                                <div
                                    className={cn(
                                        "transition-colors",
                                        orientation === "horizontal"
                                            ? "mx-2 h-0.5 flex-1"
                                            : "ml-3.5 h-6 w-0.5",
                                        isCompleted
                                            ? "bg-primary"
                                            : "bg-muted"
                                    )}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
);

Stepper.displayName = "Stepper";
