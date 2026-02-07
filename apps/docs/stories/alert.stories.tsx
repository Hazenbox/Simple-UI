import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@acme/ui/alert";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Overlay/Alert",
    component: Alert,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "destructive"],
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert className="w-96">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive" className="w-96">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <Alert className="w-96">
            <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                New features have been added to your dashboard.
            </AlertDescription>
        </Alert>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <Stack gap="md" className="w-96">
            <Alert>
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                    This is a standard informational alert.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>
                    This indicates an error or critical issue.
                </AlertDescription>
            </Alert>
        </Stack>
    ),
};
