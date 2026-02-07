"use client"

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";
import { Stack } from "./primitives/stack";

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
            // If no date selected, create a new date with today's date and selected time
            const [hours, minutes] = newTime.split(":");
            const today = new Date();
            today.setHours(parseInt(hours), parseInt(minutes));
            setSelectedDate(today);
            onChange?.(today);
        }
    };

    return (
        <Stack
            ref={ref}
            direction="row"
            gap="sm"
            align="center"
            className={className}
            role="group"
            aria-label="Date and time picker"
        >
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "w-full max-w-sm justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                        )}
                        disabled={disabled}
                        aria-label="Select date"
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <motion.div
                className="relative"
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                <Clock 
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                    aria-hidden="true"
                />
                <Input
                    type="time"
                    value={time}
                    onChange={handleTimeChange}
                    className="w-36 pl-9"
                    disabled={disabled}
                    aria-label="Select time"
                />
            </motion.div>
        </Stack>
    );
});

DateTimePicker.displayName = "DateTimePicker";
