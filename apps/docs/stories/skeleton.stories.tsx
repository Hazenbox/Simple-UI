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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "h-4 w-[250px]",
    },
};

export const TextLine: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </Stack>
    ),
};

export const Avatar: Story = {
    render: () => (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    ),
};

export const Card: Story = {
    render: () => (
        <div className="w-80 rounded-lg border p-4">
            <Stack gap="md">
                <Skeleton className="h-48 w-full rounded-md" />
                <Stack gap="sm">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </Stack>
            </Stack>
        </div>
    ),
};

export const TableRow: Story = {
    render: () => (
        <div className="w-full max-w-2xl space-y-2">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </div>
            ))}
        </div>
    ),
};
