import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@acme/ui/toaster";
import { Button } from "@acme/ui/button";
import { toast } from "sonner";

const meta = {
    title: "UI/Overlay/Toaster",
    component: Toaster,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast("Scheduled: Catch up", {
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    });
                }}
            >
                Show Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const Default: Story = {
    render: () => <ToastDemo />,
};

const ToastWithAction = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast("Uh oh! Something went wrong.", {
                        description: "There was a problem with your request.",
                        action: {
                            label: "Try again",
                            onClick: () => console.log("Try again clicked"),
                        },
                    });
                }}
            >
                Show Toast with Action
            </Button>
            <Toaster />
        </div>
    );
};

export const WithAction: Story = {
    render: () => <ToastWithAction />,
};

const ToastDestructive = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast.error("Error", {
                        description: "Your session has expired. Please log in again.",
                    });
                }}
            >
                Show Destructive Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const Destructive: Story = {
    render: () => <ToastDestructive />,
};
