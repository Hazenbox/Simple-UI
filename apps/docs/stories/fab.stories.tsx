import type { Meta, StoryObj } from "@storybook/react";
import { FAB } from "@acme/ui/fab";
import { Plus, Edit, Share } from "lucide-react";

const meta = {
    title: "UI/Mobile/FAB",
    component: FAB,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof FAB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex h-[300px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <FAB icon={<Plus className="h-6 w-6" />} />
        </div>
    ),
};

export const Small: Story = {
    render: () => (
        <div className="flex h-[300px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <FAB size="sm" icon={<Edit className="h-4 w-4" />} />
        </div>
    ),
};

export const Large: Story = {
    render: () => (
        <div className="flex h-[300px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <FAB size="lg" icon={<Plus className="h-8 w-8" />} />
        </div>
    ),
};

export const Extended: Story = {
    render: () => (
        <div className="flex h-[300px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <FAB size="extended" icon={<Plus className="h-5 w-5" />} label="Create" />
        </div>
    ),
};

export const Secondary: Story = {
    render: () => (
        <div className="flex h-[300px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <FAB variant="secondary" icon={<Share className="h-6 w-6" />} />
        </div>
    ),
};

export const Outline: Story = {
    render: () => (
        <div className="flex h-[300px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <FAB variant="outline" icon={<Edit className="h-6 w-6" />} />
        </div>
    ),
};
