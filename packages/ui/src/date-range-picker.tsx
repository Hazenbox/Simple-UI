"use client"

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "./lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

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
            <div ref={ref} className={cn("grid gap-1.5", className)} role="group" aria-label="Date range picker">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !dateRange && "text-muted-foreground"
                            )}
                            disabled={disabled}
                            aria-label="Select date range"
                        >
                            <CalendarIcon className="mr-1.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            {dateRange?.from ? (
                                <span className="text-xs truncate">{formatDateRange(dateRange)}</span>
                            ) : (
                                <span className="text-xs">{placeholder}</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 shadow-sm" align="start">
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
            </div>
        );
    }
);

DateRangePicker.displayName = "DateRangePicker";
