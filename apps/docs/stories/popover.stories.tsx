import type { Meta, StoryObj } from "@storybook/react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@acme/ui/popover";
import { Button } from "@acme/ui/button";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Overlay/Popover",
    component: Popover,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <Stack gap="md">
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Dimensions</h4>
                        <p className="text-xs text-muted-foreground">
                            Set the dimensions for the layer.
                        </p>
                    </div>
                    <Stack gap="base">
                        <Stack gap="xs">
                            <Label htmlFor="width">Width</Label>
                            <Input id="width" defaultValue="100%" />
                        </Stack>
                        <Stack gap="xs">
                            <Label htmlFor="height">Height</Label>
                            <Input id="height" defaultValue="25px" />
                        </Stack>
                    </Stack>
                </Stack>
            </PopoverContent>
        </Popover>
    ),
};

export const WithForm: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button>Settings</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <Stack gap="md">
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Quick Settings</h4>
                        <p className="text-xs text-muted-foreground">
                            Adjust your preferences.
                        </p>
                    </div>
                    <Stack gap="base">
                        <Stack gap="xs">
                            <Label htmlFor="name">Display name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </Stack>
                        <Stack gap="xs">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </Stack>
                    </Stack>
                    <Button className="w-full">Save</Button>
                </Stack>
            </PopoverContent>
        </Popover>
    ),
};
