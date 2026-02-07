import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@acme/ui/chip";
import { useState } from "react";
import { Check, Heart, Star, Pin, List, Shield, Globe, Link, Book, Hash, Tag } from "lucide-react";

const meta = {
    title: "UI/Display/Chip",
    component: Chip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "secondary", "outline", "destructive", "soft", "success", "warning", "info"],
        },
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

export const Soft: Story = {
    render: () => <Chip variant="soft">Tinted</Chip>,
};

export const Success: Story = {
    render: () => <Chip variant="success">Active</Chip>,
};

export const Warning: Story = {
    render: () => <Chip variant="warning">Pending</Chip>,
};

export const Info: Story = {
    render: () => <Chip variant="info">In Review</Chip>,
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
            <Chip variant="soft">Soft</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
            <Chip variant="info">Info</Chip>
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
            <div className="w-full max-w-md space-y-2">
                <h3 className="text-xs font-medium text-muted-foreground">Selected Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, index) => (
                        <Chip key={index} variant="outline" onDelete={() => removeTag(index)}>
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
            <Chip variant="success">Active</Chip>
            <Chip variant="warning">Pending</Chip>
            <Chip variant="info">Draft</Chip>
            <Chip variant="destructive">Cancelled</Chip>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  New: Selectable Chips (Ingredient pattern)                         */
/* ------------------------------------------------------------------ */

export const SelectableChips: Story = {
    render: () => {
        const ingredients = ["Cheese", "Vanilla", "Chocolate", "Egg", "Honey", "Milk", "Banana", "Nut", "Cinnamon", "Tomato", "Yogurt"];
        const [selected, setSelected] = useState<string[]>(["Nut", "Cinnamon"]);

        const toggle = (item: string) => {
            setSelected((prev) =>
                prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
            );
        };

        return (
            <div className="w-full max-w-md space-y-2">
                <h3 className="text-sm font-medium">Ingredient chips</h3>
                <div className="flex flex-wrap gap-1.5">
                    {ingredients.map((item) => {
                        const isSelected = selected.includes(item);
                        return (
                            <Chip
                                key={item}
                                variant={isSelected ? "default" : "secondary"}
                                icon={isSelected ? <Check /> : undefined}
                                onClick={() => toggle(item)}
                                className="cursor-pointer"
                            >
                                {item}
                            </Chip>
                        );
                    })}
                </div>
            </div>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  New: Icon Chips (Smooth pattern)                                   */
/* ------------------------------------------------------------------ */

export const IconChips: Story = {
    render: () => (
        <div className="w-full max-w-md space-y-2">
            <h3 className="text-sm font-medium">Smooth chips</h3>
            <div className="flex flex-wrap gap-1.5">
                <Chip variant="secondary" icon={<Pin />}>Pin</Chip>
                <Chip variant="secondary" icon={<List />}>List</Chip>
                <Chip variant="secondary" icon={<Shield />}>Shield</Chip>
                <Chip variant="secondary" icon={<Globe />}>Globe</Chip>
                <Chip variant="secondary" icon={<Link />}>Link</Chip>
                <Chip variant="secondary" icon={<Book />}>Book</Chip>
                <Chip variant="secondary" icon={<Hash />}>Hash</Chip>
                <Chip variant="secondary" icon={<Tag />}>Tag</Chip>
            </div>
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  New: Likeable Chips                                                */
/* ------------------------------------------------------------------ */

export const LikeableChips: Story = {
    render: () => {
        const topics = ["Cryptocurrency", "Big Data", "Software Development", "New Technology", "Gadgets", "Technology Startups"];
        const [liked, setLiked] = useState<string[]>(["Big Data", "New Technology"]);

        const toggle = (item: string) => {
            setLiked((prev) =>
                prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
            );
        };

        return (
            <div className="w-full max-w-md space-y-2">
                <h3 className="text-sm font-medium">Likeable chips</h3>
                <div className="flex flex-wrap gap-1.5">
                    {topics.map((topic) => {
                        const isLiked = liked.includes(topic);
                        return (
                            <Chip
                                key={topic}
                                variant="outline"
                                icon={<Heart className={isLiked ? "fill-current text-rose-500" : ""} />}
                                onClick={() => toggle(topic)}
                                className="cursor-pointer"
                            >
                                {topic}
                            </Chip>
                        );
                    })}
                </div>
            </div>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  New: Outlined with colors                                          */
/* ------------------------------------------------------------------ */

export const OutlinedColored: Story = {
    render: () => {
        const tags = [
            { label: "Hacktoberfest", color: "text-avatar-green" },
            { label: "Bug", color: "text-avatar-red" },
            { label: "Enhancement", color: "text-avatar-blue" },
            { label: "Trends", color: "text-avatar-amber" },
            { label: "Question", color: "text-avatar-orange" },
            { label: "Rubi Kapustu", color: "text-avatar-teal" },
        ];

        return (
            <div className="w-full max-w-md space-y-2">
                <h3 className="text-sm font-medium">Outlined colored</h3>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                        <Chip key={t.label} variant="outline" className={t.color}>
                            {t.label}
                        </Chip>
                    ))}
                </div>
            </div>
        );
    },
};

export const WithDeleteVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip variant="default" onDelete={() => {}}>Default</Chip>
            <Chip variant="secondary" onDelete={() => {}}>Secondary</Chip>
            <Chip variant="outline" onDelete={() => {}}>Outline</Chip>
            <Chip variant="soft" onDelete={() => {}}>Soft</Chip>
            <Chip variant="success" onDelete={() => {}}>Success</Chip>
            <Chip variant="warning" onDelete={() => {}}>Warning</Chip>
            <Chip variant="info" onDelete={() => {}}>Info</Chip>
        </div>
    ),
};

export const IconWithDelete: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Chip variant="secondary" icon={<Star />} onDelete={() => {}}>Starred</Chip>
            <Chip variant="outline" icon={<Globe />} onDelete={() => {}}>Public</Chip>
            <Chip variant="soft" icon={<Shield />} onDelete={() => {}}>Protected</Chip>
        </div>
    ),
};
