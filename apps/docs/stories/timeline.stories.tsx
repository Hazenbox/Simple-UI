import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "@acme/ui/timeline";
import { GitCommit, GitMerge, GitPullRequest, Check } from "lucide-react";

const meta = {
    title: "UI/Display/Timeline",
    component: Timeline,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
    {
        title: "Order Placed",
        description: "Your order has been placed successfully.",
        time: "2 hours ago",
    },
    {
        title: "Processing",
        description: "We're preparing your order for shipment.",
        time: "1 hour ago",
    },
    {
        title: "Shipped",
        description: "Your order is on its way.",
        time: "30 minutes ago",
    },
];

export const Default: Story = {
    render: () => <Timeline items={basicItems} className="w-[450px]" />,
};

export const WithIcons: Story = {
    render: () => {
        const items = [
            {
                title: "Commit pushed",
                description: "Initial commit to main branch",
                time: "2 hours ago",
                icon: <GitCommit className="h-4 w-4" />,
            },
            {
                title: "Pull request opened",
                description: "Feature/new-component PR #123",
                time: "1 hour ago",
                icon: <GitPullRequest className="h-4 w-4" />,
            },
            {
                title: "Merged",
                description: "PR merged into main",
                time: "30 minutes ago",
                icon: <GitMerge className="h-4 w-4" />,
            },
            {
                title: "Deployed",
                description: "Successfully deployed to production",
                time: "Just now",
                icon: <Check className="h-4 w-4" />,
            },
        ];

        return <Timeline items={items} className="w-[450px]" />;
    },
};

export const OrderTracking: Story = {
    render: () => {
        const items = [
            {
                title: "Order Confirmed",
                description: "We've received your order #12345",
                time: "March 1, 2024 at 10:00 AM",
            },
            {
                title: "Payment Processed",
                description: "Payment of $129.99 confirmed",
                time: "March 1, 2024 at 10:05 AM",
            },
            {
                title: "Preparing for Shipment",
                description: "Your items are being packed",
                time: "March 1, 2024 at 2:30 PM",
            },
            {
                title: "Shipped",
                description: "Package handed to carrier (Tracking: 1Z999AA10123456784)",
                time: "March 2, 2024 at 9:00 AM",
            },
            {
                title: "Out for Delivery",
                description: "Package is out for delivery",
                time: "March 3, 2024 at 8:00 AM",
            },
        ];

        return (
            <div className="w-full max-w-2xl rounded-lg border p-6">
                <h2 className="mb-6 text-2xl font-bold">Order Tracking</h2>
                <Timeline items={items} />
            </div>
        );
    },
};

export const ProjectMilestones: Story = {
    render: () => {
        const items = [
            {
                title: "Project Kickoff",
                description: "Initial planning and requirements gathering",
                time: "January 2024",
            },
            {
                title: "Design Phase",
                description: "UI/UX design and prototyping completed",
                time: "February 2024",
            },
            {
                title: "Development Sprint 1",
                description: "Core features implementation",
                time: "March 2024",
            },
            {
                title: "Beta Testing",
                description: "Internal testing and bug fixes",
                time: "April 2024",
            },
            {
                title: "Launch",
                description: "Public release scheduled",
                time: "May 2024",
            },
        ];

        return <Timeline items={items} className="w-[500px]" />;
    },
};
