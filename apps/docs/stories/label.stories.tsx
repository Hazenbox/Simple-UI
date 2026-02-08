import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@acme/ui/label";
import { Input } from "@acme/ui/input";
import { Stack } from "@acme/ui/primitives/stack";
import { FormField } from "@acme/ui/form-field";

const meta = {
    title: "UI/Form/Label",
    component: Label,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Stack gap="sm">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" />
        </Stack>
    ),
};

export const Required: Story = {
    render: () => (
        <Stack gap="sm">
            <Label htmlFor="username">
                Username <span className="text-destructive">*</span>
            </Label>
            <Input id="username" placeholder="Enter your username" required />
        </Stack>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Stack gap="sm">
            <Label htmlFor="disabled" className="opacity-50">
                Disabled Field
            </Label>
            <Input id="disabled" placeholder="Cannot edit" disabled />
        </Stack>
    ),
};

export const WithFormField: Story = {
    render: () => (
        <FormField label="Email" required helperText="We'll never share your email">
            <Input placeholder="Enter your email" />
        </FormField>
    ),
};
