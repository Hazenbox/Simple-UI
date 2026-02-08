import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@acme/ui/textarea";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";
import { FormField } from "@acme/ui/form-field";

const meta = {
    title: "UI/Form/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg"],
        },
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Type your message here...",
        className: "w-80",
    },
};

export const WithLabel: Story = {
    render: () => (
        <FormField label="Bio" className="w-80">
            <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                rows={4}
            />
        </FormField>
    ),
};

export const Sizes: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Textarea size="sm" placeholder="Small" rows={2} />
            <Textarea size="default" placeholder="Default" rows={2} />
            <Textarea size="lg" placeholder="Large" rows={2} />
        </Stack>
    ),
};

export const Resizable: Story = {
    args: {
        placeholder: "This textarea can be resized",
        className: "w-80 resize",
        rows: 3,
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled textarea",
        disabled: true,
        className: "w-80",
    },
};

export const WithError: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label htmlFor="description">Description</Label>
            <Textarea
                id="description"
                placeholder="Enter description"
                className="border-destructive focus-visible:ring-destructive"
                rows={4}
            />
            <p className="text-xs text-destructive">Description must be at least 10 characters</p>
        </Stack>
    ),
};

export const WithFormField: Story = {
    render: () => (
        <FormField label="Bio" helperText="Max 500 characters" className="w-80">
            <Textarea placeholder="Tell us about yourself" rows={4} />
        </FormField>
    ),
};

export const WithErrorField: Story = {
    render: () => (
        <FormField label="Description" error="Required" className="w-80">
            <Textarea placeholder="Enter description" rows={4} />
        </FormField>
    ),
};
