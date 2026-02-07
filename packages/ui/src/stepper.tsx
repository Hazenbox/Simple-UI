import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "./lib/utils";

export interface Step {
    label: string;
    description?: string;
    optional?: boolean;
}

export interface StepperProps {
    steps: Step[];
    activeStep: number;
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
    ({ steps, activeStep, orientation = "horizontal", className }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "flex-row items-center" : "flex-col",
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
                                            "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors",
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
                                            <Check className="h-5 w-5" />
                                        ) : (
                                            <span className="text-sm font-medium">{index + 1}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div
                                    className={cn(
                                        "ml-4",
                                        orientation === "horizontal" && "min-w-0",
                                        orientation === "vertical" && "flex-1 pb-8"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "text-sm font-medium",
                                            isActive && "text-primary",
                                            !isActive && "text-muted-foreground"
                                        )}
                                    >
                                        {step.label}
                                        {step.optional && (
                                            <span className="ml-2 text-xs text-muted-foreground">
                                                (Optional)
                                            </span>
                                        )}
                                    </div>
                                    {step.description && (
                                        <div className="mt-1 text-xs text-muted-foreground">
                                            {step.description}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Connector Line */}
                            {!isLast && (
                                <div
                                    className={cn(
                                        "transition-colors",
                                        orientation === "horizontal"
                                            ? "mx-4 h-0.5 flex-1"
                                            : "ml-5 h-8 w-0.5",
                                        isCompleted ? "bg-primary" : "bg-muted"
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
