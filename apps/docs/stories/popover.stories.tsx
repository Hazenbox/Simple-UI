import type { Meta, StoryObj } from "@storybook/react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@acme/ui/popover";
import { Button } from "@acme/ui/button";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

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
                <div className="flex flex-col gap-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Dimensions</h4>
                        <p className="text-xs text-muted-foreground">
                            Set the dimensions for the layer.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="width">Width</Label>
                            <Input id="width" defaultValue="100%" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="height">Height</Label>
                            <Input id="height" defaultValue="25px" />
                        </div>
                    </div>
                </div>
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
                <div className="flex flex-col gap-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Quick Settings</h4>
                        <p className="text-xs text-muted-foreground">
                            Adjust your preferences.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="name">Display name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                    </div>
                    <Button className="w-full">Save</Button>
                </div>
            </PopoverContent>
        </Popover>
    ),
};
