"use client"

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Stack } from "./primitives/stack";

export interface DateRangePickerProps {
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const DateRangePicker = React.forwardRef<
    HTMLDivElement,
    DateRangePickerProps
>(
    (
        { value, onChange, placeholder = "Pick a date range", disabled, className },
        ref
    ) => {
        const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
            value
        );

        React.useEffect(() => {
            setDateRange(value);
        }, [value]);

        const handleSelect = (range: DateRange | undefined) => {
            setDateRange(range);
            onChange?.(range);
        };

        const formatDateRange = (range: DateRange | undefined): string => {
            if (!range?.from) return "";
            if (range.from && !range.to) {
                return format(range.from, "LLL dd, y");
            }
            if (range.from && range.to) {
                // Check if same month/year for compact formatting
                const fromMonth = format(range.from, "LLL y");
                const toMonth = format(range.to, "LLL y");
                if (fromMonth === toMonth) {
                    return `${format(range.from, "LLL dd")} - ${format(range.to, "dd, y")}`;
                }
                return `${format(range.from, "LLL dd, y")} - ${format(range.to, "LLL dd, y")}`;
            }
            return "";
        };

        return (
            <Stack ref={ref} gap="sm" className={className} role="group" aria-label="Date range picker">
                <Popover>
                    <PopoverTrigger asChild>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.1 }}
                        >
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full max-w-md justify-start text-left font-normal",
                                    !dateRange && "text-muted-foreground"
                                )}
                                disabled={disabled}
                                aria-label="Select date range"
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                                {dateRange?.from ? (
                                    <span>{formatDateRange(dateRange)}</span>
                                ) : (
                                    <span>{placeholder}</span>
                                )}
                            </Button>
                        </motion.div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={dateRange?.from}
                            selected={dateRange}
                            onSelect={handleSelect}
                            numberOfMonths={2}
                        />
                    </PopoverContent>
                </Popover>
            </Stack>
        );
    }
);

DateRangePicker.displayName = "DateRangePicker";
