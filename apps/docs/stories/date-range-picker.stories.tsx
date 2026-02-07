import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "@acme/ui/date-range-picker";
import { Stack } from "@acme/ui/primitives/stack";
import * as React from "react";
import { DateRange } from "react-day-picker";

const meta = {
    title: "UI/Form/Date Range Picker",
    component: DateRangePicker,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Pick a date range",
    },
};

export const WithValue: Story = {
    args: {
        value: {
            from: new Date(),
            to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Disabled picker",
    },
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = React.useState<DateRange | undefined>({
            from: new Date(),
            to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        return (
            <Stack gap="md" className="w-96">
                <DateRangePicker value={value} onChange={setValue} />
                {value?.from && (
                    <p className="text-sm text-muted-foreground">
                        From: {value.from.toLocaleDateString()}
                        {value.to && ` - To: ${value.to.toLocaleDateString()}`}
                    </p>
                )}
            </Stack>
        );
    },
};
