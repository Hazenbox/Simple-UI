import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@acme/ui/date-picker";
import { FieldWrapper } from "@acme/ui/form-field";

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
        <FieldWrapper label="Select Date">
            <DatePicker />
        </FieldWrapper>
    ),
};
