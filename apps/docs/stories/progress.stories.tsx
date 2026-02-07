import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@acme/ui/progress";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Feedback/Progress",
    component: Progress,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 60,
        className: "w-80",
    },
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <div className="flex items-center justify-between">
                <Label>Progress</Label>
                <span className="text-sm text-muted-foreground">60%</span>
            </div>
            <Progress value={60} />
        </Stack>
    ),
};

export const DifferentValues: Story = {
    render: () => (
        <Stack gap="lg" className="w-80">
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>25%</span>
                </div>
                <Progress value={25} />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>50%</span>
                </div>
                <Progress value={50} />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>75%</span>
                </div>
                <Progress value={75} />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>100%</span>
                </div>
                <Progress value={100} />
            </div>
        </Stack>
    ),
};

export const TaskProgress: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label>Uploading files</Label>
                    <span className="text-sm text-muted-foreground">3 of 10</span>
                </div>
                <Progress value={30} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label>Processing images</Label>
                    <span className="text-sm text-muted-foreground">7 of 10</span>
                </div>
                <Progress value={70} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label>Generating thumbnails</Label>
                    <span className="text-sm text-muted-foreground">10 of 10</span>
                </div>
                <Progress value={100} />
            </div>
        </Stack>
    ),
};
