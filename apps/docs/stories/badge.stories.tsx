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
            options: ["default", "secondary", "destructive", "outline", "soft", "success", "warning", "info"],
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

export const Soft: Story = {
    args: {
        variant: "soft",
        children: "Soft",
    },
};

export const Success: Story = {
    args: {
        variant: "success",
        children: "Healthy",
    },
};

export const Warning: Story = {
    args: {
        variant: "warning",
        children: "Expiring",
    },
};

export const Info: Story = {
    args: {
        variant: "info",
        children: "In Progress",
    },
};

export const AllVariants: Story = {
    render: () => (
        <Stack direction="row" gap="sm" className="flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="soft">Soft</Badge>
        </Stack>
    ),
};

export const StatusBadges: Story = {
    render: () => (
        <Stack direction="row" gap="sm">
            <Badge variant="success">Healthy</Badge>
            <Badge variant="warning">Expiring</Badge>
            <Badge variant="info">In Progress</Badge>
            <Badge variant="destructive">Error</Badge>
        </Stack>
    ),
};

export const DashboardMetrics: Story = {
    render: () => (
        <Stack direction="row" gap="sm">
            <Badge variant="success">+25%</Badge>
            <Badge variant="destructive">-1.4%</Badge>
            <Badge variant="info">On track</Badge>
            <Badge variant="warning">At risk</Badge>
        </Stack>
    ),
};
