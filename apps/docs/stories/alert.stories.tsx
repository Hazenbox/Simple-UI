import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@acme/ui/alert";
import { Stack } from "@acme/ui/primitives/stack";
import { AlertTriangle, AlertCircle, CheckCircle2, Info, Terminal } from "lucide-react";

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
            options: ["default", "destructive", "success", "warning", "info"],
        },
        emphasis: {
            control: { type: "select" },
            options: ["default", "filled"],
        },
        size: {
            control: { type: "select" },
            options: ["default", "compact"],
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

export const Success: Story = {
    render: () => (
        <Alert variant="success" className="w-96">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
                Your changes have been saved successfully.
            </AlertDescription>
        </Alert>
    ),
};

export const Warning: Story = {
    render: () => (
        <Alert variant="warning" className="w-96">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                Your trial period is expiring in 3 days.
            </AlertDescription>
        </Alert>
    ),
};

export const InfoVariant: Story = {
    render: () => (
        <Alert variant="info" className="w-96">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
                A new version is available. Update to get the latest features.
            </AlertDescription>
        </Alert>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <Alert className="w-96">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};

export const DestructiveWithIcon: Story = {
    render: () => (
        <Alert variant="destructive" className="w-96">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
    ),
};

export const SuccessWithIcon: Story = {
    render: () => (
        <Alert variant="success" className="w-96">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Source successfully added!</AlertTitle>
            <AlertDescription>
                Start exploring your new data source.
            </AlertDescription>
        </Alert>
    ),
};

export const WarningWithIcon: Story = {
    render: () => (
        <Alert variant="warning" className="w-96">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Reviews delayed</AlertTitle>
            <AlertDescription>
                Reviews are currently delayed, but we're working on it.
            </AlertDescription>
        </Alert>
    ),
};

export const InfoWithIcon: Story = {
    render: () => (
        <Alert variant="info" className="w-96">
            <Info className="h-4 w-4" />
            <AlertTitle>37 New Reviews found</AlertTitle>
            <AlertDescription>
                Refresh your feed to see the latest reviews.
            </AlertDescription>
        </Alert>
    ),
};

export const FilledDestructive: Story = {
    render: () => (
        <Alert variant="destructive" emphasis="filled" className="w-96">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Credit Card expired</AlertTitle>
            <AlertDescription>
                Update your payment details to continue.
            </AlertDescription>
        </Alert>
    ),
};

export const FilledSuccess: Story = {
    render: () => (
        <Alert variant="success" emphasis="filled" className="w-96">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Deployment successful</AlertTitle>
            <AlertDescription>
                Your application is now live and running.
            </AlertDescription>
        </Alert>
    ),
};

export const FilledWarning: Story = {
    render: () => (
        <Alert variant="warning" emphasis="filled" className="w-96">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Approaching limit</AlertTitle>
            <AlertDescription>
                You have used 90% of your storage quota.
            </AlertDescription>
        </Alert>
    ),
};

export const FilledInfo: Story = {
    render: () => (
        <Alert variant="info" emphasis="filled" className="w-96">
            <Info className="h-4 w-4" />
            <AlertTitle>Scheduled maintenance</AlertTitle>
            <AlertDescription>
                System maintenance is planned for Saturday at 2:00 AM.
            </AlertDescription>
        </Alert>
    ),
};

export const Compact: Story = {
    render: () => (
        <Alert size="compact" className="w-96">
            <AlertTitle className="mb-0">You can add components using the cli.</AlertTitle>
        </Alert>
    ),
};

export const CompactWithIcon: Story = {
    render: () => (
        <Stack gap="sm" className="w-96">
            <Alert size="compact" variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle className="mb-0">Changes saved successfully.</AlertTitle>
            </Alert>
            <Alert size="compact" variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="mb-0">Trial expires in 3 days.</AlertTitle>
            </Alert>
            <Alert size="compact" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0">Connection failed.</AlertTitle>
            </Alert>
            <Alert size="compact" variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle className="mb-0">Update available.</AlertTitle>
            </Alert>
        </Stack>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <Stack gap="md" className="w-[480px]">
            <Alert variant="default">
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                    This is a standard informational alert.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>
                    This indicates an error or critical issue.
                </AlertDescription>
            </Alert>
            <Alert variant="success">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success Alert</AlertTitle>
                <AlertDescription>
                    Operation completed successfully.
                </AlertDescription>
            </Alert>
            <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning Alert</AlertTitle>
                <AlertDescription>
                    Something needs your attention.
                </AlertDescription>
            </Alert>
            <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Info Alert</AlertTitle>
                <AlertDescription>
                    Here is some useful information.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive" emphasis="filled">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Filled Destructive</AlertTitle>
                <AlertDescription>
                    Emphasized error with background.
                </AlertDescription>
            </Alert>
            <Alert variant="success" emphasis="filled">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Filled Success</AlertTitle>
                <AlertDescription>
                    Emphasized success with background.
                </AlertDescription>
            </Alert>
        </Stack>
    ),
};
