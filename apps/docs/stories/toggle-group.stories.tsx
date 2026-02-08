import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@acme/ui/toggle-group";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

const meta = {
    title: "UI/Form/Toggle Group",
    component: ToggleGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Single: Story = {
    render: () => (
        <ToggleGroup type="single">
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Outline: Story = {
    render: () => (
        <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Small: Story = {
    render: () => (
        <ToggleGroup type="multiple" size="sm">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-3 w-3" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-3 w-3" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-3 w-3" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Large: Story = {
    render: () => (
        <ToggleGroup type="multiple" size="lg">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-5 w-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-5 w-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-5 w-5" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Disabled: Story = {
    render: () => (
        <ToggleGroup type="multiple" disabled>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const SquareShape: Story = {
    render: () => (
        <ToggleGroup type="multiple" shape="square">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const CircleShape: Story = {
    render: () => (
        <ToggleGroup type="single" shape="circle">
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const BoldVariant: Story = {
    render: () => (
        <ToggleGroup type="multiple" variant="bold">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};
