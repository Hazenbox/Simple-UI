"use client"

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "./lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";

export interface DateTimePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export const DateTimePicker = React.forwardRef<
    HTMLDivElement,
    DateTimePickerProps
>(({ value, onChange, placeholder = "Pick a date and time", disabled, className }, ref) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value);
    const [time, setTime] = React.useState<string>(
        value ? format(value, "HH:mm") : "12:00"
    );

    React.useEffect(() => {
        if (value) {
            setSelectedDate(value);
            setTime(format(value, "HH:mm"));
        }
    }, [value]);

    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            const [hours, minutes] = time.split(":");
            date.setHours(parseInt(hours), parseInt(minutes));
            setSelectedDate(date);
            onChange?.(date);
        } else {
            setSelectedDate(undefined);
            onChange?.(undefined);
        }
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = e.target.value;
        setTime(newTime);
        if (selectedDate) {
            const [hours, minutes] = newTime.split(":");
            const newDate = new Date(selectedDate);
            newDate.setHours(parseInt(hours), parseInt(minutes));
            setSelectedDate(newDate);
            onChange?.(newDate);
        } else {
            const [hours, minutes] = newTime.split(":");
            const today = new Date();
            today.setHours(parseInt(hours), parseInt(minutes));
            setSelectedDate(today);
            onChange?.(today);
        }
    };

    return (
        <div
            ref={ref}
            className={cn("flex items-center gap-2", className)}
            role="group"
            aria-label="Date and time picker"
        >
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                            "justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                        )}
                        disabled={disabled}
                        aria-label="Select date"
                    >
                        <CalendarIcon className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                        {selectedDate ? (
                            <span className="text-xs">{format(selectedDate, "PPP")}</span>
                        ) : (
                            <span className="text-xs">{placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 shadow-sm" align="start">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <div className="relative">
                <Clock
                    className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    aria-hidden="true"
                />
                <Input
                    type="time"
                    value={time}
                    onChange={handleTimeChange}
                    inputSize="sm"
                    className="w-28 pl-8 pr-7 text-xs"
                    disabled={disabled}
                    aria-label="Select time"
                />
                <Clock
                    className="absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    aria-hidden="true"
                />
            </div>
        </div>
    );
});

DateTimePicker.displayName = "DateTimePicker";
