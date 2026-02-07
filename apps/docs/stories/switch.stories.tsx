import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@acme/ui/switch";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Form/Switch",
    component: Switch,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Switch>;

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
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="cursor-pointer">
                Airplane Mode
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

export const SettingsPanel: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                    <Label htmlFor="marketing" className="cursor-pointer">
                        Marketing emails
                    </Label>
                    <p className="text-sm text-muted-foreground">
                        Receive emails about new products and features.
                    </p>
                </div>
                <Switch id="marketing" />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                    <Label htmlFor="security" className="cursor-pointer">
                        Security emails
                    </Label>
                    <p className="text-sm text-muted-foreground">
                        Receive emails about your account security.
                    </p>
                </div>
                <Switch id="security" defaultChecked />
            </div>
        </Stack>
    ),
};
