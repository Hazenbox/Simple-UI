import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@acme/ui/circular-progress";
import { Stack } from "@acme/ui/primitives/stack";
import { Label } from "@acme/ui/label";
import { Check, X, AlertCircle, Info, Loader } from "lucide-react";

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
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        color: {
            control: { type: "select" },
            options: ["primary", "success", "warning", "info", "destructive"],
        },
        strokeVariant: {
            control: { type: "select" },
            options: ["thin", "default", "thick", "bold"],
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

/* ─── Basic ─── */

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
        size: "lg",
    },
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        size: "md",
    },
};

/* ─── Sizes ─── */

export const AllSizes: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <CircularProgress value={60} size="xs" />
                <Label className="text-xs text-muted-foreground">xs</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={60} size="sm" />
                <Label className="text-xs text-muted-foreground">sm</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={60} size="md" showValue />
                <Label className="text-xs text-muted-foreground">md</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={60} size="lg" showValue />
                <Label className="text-xs text-muted-foreground">lg</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={60} size="xl" showValue />
                <Label className="text-xs text-muted-foreground">xl</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Thickness ─── */

export const Thickness: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <CircularProgress value={65} size="lg" strokeVariant="thin" showValue />
                <Label className="text-xs text-muted-foreground">thin</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={65} size="lg" strokeVariant="default" showValue />
                <Label className="text-xs text-muted-foreground">default</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={65} size="lg" strokeVariant="thick" showValue />
                <Label className="text-xs text-muted-foreground">thick</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={65} size="lg" strokeVariant="bold" showValue />
                <Label className="text-xs text-muted-foreground">bold</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Colors ─── */

export const Colors: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <CircularProgress value={70} size="lg" color="primary" showValue />
                <Label className="text-xs text-muted-foreground">primary</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={70} size="lg" color="success" showValue />
                <Label className="text-xs text-muted-foreground">success</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={70} size="lg" color="warning" showValue />
                <Label className="text-xs text-muted-foreground">warning</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={70} size="lg" color="info" showValue />
                <Label className="text-xs text-muted-foreground">info</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={70} size="lg" color="destructive" showValue />
                <Label className="text-xs text-muted-foreground">destructive</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── With Icons ─── */

export const WithIcon: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <CircularProgress
                    value={100}
                    size="lg"
                    color="success"
                    strokeVariant="thick"
                    icon={<Check className="h-5 w-5 text-success" />}
                />
                <Label className="text-xs text-muted-foreground">Complete</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress
                    value={100}
                    size="lg"
                    color="destructive"
                    strokeVariant="thick"
                    icon={<X className="h-5 w-5 text-destructive" />}
                />
                <Label className="text-xs text-muted-foreground">Error</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress
                    value={50}
                    size="lg"
                    color="warning"
                    strokeVariant="thick"
                    icon={<AlertCircle className="h-5 w-5 text-warning" />}
                />
                <Label className="text-xs text-muted-foreground">Warning</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress
                    value={60}
                    size="lg"
                    color="info"
                    strokeVariant="thick"
                    icon={<Info className="h-5 w-5 text-info" />}
                />
                <Label className="text-xs text-muted-foreground">Info</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Indeterminate Colors ─── */

export const IndeterminateColors: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <CircularProgress indeterminate size="md" color="primary" />
                <Label className="text-xs text-muted-foreground">primary</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress indeterminate size="md" color="success" />
                <Label className="text-xs text-muted-foreground">success</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress indeterminate size="md" color="warning" />
                <Label className="text-xs text-muted-foreground">warning</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress indeterminate size="md" color="info" />
                <Label className="text-xs text-muted-foreground">info</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress indeterminate size="md" color="destructive" />
                <Label className="text-xs text-muted-foreground">destructive</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Different Values ─── */

export const DifferentValues: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <Stack gap="xs" align="center">
                <CircularProgress value={25} showValue size="lg" />
                <Label className="text-xs text-muted-foreground">25%</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={50} showValue size="lg" />
                <Label className="text-xs text-muted-foreground">50%</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={75} showValue size="lg" />
                <Label className="text-xs text-muted-foreground">75%</Label>
            </Stack>
            <Stack gap="xs" align="center">
                <CircularProgress value={100} showValue size="lg" color="success" />
                <Label className="text-xs text-muted-foreground">100%</Label>
            </Stack>
        </Stack>
    ),
};

/* ─── Thickness × Color ─── */

export const ThicknessWithColors: Story = {
    render: () => (
        <Stack direction="row" gap="lg" align="center">
            <CircularProgress value={80} size="xl" strokeVariant="thin" color="info" showValue />
            <CircularProgress value={60} size="xl" strokeVariant="default" color="success" showValue />
            <CircularProgress value={40} size="xl" strokeVariant="thick" color="warning" showValue />
            <CircularProgress value={20} size="xl" strokeVariant="bold" color="destructive" showValue />
        </Stack>
    ),
};
