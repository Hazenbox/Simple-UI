import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@acme/ui/slider";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";
import { FieldWrapper } from "@acme/ui/form-field";
import { Button } from "@acme/ui/button";
import { Minus, Plus, Volume2 } from "lucide-react";

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

export const AllSizes: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Small</Label>
                <Slider defaultValue={[50]} max={100} step={1} size="sm" />
            </Stack>
            <Stack gap="sm">
                <Label>Default</Label>
                <Slider defaultValue={[50]} max={100} step={1} size="default" />
            </Stack>
            <Stack gap="sm">
                <Label>Large</Label>
                <Slider defaultValue={[50]} max={100} step={1} size="lg" />
            </Stack>
        </Stack>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <div className="flex w-80 items-center gap-3">
            <Volume2 className="h-4 w-4 shrink-0 text-muted-foreground" />
            <Slider defaultValue={[65]} max={100} step={1} />
        </div>
    ),
};

export const WithStepper: Story = {
    render: () => (
        <div className="flex w-80 items-center gap-2">
            <Button variant="outline" size="icon" aria-label="Decrease">
                <Minus className="h-4 w-4" />
            </Button>
            <Slider defaultValue={[50]} max={100} step={1} />
            <Button variant="outline" size="icon" aria-label="Increase">
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    ),
};

export const StackedGroup: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <FieldWrapper label="Volume">
                <Slider defaultValue={[75]} max={100} step={1} />
            </FieldWrapper>
            <FieldWrapper label="Bass">
                <Slider defaultValue={[60]} max={100} step={1} />
            </FieldWrapper>
            <FieldWrapper label="Treble">
                <Slider defaultValue={[45]} max={100} step={1} />
            </FieldWrapper>
        </Stack>
    ),
};
