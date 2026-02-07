import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@acme/ui/checkbox";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

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
