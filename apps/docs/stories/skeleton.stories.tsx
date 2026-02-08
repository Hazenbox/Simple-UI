import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@acme/ui/skeleton";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Feedback/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["line", "heading", "circle", "rect"],
        },
        animation: {
            control: { type: "select" },
            options: ["pulse", "shimmer"],
        },
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ─── Basic ─── */

export const Default: Story = {
    args: {
        className: "w-64",
    },
};

/* ─── Variants ─── */

export const Variants: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="xs">
                <p className="text-xs text-muted-foreground">line</p>
                <Skeleton variant="line" className="w-full" />
            </Stack>
            <Stack gap="xs">
                <p className="text-xs text-muted-foreground">heading</p>
                <Skeleton variant="heading" className="w-3/4" />
            </Stack>
            <Stack gap="xs">
                <p className="text-xs text-muted-foreground">circle</p>
                <Skeleton variant="circle" className="h-10 w-10" />
            </Stack>
            <Stack gap="xs">
                <p className="text-xs text-muted-foreground">rect</p>
                <Skeleton variant="rect" className="h-32 w-full" />
            </Stack>
        </Stack>
    ),
};

/* ─── Text Lines (compact spacing) ─── */

export const TextLine: Story = {
    render: () => (
        <Stack gap="xs" className="w-80">
            <Skeleton variant="line" className="w-full" />
            <Skeleton variant="line" className="w-full" />
            <Skeleton variant="line" className="w-3/4" />
        </Stack>
    ),
};

/* ─── Paragraph (natural width variation) ─── */

export const Paragraph: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Skeleton variant="heading" className="w-2/3" />
            <Stack gap="xs" className="w-full">
                <Skeleton variant="line" className="w-full" />
                <Skeleton variant="line" className="w-full" />
                <Skeleton variant="line" className="w-11/12" />
                <Skeleton variant="line" className="w-4/5" />
                <Skeleton variant="line" className="w-3/5" />
            </Stack>
        </Stack>
    ),
};

/* ─── Avatar ─── */

export const Avatar: Story = {
    render: () => (
        <div className="flex items-center gap-space-sm">
            <Skeleton variant="circle" className="h-10 w-10" />
            <Stack gap="xs" className="flex-1">
                <Skeleton variant="line" className="w-3/4" />
                <Skeleton variant="line" className="w-1/2" />
            </Stack>
        </div>
    ),
};

/* ─── Card (compact, correct radii) ─── */

export const Card: Story = {
    render: () => (
        <div className="w-72 rounded-xl border p-3 shadow-sm">
            <Stack gap="sm">
                <Skeleton variant="rect" className="h-36 w-full" />
                <Stack gap="xs">
                    <Skeleton variant="heading" className="w-3/4" />
                    <Skeleton variant="line" className="w-full" />
                    <Skeleton variant="line" className="w-2/3" />
                </Stack>
            </Stack>
        </div>
    ),
};

/* ─── Shimmer Animation ─── */

export const ShimmerAnimation: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="xs">
                <Skeleton variant="line" animation="shimmer" className="w-full" />
                <Skeleton variant="line" animation="shimmer" className="w-full" />
                <Skeleton variant="line" animation="shimmer" className="w-3/4" />
            </Stack>
        </Stack>
    ),
};

/* ─── Shimmer Card ─── */

export const ShimmerCard: Story = {
    render: () => (
        <div className="w-72 rounded-xl border p-3 shadow-sm">
            <Stack gap="sm">
                <Skeleton variant="rect" animation="shimmer" className="h-36 w-full" />
                <Stack gap="xs">
                    <Skeleton variant="heading" animation="shimmer" className="w-3/4" />
                    <Skeleton variant="line" animation="shimmer" className="w-full" />
                    <Skeleton variant="line" animation="shimmer" className="w-2/3" />
                </Stack>
            </Stack>
        </div>
    ),
};

/* ─── Table Row ─── */

export const TableRow: Story = {
    render: () => (
        <div className="w-full max-w-lg">
            <Stack gap="sm">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-space-sm">
                        <Skeleton variant="circle" className="h-8 w-8" />
                        <Stack gap="xs" className="flex-1">
                            <Skeleton variant="line" className="w-full" />
                            <Skeleton variant="line" className="w-3/4" />
                        </Stack>
                    </div>
                ))}
            </Stack>
        </div>
    ),
};

/* ─── Side-by-side: Pulse vs Shimmer ─── */

export const AnimationComparison: Story = {
    render: () => (
        <div className="flex gap-space-xl">
            <Stack gap="sm" className="w-64">
                <p className="text-xs font-medium text-muted-foreground">Pulse</p>
                <Stack gap="xs">
                    <Skeleton variant="heading" animation="pulse" className="w-3/4" />
                    <Skeleton variant="line" animation="pulse" className="w-full" />
                    <Skeleton variant="line" animation="pulse" className="w-full" />
                    <Skeleton variant="line" animation="pulse" className="w-2/3" />
                </Stack>
            </Stack>
            <Stack gap="sm" className="w-64">
                <p className="text-xs font-medium text-muted-foreground">Shimmer</p>
                <Stack gap="xs">
                    <Skeleton variant="heading" animation="shimmer" className="w-3/4" />
                    <Skeleton variant="line" animation="shimmer" className="w-full" />
                    <Skeleton variant="line" animation="shimmer" className="w-full" />
                    <Skeleton variant="line" animation="shimmer" className="w-2/3" />
                </Stack>
            </Stack>
        </div>
    ),
};
