import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@acme/ui/spinner";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Feedback/Spinner",
    component: Spinner,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Small: Story = {
    args: {
        size: "sm",
    },
};

export const Medium: Story = {
    args: {
        size: "md",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
    },
};

export const AllSizes: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </Stack>
    ),
};

export const WithText: Story = {
    render: () => (
        <Stack gap="md" align="center">
            <Spinner />
            <p className="text-sm text-muted-foreground">Loading...</p>
        </Stack>
    ),
};

export const LoadingState: Story = {
    render: () => (
        <div className="flex h-64 w-80 items-center justify-center rounded-lg border">
            <Stack gap="md" align="center">
                <Spinner size="lg" />
                <p className="text-sm text-muted-foreground">Fetching data...</p>
            </Stack>
        </div>
    ),
};
