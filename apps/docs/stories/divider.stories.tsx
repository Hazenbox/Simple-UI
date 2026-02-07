import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@acme/ui/divider";

const meta = {
    title: "UI/Layout/Divider",
    component: Divider,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["solid", "dashed"],
        },
        orientation: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
        },
    },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-[400px] space-y-3 rounded-lg border p-4">
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
        </div>
    ),
};

export const Dashed: Story = {
    render: () => (
        <div className="w-[400px] space-y-3 rounded-lg border p-4">
            <p>Content above</p>
            <Divider variant="dashed" />
            <p>Content below</p>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-[200px] w-[400px] items-center gap-3 rounded-lg border p-4">
            <p>Left</p>
            <Divider orientation="vertical" />
            <p>Right</p>
        </div>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="w-[400px] space-y-3 rounded-lg border p-4">
            <p>Section 1</p>
            <Divider label="OR" />
            <p>Section 2</p>
        </div>
    ),
};

export const DashedWithLabel: Story = {
    render: () => (
        <div className="w-[400px] space-y-3 rounded-lg border p-4">
            <p>Section 1</p>
            <Divider variant="dashed" label="OR" />
            <p>Section 2</p>
        </div>
    ),
};

export const FormSections: Story = {
    render: () => (
        <div className="w-[500px] space-y-4 rounded-lg border p-4">
            <div>
                <h3 className="mb-1.5 text-sm font-semibold">Personal Information</h3>
                <p className="text-xs text-muted-foreground">
                    Enter your personal details
                </p>
            </div>
            <Divider variant="dashed" label="Account Details" />
            <div>
                <h3 className="mb-1.5 text-sm font-semibold">Login Credentials</h3>
                <p className="text-xs text-muted-foreground">
                    Set up your account access
                </p>
            </div>
            <Divider variant="dashed" label="Preferences" />
            <div>
                <h3 className="mb-1.5 text-sm font-semibold">Notification Settings</h3>
                <p className="text-xs text-muted-foreground">
                    Configure your preferences
                </p>
            </div>
        </div>
    ),
};
