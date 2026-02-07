import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@acme/ui/slider";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Form/Slider",
    component: Slider,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
        className: "w-80",
    },
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label>Volume</Label>
            <Slider defaultValue={[75]} max={100} step={1} />
        </Stack>
    ),
};

export const Range: Story = {
    args: {
        defaultValue: [25, 75],
        max: 100,
        step: 1,
        className: "w-80",
    },
};

export const StepIncrements: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label>Price Range (steps of 10)</Label>
            <Slider defaultValue={[50]} max={100} step={10} />
        </Stack>
    ),
};

export const Disabled: Story = {
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
        disabled: true,
        className: "w-80",
    },
};

export const VolumeControl: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="volume">Volume</Label>
                    <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Slider id="volume" defaultValue={[75]} max={100} step={1} />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="brightness">Brightness</Label>
                    <span className="text-sm text-muted-foreground">50%</span>
                </div>
                <Slider id="brightness" defaultValue={[50]} max={100} step={1} />
            </div>
        </Stack>
    ),
};
