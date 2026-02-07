import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@acme/ui/scroll-area";
import { Separator } from "@acme/ui/separator";

const meta = {
    title: "UI/Display/ScrollArea",
    component: ScrollArea,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i}>
                        <div className="text-sm">Tag {i + 1}</div>
                        {i < 49 && <Separator className="my-2" />}
                    </div>
                ))}
            </div>
        </ScrollArea>
    ),
};

export const Horizontal: Story = {
    render: () => (
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="h-20 w-32 shrink-0 rounded-md bg-muted" />
                ))}
            </div>
        </ScrollArea>
    ),
};
