import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@acme/ui/date-picker";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Specialized/DatePicker",
    component: DatePicker,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <DatePicker />,
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label>Select Date</Label>
            <DatePicker />
        </Stack>
    ),
};
