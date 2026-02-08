import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@acme/ui/spinner";
import { Stack } from "@acme/ui/primitives/stack";
import { Label } from "@acme/ui/label";

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
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        color: {
            control: { type: "select" },
            options: ["default", "primary", "success", "warning", "info", "destructive"],
        },
        layout: {
            control: { type: "select" },
            options: ["stacked", "inline"],
        },
        label: {
            control: "text",
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ─── Basic ─── */

export const Default: Story = {
    args: {},
};

/* ─── All Sizes ─── */

export const AllSizes: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <Spinner size="xs" />
                <Label className="text-xs text-muted-foreground">xs</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner size="sm" />
                <Label className="text-xs text-muted-foreground">sm</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner size="md" />
                <Label className="text-xs text-muted-foreground">md</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner size="lg" />
                <Label className="text-xs text-muted-foreground">lg</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner size="xl" />
                <Label className="text-xs text-muted-foreground">xl</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Colors ─── */

export const Colors: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <Spinner color="default" />
                <Label className="text-xs text-muted-foreground">default</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner color="primary" />
                <Label className="text-xs text-muted-foreground">primary</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner color="success" />
                <Label className="text-xs text-muted-foreground">success</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner color="warning" />
                <Label className="text-xs text-muted-foreground">warning</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner color="info" />
                <Label className="text-xs text-muted-foreground">info</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <Spinner color="destructive" />
                <Label className="text-xs text-muted-foreground">destructive</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Inline with Label ─── */

export const InlineWithLabel: Story = {
    args: {
        label: "Loading data...",
        layout: "inline",
        size: "sm",
    },
};

/* ─── Stacked with Label ─── */

export const StackedWithLabel: Story = {
    args: {
        label: "Loading...",
        layout: "stacked",
    },
};

/* ─── Inline Variants ─── */

export const InlineVariants: Story = {
    render: () => (
        <Stack gap="md">
            <Spinner size="sm" color="primary" label="Saving changes..." layout="inline" />
            <Spinner size="sm" color="success" label="Almost done..." layout="inline" />
            <Spinner size="sm" color="info" label="Syncing data..." layout="inline" />
            <Spinner size="sm" color="warning" label="Retrying..." layout="inline" />
            <Spinner size="sm" color="destructive" label="Connection lost, reconnecting..." layout="inline" />
        </Stack>
    ),
};

/* ─── Loading State (container) ─── */

export const LoadingState: Story = {
    render: () => (
        <div className="flex h-48 w-72 items-center justify-center rounded-xl border shadow-sm">
            <Spinner size="lg" label="Fetching data..." />
        </div>
    ),
};

/* ─── Sizes with Color ─── */

export const SizesWithColor: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Spinner size="xs" color="info" />
            <Spinner size="sm" color="info" />
            <Spinner size="md" color="info" />
            <Spinner size="lg" color="info" />
            <Spinner size="xl" color="info" />
        </Stack>
    ),
};
