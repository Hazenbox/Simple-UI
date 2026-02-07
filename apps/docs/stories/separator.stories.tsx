import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@acme/ui/separator";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Navigation/Separator",
    component: Separator,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-80">
            <Stack gap="sm">
                <h4 className="text-sm font-medium">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                </p>
            </Stack>
            <Separator className="my-4" />
            <Stack gap="sm">
                <h4 className="text-sm font-medium">Features</h4>
                <p className="text-sm text-muted-foreground">
                    Accessible, unstyled, and customizable.
                </p>
            </Stack>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-20 items-center space-x-4">
            <div className="space-y-1">
                <h4 className="text-sm font-medium">Item 1</h4>
                <p className="text-sm text-muted-foreground">Description</p>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-1">
                <h4 className="text-sm font-medium">Item 2</h4>
                <p className="text-sm text-muted-foreground">Description</p>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-1">
                <h4 className="text-sm font-medium">Item 3</h4>
                <p className="text-sm text-muted-foreground">Description</p>
            </div>
        </div>
    ),
};
