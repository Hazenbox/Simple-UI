import * as React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { cn } from "./lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";

export interface ColorPickerProps {
    value?: string;
    onChange?: (color: string) => void;
    className?: string;
}

export const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
    ({ value = "#000000", onChange, className }, ref) => {
        const [color, setColor] = React.useState(value);

        React.useEffect(() => {
            setColor(value);
        }, [value]);

        const handleChange = (newColor: string) => {
            setColor(newColor);
            onChange?.(newColor);
        };

        return (
            <div ref={ref} className={cn("space-y-2", className)}>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-start gap-2"
                        >
                            <div
                                className="h-6 w-6 rounded border"
                                style={{ backgroundColor: color }}
                            />
                            <span className="font-mono text-sm">{color}</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-3">
                        <div className="space-y-3">
                            <HexColorPicker color={color} onChange={handleChange} />
                            <HexColorInput
                                color={color}
                                onChange={handleChange}
                                prefixed
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
                            />
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
);

ColorPicker.displayName = "ColorPicker";
