import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@acme/ui/badge";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Feedback/Badge",
    component: Badge,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "secondary", "destructive", "outline"],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Badge",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Destructive",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Outline",
    },
};

export const AllVariants: Story = {
    render: () => (
        <Stack direction="row" gap="sm">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </Stack>
    ),
};

export const StatusBadges: Story = {
    render: () => (
        <Stack direction="row" gap="sm">
            <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
            <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
            <Badge variant="destructive">Error</Badge>
        </Stack>
    ),
};
