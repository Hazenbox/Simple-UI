import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Form/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["text", "email", "password", "number", "tel", "url"],
        },
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter text...",
    },
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
        </Stack>
    ),
};

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Enter password",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled input",
        disabled: true,
    },
};

export const WithError: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label htmlFor="error-input">Username</Label>
            <Input
                id="error-input"
                placeholder="Enter username"
                className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-sm text-destructive">Username is required</p>
        </Stack>
    ),
};

export const Number: Story = {
    args: {
        type: "number",
        placeholder: "Enter a number",
        min: 0,
        max: 100,
    },
};
