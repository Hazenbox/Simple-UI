import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "./lib/utils";

export interface RangeSliderProps
    extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    formatLabel?: (value: number) => string;
    showLabels?: boolean;
}

export const RangeSlider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    RangeSliderProps
>(({ className, formatLabel, showLabels = false, ...props }, ref) => {
    const values = props.value || props.defaultValue || [0, 100];

    return (
        <div className="space-y-2">
            <SliderPrimitive.Root
                ref={ref}
                className={cn(
                    "relative flex w-full touch-none select-none items-center",
                    className
                )}
                {...props}
            >
                <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                    <SliderPrimitive.Range className="absolute h-full bg-primary" />
                </SliderPrimitive.Track>
                {values.map((_, index) => (
                    <SliderPrimitive.Thumb
                        key={index}
                        className="block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50"
                    />
                ))}
            </SliderPrimitive.Root>
            {showLabels && (
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                        {formatLabel ? formatLabel(values[0]) : values[0]}
                    </span>
                    <span>
                        {formatLabel ? formatLabel(values[1]) : values[1]}
                    </span>
                </div>
            )}
        </div>
    );
});

RangeSlider.displayName = "RangeSlider";
