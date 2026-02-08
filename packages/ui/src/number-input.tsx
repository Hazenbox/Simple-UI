import * as React from "react";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";

import { cn } from "./lib/utils";
import { Button } from "./button";
import { Input } from "./input";

export interface NumberInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    showStepper?: boolean;
    /** vertical = stacked up/down arrows (default), horizontal = +/- buttons on sides */
    orientation?: "vertical" | "horizontal";
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
    (
        {
            value = 0,
            onChange,
            min = -Infinity,
            max = Infinity,
            step = 1,
            precision = 0,
            showStepper = true,
            orientation = "vertical",
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = React.useState(value);

        React.useEffect(() => {
            setInternalValue(value);
        }, [value]);

        const clamp = (num: number) => {
            const clamped = Math.min(Math.max(num, min), max);
            return precision > 0 ? Number(clamped.toFixed(precision)) : Math.round(clamped);
        };

        const handleIncrement = () => {
            const newValue = clamp(internalValue + step);
            setInternalValue(newValue);
            onChange?.(newValue);
        };

        const handleDecrement = () => {
            const newValue = clamp(internalValue - step);
            setInternalValue(newValue);
            onChange?.(newValue);
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            if (val === "" || val === "-") {
                setInternalValue(0);
                return;
            }
            const num = parseFloat(val);
            if (!isNaN(num)) {
                const newValue = clamp(num);
                setInternalValue(newValue);
                onChange?.(newValue);
            }
        };

        if (orientation === "horizontal" && showStepper) {
            return (
                <div className={cn("flex items-center gap-1", className)}>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 shrink-0 rounded-lg p-0"
                        onClick={handleDecrement}
                        disabled={disabled || internalValue <= min}
                        tabIndex={-1}
                        aria-label="Decrease"
                    >
                        <Minus className="h-3 w-3" />
                    </Button>
                    <Input
                        ref={ref}
                        type="number"
                        value={internalValue}
                        onChange={handleInputChange}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                        className="text-center text-xs"
                        {...props}
                    />
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 shrink-0 rounded-lg p-0"
                        onClick={handleIncrement}
                        disabled={disabled || internalValue >= max}
                        tabIndex={-1}
                        aria-label="Increase"
                    >
                        <Plus className="h-3 w-3" />
                    </Button>
                </div>
            );
        }

        return (
            <div className={cn("relative flex items-center", className)}>
                <Input
                    ref={ref}
                    type="number"
                    value={internalValue}
                    onChange={handleInputChange}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    className={cn("text-xs", showStepper && "pr-8")}
                    {...props}
                />
                {showStepper && (
                    <div className="absolute right-0 flex h-full flex-col border-l">
                        <button
                            type="button"
                            className="flex h-1/2 items-center justify-center rounded-tr-lg border-b px-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                            onClick={handleIncrement}
                            disabled={disabled || internalValue >= max}
                            tabIndex={-1}
                            aria-label="Increase"
                        >
                            <ChevronUp className="h-3 w-3" />
                        </button>
                        <button
                            type="button"
                            className="flex h-1/2 items-center justify-center rounded-br-lg px-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                            onClick={handleDecrement}
                            disabled={disabled || internalValue <= min}
                            tabIndex={-1}
                            aria-label="Decrease"
                        >
                            <ChevronDown className="h-3 w-3" />
                        </button>
                    </div>
                )}
            </div>
        );
    }
);

NumberInput.displayName = "NumberInput";
