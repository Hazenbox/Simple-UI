import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxCard } from "@acme/ui/checkbox";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";
import { FieldWrapper } from "@acme/ui/form-field";

const meta = {
    title: "UI/Form/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Checked: Story = {
    args: {
        defaultChecked: true,
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
                Accept terms and conditions
            </Label>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        disabled: true,
        defaultChecked: true,
    },
};

export const Multiple: Story = {
    render: () => (
        <Stack gap="md">
            <div className="flex items-center space-x-2">
                <Checkbox id="option1" defaultChecked />
                <Label htmlFor="option1" className="cursor-pointer">
                    Option 1
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="option2" />
                <Label htmlFor="option2" className="cursor-pointer">
                    Option 2
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="option3" disabled />
                <Label htmlFor="option3" className="cursor-pointer opacity-50">
                    Option 3 (disabled)
                </Label>
            </div>
        </Stack>
    ),
};

export const ErrorState: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="error-checkbox" error={true} />
            <Label htmlFor="error-checkbox" className="cursor-pointer">
                Accept terms and conditions
            </Label>
        </div>
    ),
};

export const Loading: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="loading-checkbox" loading={true} />
            <Label htmlFor="loading-checkbox" className="cursor-pointer">
                Loading checkbox
            </Label>
        </div>
    ),
};

export const WithTitleDescription: Story = {
    render: () => (
        <CheckboxCard
            title="Email notifications"
            description="Receive email about account activity"
        />
    ),
};

export const CardGroup: Story = {
    render: () => (
        <Stack gap="md">
            <CheckboxCard
                title="Email notifications"
                description="Receive email about account activity"
            />
            <CheckboxCard
                title="Push notifications"
                description="Receive push notifications on your device"
            />
            <CheckboxCard
                title="SMS notifications"
                description="Receive text messages for important updates"
            />
        </Stack>
    ),
};

export const ConsistentSpacing: Story = {
    render: () => (
        <Stack gap="sm">
            <div className="flex items-center space-x-2">
                <Checkbox id="spacing1" defaultChecked />
                <Label htmlFor="spacing1" className="cursor-pointer">
                    First option
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="spacing2" />
                <Label htmlFor="spacing2" className="cursor-pointer">
                    Second option
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="spacing3" />
                <Label htmlFor="spacing3" className="cursor-pointer">
                    Third option
                </Label>
            </div>
        </Stack>
    ),
};
