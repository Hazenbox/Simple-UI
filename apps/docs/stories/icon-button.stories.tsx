import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@acme/ui/icon-button";
import { Stack } from "@acme/ui/primitives/stack";
import { Heart, Star, Share2, Download, Trash2, Edit } from "lucide-react";

const meta = {
    title: "UI/Button/Icon Button",
    component: IconButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "default", "lg", "icon"],
        },
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        "aria-label": "Like",
        children: <Heart className="h-4 w-4" />,
    },
};

export const Variants: Story = {
    render: () => (
        <Stack gap="md" direction="row" align="center">
            <IconButton variant="default" aria-label="Like">
                <Heart className="h-4 w-4" />
            </IconButton>
            <IconButton variant="destructive" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" aria-label="Edit">
                <Edit className="h-4 w-4" />
            </IconButton>
            <IconButton variant="secondary" aria-label="Star">
                <Star className="h-4 w-4" />
            </IconButton>
            <IconButton variant="ghost" aria-label="Share">
                <Share2 className="h-4 w-4" />
            </IconButton>
            <IconButton variant="link" aria-label="Download">
                <Download className="h-4 w-4" />
            </IconButton>
        </Stack>
    ),
};

export const Sizes: Story = {
    render: () => (
        <Stack gap="md" direction="row" align="center">
            <IconButton size="sm" aria-label="Small button">
                <Heart className="h-3 w-3" />
            </IconButton>
            <IconButton size="default" aria-label="Default button">
                <Heart className="h-4 w-4" />
            </IconButton>
            <IconButton size="lg" aria-label="Large button">
                <Heart className="h-5 w-5" />
            </IconButton>
        </Stack>
    ),
};

export const WithTooltip: Story = {
    render: () => (
        <Stack gap="md" direction="row" align="center">
            <IconButton variant="outline" aria-label="Add to favorites">
                <Star className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" aria-label="Share">
                <Share2 className="h-4 w-4" />
            </IconButton>
            <IconButton variant="outline" aria-label="Download">
                <Download className="h-4 w-4" />
            </IconButton>
        </Stack>
    ),
};
