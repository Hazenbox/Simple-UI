import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@acme/ui/input";
import {
    InputWithIcon,
    FloatingLabelInput,
    InputWithSlot,
    InputWithValidation,
} from "@acme/ui/input-enhanced";
import { FormField } from "@acme/ui/form-field";
import { Label } from "@acme/ui/label";
import { Switch } from "@acme/ui/switch";
import { Stack } from "@acme/ui/primitives/stack";
import { Search, Mail } from "lucide-react";

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
        inputSize: {
            control: { type: "select" },
            options: ["default", "sm", "lg"],
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

export const Sizes: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Input inputSize="sm" placeholder="Small (28px)" />
            <Input inputSize="default" placeholder="Default (32px)" />
            <Input inputSize="lg" placeholder="Large (36px)" />
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
            <p className="text-xs text-destructive">Username is required</p>
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

export const WithLeftIcon: Story = {
    render: () => (
        <div className="w-80">
            <InputWithIcon
                icon={<Search className="h-3.5 w-3.5" />}
                placeholder="Search..."
            />
        </div>
    ),
};

export const WithRightIcon: Story = {
    render: () => (
        <div className="w-80">
            <InputWithIcon
                iconPosition="right"
                icon={<Mail className="h-3.5 w-3.5" />}
                placeholder="Enter email..."
            />
        </div>
    ),
};

export const FloatingLabel: Story = {
    render: () => (
        <div className="w-80">
            <FloatingLabelInput label="Email address" />
        </div>
    ),
};

export const FloatingLabelError: Story = {
    render: () => (
        <div className="w-80">
            <FloatingLabelInput label="Email" error={true} />
        </div>
    ),
};

export const WithSlot: Story = {
    render: () => (
        <div className="w-80">
            <InputWithSlot slot={<Switch />} placeholder="Feature flag" />
        </div>
    ),
};

export const ValidationLoading: Story = {
    render: () => (
        <div className="w-80">
            <InputWithValidation loading={true} placeholder="Checking..." />
        </div>
    ),
};

export const ValidationSuccess: Story = {
    render: () => (
        <div className="w-80">
            <InputWithValidation valid={true} defaultValue="john_doe" />
        </div>
    ),
};

export const WithFormField: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Username" required error="Username is required">
                <Input placeholder="Enter username" />
            </FormField>
        </div>
    ),
};
