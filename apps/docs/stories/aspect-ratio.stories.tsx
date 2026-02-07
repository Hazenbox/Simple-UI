import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@acme/ui/aspect-ratio";

const meta = {
    title: "UI/Layout/Aspect Ratio",
    component: AspectRatio,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    className="h-full w-full rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    ),
};

export const Square: Story = {
    render: () => (
        <div className="w-[300px]">
            <AspectRatio ratio={1}>
                <img
                    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&dpr=2&q=80"
                    alt="Photo"
                    className="h-full w-full rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    ),
};

export const Portrait: Story = {
    render: () => (
        <div className="w-[300px]">
            <AspectRatio ratio={3 / 4}>
                <img
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&dpr=2&q=80"
                    alt="Photo"
                    className="h-full w-full rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    ),
};

export const VideoEmbed: Story = {
    render: () => (
        <div className="w-full max-w-2xl">
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video"
                    className="h-full w-full rounded-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </AspectRatio>
        </div>
    ),
};

export const WithPlaceholder: Story = {
    render: () => (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
                    <span className="text-muted-foreground">16:9 Aspect Ratio</span>
                </div>
            </AspectRatio>
        </div>
    ),
};
