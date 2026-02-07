import type { Meta, StoryObj } from "@storybook/react";
import { Backdrop } from "@acme/ui/backdrop";
import { Button } from "@acme/ui/button";
import { useState } from "react";

const meta = {
    title: "UI/Mobile/Backdrop",
    component: Backdrop,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div className="relative h-[400px] w-[600px] overflow-hidden rounded-lg border">
                <div className="flex h-full items-center justify-center">
                    <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
                </div>
                <Backdrop open={open} onClose={() => setOpen(false)} />
                {open && (
                    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-6 shadow-lg">
                        <h3 className="mb-4 text-lg font-semibold">Modal Content</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Click the backdrop to close
                        </p>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </div>
                )}
            </div>
        );
    },
};

export const Invisible: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div className="relative h-[400px] w-[600px] overflow-hidden rounded-lg border">
                <div className="flex h-full items-center justify-center">
                    <Button onClick={() => setOpen(true)}>Show Invisible Backdrop</Button>
                </div>
                <Backdrop open={open} onClose={() => setOpen(false)} invisible />
                {open && (
                    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-6 shadow-lg">
                        <h3 className="mb-4 text-lg font-semibold">Modal Content</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Invisible backdrop - click outside to close
                        </p>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </div>
                )}
            </div>
        );
    },
};
