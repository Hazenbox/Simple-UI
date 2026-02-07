import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@acme/ui/toaster";
import { Button } from "@acme/ui/button";
import { useToast } from "@acme/ui/use-toast";

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
    const { toast } = useToast();

    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up",
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
    const { toast } = useToast();

    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <Button variant="outline" size="sm">Try again</Button>,
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
    const { toast } = useToast();

    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "Error",
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
