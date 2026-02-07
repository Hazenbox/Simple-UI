import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { cn } from "./lib/utils";
import { Button } from "./button";
import { Input } from "./input";

export interface NumberInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    showStepper?: boolean;
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
                    className={cn(showStepper && "pr-16")}
                    {...props}
                />
                {showStepper && (
                    <div className="absolute right-0 flex h-full flex-col border-l">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-1/2 rounded-none rounded-tr-lg border-b px-2"
                            onClick={handleIncrement}
                            disabled={disabled || internalValue >= max}
                            tabIndex={-1}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-1/2 rounded-none rounded-br-lg px-2"
                            onClick={handleDecrement}
                            disabled={disabled || internalValue <= min}
                            tabIndex={-1}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                    </div>
                )}
            </div>
        );
    }
);

NumberInput.displayName = "NumberInput";
