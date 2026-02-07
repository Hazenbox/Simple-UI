import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@acme/ui/circular-progress";
import { Stack } from "@acme/ui/primitives/stack";
import { Label } from "@acme/ui/label";

const meta = {
    title: "UI/Feedback/Circular Progress",
    component: CircularProgress,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl"],
        },
        value: {
            control: { type: "range", min: 0, max: 100, step: 1 },
        },
        showValue: {
            control: "boolean",
        },
        indeterminate: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 60,
        size: "md",
    },
};

export const WithValue: Story = {
    args: {
        value: 75,
        showValue: true,
        size: "md",
    },
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        size: "md",
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack gap="lg" align="center">
            <Stack gap="sm" align="center">
                <Label>Small</Label>
                <CircularProgress value={60} size="sm" />
            </Stack>
            <Stack gap="sm" align="center">
                <Label>Medium</Label>
                <CircularProgress value={60} size="md" showValue />
            </Stack>
            <Stack gap="sm" align="center">
                <Label>Large</Label>
                <CircularProgress value={60} size="lg" showValue />
            </Stack>
            <Stack gap="sm" align="center">
                <Label>Extra Large</Label>
                <CircularProgress value={60} size="xl" showValue />
            </Stack>
        </Stack>
    ),
};

export const DifferentValues: Story = {
    render: () => (
        <Stack gap="lg" direction="row" align="center">
            <Stack gap="sm" align="center">
                <CircularProgress value={25} showValue />
                <Label className="text-xs">25%</Label>
            </Stack>
            <Stack gap="sm" align="center">
                <CircularProgress value={50} showValue />
                <Label className="text-xs">50%</Label>
            </Stack>
            <Stack gap="sm" align="center">
                <CircularProgress value={75} showValue />
                <Label className="text-xs">75%</Label>
            </Stack>
            <Stack gap="sm" align="center">
                <CircularProgress value={100} showValue />
                <Label className="text-xs">100%</Label>
            </Stack>
        </Stack>
    ),
};
