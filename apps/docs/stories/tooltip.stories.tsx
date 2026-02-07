import type { Meta, StoryObj } from "@storybook/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@acme/ui/tooltip";
import { Button } from "@acme/ui/button";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Overlay/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <TooltipProvider>
                <Story />
            </TooltipProvider>
        ),
    ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const Top: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
                <p>Tooltip on top</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const Right: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>Tooltip on right</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const Bottom: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const Left: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
                <p>Tooltip on left</p>
            </TooltipContent>
        </Tooltip>
    ),
};

export const AllPositions: Story = {
    render: () => (
        <Stack direction="row" gap="md">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                    <p>Top</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Right</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>Bottom</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Left</p>
                </TooltipContent>
            </Tooltip>
        </Stack>
    ),
};
