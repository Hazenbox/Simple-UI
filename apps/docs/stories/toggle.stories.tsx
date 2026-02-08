import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@acme/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@acme/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

const meta = {
    title: "UI/Form/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
        </Toggle>
    ),
};

export const WithText: Story = {
    render: () => (
        <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4 mr-2" />
            Italic
        </Toggle>
    ),
};

export const Outline: Story = {
    render: () => (
        <Toggle variant="outline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
        </Toggle>
    ),
};

export const Small: Story = {
    render: () => (
        <Toggle size="sm" aria-label="Toggle bold">
            <Bold className="h-3 w-3" />
        </Toggle>
    ),
};

export const Large: Story = {
    render: () => (
        <Toggle size="lg" aria-label="Toggle bold">
            <Bold className="h-5 w-5" />
        </Toggle>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Toggle disabled aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
        </Toggle>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Toggle size="sm" aria-label="Small">
                <Bold className="h-3 w-3" />
            </Toggle>
            <Toggle size="default" aria-label="Default">
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle size="lg" aria-label="Large">
                <Bold className="h-5 w-5" />
            </Toggle>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Toggle variant="default" aria-label="Default variant">
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle variant="outline" aria-label="Outline variant">
                <Bold className="h-4 w-4" />
            </Toggle>
        </div>
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
        <ToggleGroup type="multiple" shape="circle">
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

export const BoldEmphasis: Story = {
    render: () => (
        <Toggle variant="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
        </Toggle>
    ),
};

export const SubtleEmphasis: Story = {
    render: () => (
        <Toggle variant="subtle" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
        </Toggle>
    ),
};

export const AllShapes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <ToggleGroup type="multiple" shape="default">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup type="multiple" shape="square">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup type="multiple" shape="circle">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    ),
};
