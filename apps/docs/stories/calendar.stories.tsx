import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@acme/ui/calendar";
import React from "react";

const meta = {
    title: "UI/Specialized/Calendar",
    component: Calendar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = React.useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        );
    },
};

export const Range: Story = {
    render: () => {
        const [date, setDate] = React.useState<{ from: Date; to?: Date }>({
            from: new Date(),
            to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        return (
            <Calendar
                mode="range"
                selected={date}
                onSelect={setDate as any}
                className="rounded-md border"
            />
        );
    },
};

export const Multiple: Story = {
    render: () => {
        const [dates, setDates] = React.useState<Date[]>([new Date()]);
        return (
            <Calendar
                mode="multiple"
                selected={dates}
                onSelect={setDates as any}
                className="rounded-md border"
            />
        );
    },
};
