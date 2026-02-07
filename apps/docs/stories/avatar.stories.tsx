import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@acme/ui/avatar";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Display/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/invalid-url.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};

export const Sizes: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center">
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>LG</AvatarFallback>
            </Avatar>
        </Stack>
    ),
};

export const Group: Story = {
    render: () => (
        <div className="flex -space-x-4">
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/1.png" />
                <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/2.png" />
                <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/3.png" />
                <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarFallback>+5</AvatarFallback>
            </Avatar>
        </div>
    ),
};
