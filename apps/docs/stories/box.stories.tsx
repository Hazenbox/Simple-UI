import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@acme/ui/primitives/box";

const meta = {
    title: "UI/Primitives/Box",
    component: Box,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "h-24 w-24 rounded-md bg-primary",
    },
};

export const WithPadding: Story = {
    args: {
        className: "rounded-md border p-4",
        children: "Box with padding",
    },
};

export const Responsive: Story = {
    render: () => (
        <Box className="h-32 w-32 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white md:h-48 md:w-48">
            <p className="text-sm">Responsive Box</p>
            <p className="text-xs">Resize to see changes</p>
        </Box>
    ),
};
