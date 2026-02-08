import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@acme/ui/switch";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";
import { FormField } from "@acme/ui/form-field";

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
        size: {
            control: "select",
            options: ["xs", "sm", "default", "lg"],
        },
        colorScheme: {
            control: "select",
            options: ["default", "success", "warning", "destructive", "info"],
        },
        loading: {
            control: "boolean",
        },
        error: {
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

export const ExtraSmall: Story = {
    args: {
        size: "xs",
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Switch size="xs" defaultChecked />
                <Label className="text-xs">xs</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch size="sm" defaultChecked />
                <Label className="text-xs">sm</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch size="default" defaultChecked />
                <Label className="text-xs">default</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch size="lg" defaultChecked />
                <Label className="text-xs">lg</Label>
            </div>
        </div>
    ),
};

export const ColorVariants: Story = {
    render: () => (
        <Stack gap="sm">
            <div className="flex items-center gap-2">
                <Switch colorScheme="default" defaultChecked />
                <Label className="text-sm">default</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch colorScheme="success" defaultChecked />
                <Label className="text-sm">success</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch colorScheme="warning" defaultChecked />
                <Label className="text-sm">warning</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch colorScheme="destructive" defaultChecked />
                <Label className="text-sm">destructive</Label>
            </div>
            <div className="flex items-center gap-2">
                <Switch colorScheme="info" defaultChecked />
                <Label className="text-sm">info</Label>
            </div>
        </Stack>
    ),
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const Error: Story = {
    args: {
        error: true,
    },
};

export const StackedGroup: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <div className="rounded-xl border p-3">
                <Stack gap="md">
                    <FormField
                        label="Push notifications"
                        helperText="Receive push notifications on your device."
                    >
                        <Switch id="push-notif" defaultChecked />
                    </FormField>
                    <FormField
                        label="Email digest"
                        helperText="Get a weekly summary of activity."
                    >
                        <Switch id="email-digest" />
                    </FormField>
                    <FormField
                        label="SMS alerts"
                        helperText="Receive critical alerts via text message."
                    >
                        <Switch id="sms-alerts" />
                    </FormField>
                </Stack>
            </div>
        </Stack>
    ),
};
