import * as React from "react";
import { cn } from "./lib/utils";

export interface PinInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    mask?: boolean;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const PinInput = React.forwardRef<HTMLDivElement, PinInputProps>(
    (
        {
            length = 6,
            value = "",
            onChange,
            onComplete,
            mask = false,
            placeholder = "○",
            disabled = false,
            className,
        },
        ref
    ) => {
        const [pins, setPins] = React.useState<string[]>(
            Array(length).fill("")
        );
        const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

        React.useEffect(() => {
            const newPins = value.split("").slice(0, length);
            while (newPins.length < length) {
                newPins.push("");
            }
            setPins(newPins);
        }, [value, length]);

        const handleChange = (index: number, val: string) => {
            // Only allow single digit/character
            const newVal = val.slice(-1);

            if (!/^[0-9]$/.test(newVal) && newVal !== "") return;

            const newPins = [...pins];
            newPins[index] = newVal;
            setPins(newPins);

            const newValue = newPins.join("");
            onChange?.(newValue);

            // Auto-focus next input
            if (newVal && index < length - 1) {
                inputRefs.current[index + 1]?.focus();
            }

            // Check if complete
            if (newPins.every((pin) => pin !== "")) {
                onComplete?.(newValue);
            }
        };

        const handleKeyDown = (
            index: number,
            e: React.KeyboardEvent<HTMLInputElement>
        ) => {
            if (e.key === "Backspace" && !pins[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        };

        const handlePaste = (e: React.ClipboardEvent) => {
            e.preventDefault();
            const pastedData = e.clipboardData.getData("text").slice(0, length);

            if (!/^[0-9]+$/.test(pastedData)) return;

            const newPins = pastedData.split("");
            while (newPins.length < length) {
                newPins.push("");
            }
            setPins(newPins);
            onChange?.(pastedData);

            if (newPins.every((pin) => pin !== "")) {
                onComplete?.(pastedData);
            }

            // Focus last filled input
            const lastIndex = Math.min(pastedData.length, length - 1);
            inputRefs.current[lastIndex]?.focus();
        };

        return (
            <div ref={ref} className={cn("flex gap-2", className)}>
                {pins.map((pin, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type={mask ? "password" : "text"}
                        inputMode="numeric"
                        maxLength={1}
                        value={pin}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        disabled={disabled}
                        placeholder={placeholder}
                        className={cn(
                            "h-8 w-8 rounded-lg border border-input bg-background text-center text-sm font-medium ring-offset-background transition-colors",
                            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            pin && "ring-1 ring-primary/70"
                        )}
                    />
                ))}
            </div>
        );
    }
);

PinInput.displayName = "PinInput";
