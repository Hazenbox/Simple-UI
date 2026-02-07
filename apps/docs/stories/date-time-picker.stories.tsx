import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { DateTimePicker } from "@acme/ui/date-time-picker";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Form/Date Time Picker",
    component: DateTimePicker,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Pick a date and time",
    },
};

export const WithValue: Story = {
    args: {
        value: new Date(),
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
        const [value, setValue] = React.useState<Date | undefined>(new Date());
        return (
            <Stack gap="md" className="w-96">
                <DateTimePicker value={value} onChange={setValue} />
                {value && (
                    <p className="text-sm text-muted-foreground">
                        Selected: {value.toLocaleString()}
                    </p>
                )}
            </Stack>
        );
    },
};
