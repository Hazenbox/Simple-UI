import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@acme/ui/toaster";
import { Button } from "@acme/ui/button";
import { Stack } from "@acme/ui/primitives/stack";
import { toast } from "sonner";
import { CheckCircle2, AlertTriangle, AlertCircle, Info } from "lucide-react";

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
                Show Error Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const Destructive: Story = {
    render: () => <ToastDestructive />,
};

const ToastWithIcon = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast("File uploaded", {
                        description: "Your file has been uploaded successfully.",
                        icon: <CheckCircle2 className="h-4 w-4 text-success" />,
                    });
                }}
            >
                Show Toast with Icon
            </Button>
            <Toaster />
        </div>
    );
};

export const WithIcon: Story = {
    render: () => <ToastWithIcon />,
};

const ToastSuccess = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast.success("Changes saved", {
                        description: "Your profile has been updated successfully.",
                    });
                }}
            >
                Show Success Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const Success: Story = {
    render: () => <ToastSuccess />,
};

const ToastWarning = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast.warning("Storage almost full", {
                        description: "You have used 90% of your storage quota.",
                    });
                }}
            >
                Show Warning Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const Warning: Story = {
    render: () => <ToastWarning />,
};

const ToastInfo = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast.info("New update available", {
                        description: "Version 2.0 is ready to install.",
                    });
                }}
            >
                Show Info Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const InfoToast: Story = {
    render: () => <ToastInfo />,
};

const CompactToastDemo = () => {
    return (
        <div className="space-y-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast("Link copied to clipboard");
                }}
            >
                Show Compact Toast
            </Button>
            <Toaster compact />
        </div>
    );
};

export const Compact: Story = {
    render: () => <CompactToastDemo />,
};

const AllTypesDemo = () => {
    return (
        <div className="space-y-4">
            <Stack gap="sm" direction="row">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast("Default notification", { description: "This is a standard toast." })}
                >
                    Default
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast.success("Success!", { description: "Operation completed." })}
                >
                    Success
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast.error("Error", { description: "Something went wrong." })}
                >
                    Error
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast.warning("Warning", { description: "Check your input." })}
                >
                    Warning
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast.info("Info", { description: "New features available." })}
                >
                    Info
                </Button>
            </Stack>
            <Toaster />
        </div>
    );
};

export const AllTypes: Story = {
    render: () => <AllTypesDemo />,
};
