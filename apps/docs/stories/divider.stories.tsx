import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@acme/ui/divider";

const meta = {
    title: "UI/Layout/Divider",
    component: Divider,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-[400px] space-y-4 rounded-lg border p-6">
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-[200px] w-[400px] items-center gap-4 rounded-lg border p-6">
            <p>Left</p>
            <Divider orientation="vertical" />
            <p>Right</p>
        </div>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="w-[400px] space-y-4 rounded-lg border p-6">
            <p>Section 1</p>
            <Divider label="OR" />
            <p>Section 2</p>
        </div>
    ),
};

export const FormSections: Story = {
    render: () => (
        <div className="w-[500px] space-y-6 rounded-lg border p-6">
            <div>
                <h3 className="mb-2 font-semibold">Personal Information</h3>
                <p className="text-sm text-muted-foreground">
                    Enter your personal details
                </p>
            </div>
            <Divider label="Account Details" />
            <div>
                <h3 className="mb-2 font-semibold">Login Credentials</h3>
                <p className="text-sm text-muted-foreground">
                    Set up your account access
                </p>
            </div>
            <Divider label="Preferences" />
            <div>
                <h3 className="mb-2 font-semibold">Notification Settings</h3>
                <p className="text-sm text-muted-foreground">
                    Configure your preferences
                </p>
            </div>
        </div>
    ),
};
