import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@acme/ui/primitives/stack";
import { Button } from "@acme/ui/button";

const meta = {
    title: "UI/Primitives/Stack",
    component: Stack,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        direction: {
            control: { type: "select" },
            options: ["row", "column"],
        },
        gap: {
            control: { type: "select" },
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        align: {
            control: { type: "select" },
            options: ["start", "center", "end", "stretch"],
        },
        justify: {
            control: { type: "select" },
            options: ["start", "center", "end", "between", "around"],
        },
    },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    args: {
        direction: "column",
        gap: "md",
        children: (
            <>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </>
        ),
    },
};

export const Horizontal: Story = {
    args: {
        direction: "row",
        gap: "md",
        children: (
            <>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </>
        ),
    },
};

export const WithAlignment: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center" className="h-32 border p-4">
            <div className="h-8 w-8 rounded bg-primary" />
            <div className="h-12 w-12 rounded bg-secondary" />
            <div className="h-16 w-16 rounded bg-accent" />
        </Stack>
    ),
};

export const Responsive: Story = {
    render: () => (
        <Stack direction="column" gap="md" className="md:flex-row">
            <Button className="flex-1">Button 1</Button>
            <Button className="flex-1">Button 2</Button>
            <Button className="flex-1">Button 3</Button>
        </Stack>
    ),
};
