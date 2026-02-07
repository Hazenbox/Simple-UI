import type { Meta, StoryObj } from "@storybook/react";
import { CloseButton } from "@acme/ui/close-button";
import { Stack } from "@acme/ui/primitives/stack";
import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";

const meta = {
    title: "UI/Button/Close Button",
    component: CloseButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "default", "lg"],
        },
        variant: {
            control: { type: "select" },
            options: ["default", "ghost", "outline"],
        },
    },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Sizes: Story = {
    render: () => (
        <Stack gap="md" direction="row" align="center">
            <CloseButton size="sm" />
            <CloseButton size="default" />
            <CloseButton size="lg" />
        </Stack>
    ),
};

export const Variants: Story = {
    render: () => (
        <Stack gap="md" direction="row" align="center">
            <CloseButton variant="default" />
            <CloseButton variant="ghost" />
            <CloseButton variant="outline" />
        </Stack>
    ),
};

export const InCard: Story = {
    render: () => (
        <Card className="w-96">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Card Title</CardTitle>
                    <CloseButton size="sm" />
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    This card demonstrates how the close button can be used in a card header.
                </p>
            </CardContent>
        </Card>
    ),
};

export const CustomIcon: Story = {
    render: () => (
        <Stack gap="md" direction="row" align="center">
            <CloseButton icon={<span className="text-lg">×</span>} />
            <CloseButton icon={<span className="text-lg">✕</span>} />
        </Stack>
    ),
};
