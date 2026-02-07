import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@acme/ui/chip";
import { useState } from "react";

const meta = {
    title: "UI/Display/Chip",
    component: Chip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Chip>React</Chip>,
};

export const Secondary: Story = {
    render: () => <Chip variant="secondary">TypeScript</Chip>,
};

export const Outline: Story = {
    render: () => <Chip variant="outline">Tailwind CSS</Chip>,
};

export const Destructive: Story = {
    render: () => <Chip variant="destructive">Error</Chip>,
};

export const WithDelete: Story = {
    render: () => {
        const [visible, setVisible] = useState(true);

        if (!visible) return <p className="text-sm text-muted-foreground">Chip removed</p>;

        return (
            <Chip onDelete={() => setVisible(false)}>
                Removable
            </Chip>
        );
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip variant="default">Default</Chip>
            <Chip variant="secondary">Secondary</Chip>
            <Chip variant="outline">Outline</Chip>
            <Chip variant="destructive">Destructive</Chip>
        </div>
    ),
};

export const TagList: Story = {
    render: () => {
        const [tags, setTags] = useState([
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Next.js",
            "Vite",
        ]);

        const removeTag = (index: number) => {
            setTags(tags.filter((_, i) => i !== index));
        };

        return (
            <div className="w-full max-w-md space-y-4">
                <h3 className="text-sm font-medium">Selected Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Chip key={index} onDelete={() => removeTag(index)}>
                            {tag}
                        </Chip>
                    ))}
                </div>
            </div>
        );
    },
};

export const StatusChips: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip variant="default">Active</Chip>
            <Chip variant="secondary">Pending</Chip>
            <Chip variant="outline">Draft</Chip>
            <Chip variant="destructive">Cancelled</Chip>
        </div>
    ),
};
