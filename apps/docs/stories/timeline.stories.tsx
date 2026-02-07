import type { Meta, StoryObj } from "@storybook/react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineDot,
    TimelineLine,
    TimelineContent,
    TimelineHeading,
    TimelineDescription,
    TimelineTime,
} from "@acme/ui/timeline";
import {
    GitCommit,
    GitMerge,
    GitPullRequest,
    Check,
    Package,
    Truck,
    CreditCard,
    ShoppingCart,
    AlertCircle,
} from "lucide-react";

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

/* ------------------------------------------------------------------ */
/*  Default                                                            */
/* ------------------------------------------------------------------ */

export const Default: Story = {
    render: () => {
        const items = [
            { title: "Order Placed", desc: "Your order has been placed successfully.", time: "2 hours ago" },
            { title: "Processing", desc: "We're preparing your order for shipment.", time: "1 hour ago" },
            { title: "Shipped", desc: "Your order is on its way.", time: "30 minutes ago" },
        ];

        return (
            <Timeline className="w-[400px]">
                {items.map((item, i) => (
                    <TimelineItem key={i}>
                        <TimelineConnector>
                            <TimelineDot />
                            <TimelineLine isLast={i === items.length - 1} />
                        </TimelineConnector>
                        <TimelineContent>
                            <div className="flex items-center justify-between">
                                <TimelineHeading>{item.title}</TimelineHeading>
                                <TimelineTime>{item.time}</TimelineTime>
                            </div>
                            <TimelineDescription>{item.desc}</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  With Icons                                                         */
/* ------------------------------------------------------------------ */

export const WithIcons: Story = {
    render: () => {
        const items = [
            { title: "Commit pushed", desc: "Initial commit to main branch", time: "2 hours ago", icon: <GitCommit className="h-3 w-3" />, status: "active" as const },
            { title: "Pull request opened", desc: "Feature/new-component PR #123", time: "1 hour ago", icon: <GitPullRequest className="h-3 w-3" />, status: "active" as const },
            { title: "Merged", desc: "PR merged into main", time: "30 min ago", icon: <GitMerge className="h-3 w-3" />, status: "success" as const },
            { title: "Deployed", desc: "Successfully deployed to production", time: "Just now", icon: <Check className="h-3 w-3" />, status: "success" as const },
        ];

        return (
            <Timeline className="w-[400px]">
                {items.map((item, i) => (
                    <TimelineItem key={i}>
                        <TimelineConnector>
                            <TimelineDot status={item.status}>{item.icon}</TimelineDot>
                            <TimelineLine isLast={i === items.length - 1} />
                        </TimelineConnector>
                        <TimelineContent>
                            <div className="flex items-center justify-between">
                                <TimelineHeading>{item.title}</TimelineHeading>
                                <TimelineTime>{item.time}</TimelineTime>
                            </div>
                            <TimelineDescription>{item.desc}</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Compact (no descriptions)                                          */
/* ------------------------------------------------------------------ */

export const Compact: Story = {
    render: () => {
        const items = [
            { title: "Project created", time: "Jan 15" },
            { title: "First commit", time: "Jan 16" },
            { title: "CI/CD setup", time: "Jan 18" },
            { title: "First release", time: "Jan 22" },
            { title: "100 stars", time: "Feb 1" },
            { title: "v2.0 launched", time: "Mar 10" },
        ];

        return (
            <Timeline variant="compact" className="w-[300px]">
                {items.map((item, i) => (
                    <TimelineItem key={i}>
                        <TimelineConnector>
                            <TimelineDot size="sm" />
                            <TimelineLine isLast={i === items.length - 1} />
                        </TimelineConnector>
                        <TimelineContent className="pb-3">
                            <div className="flex items-center justify-between">
                                <TimelineHeading className="text-xs">{item.title}</TimelineHeading>
                                <TimelineTime className="text-xs">{item.time}</TimelineTime>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Order Tracking                                                     */
/* ------------------------------------------------------------------ */

export const OrderTracking: Story = {
    render: () => {
        const steps = [
            { title: "Order Confirmed", desc: "We've received your order #12345", time: "March 1, 10:00 AM", icon: <ShoppingCart className="h-3 w-3" />, status: "success" as const },
            { title: "Payment Processed", desc: "Payment of $129.99 confirmed", time: "March 1, 10:05 AM", icon: <CreditCard className="h-3 w-3" />, status: "success" as const },
            { title: "Preparing for Shipment", desc: "Your items are being packed", time: "March 1, 2:30 PM", icon: <Package className="h-3 w-3" />, status: "success" as const },
            { title: "Shipped", desc: "Tracking: 1Z999AA10123456784", time: "March 2, 9:00 AM", icon: <Truck className="h-3 w-3" />, status: "active" as const },
            { title: "Out for Delivery", desc: "Package is out for delivery", time: "Pending", icon: <Truck className="h-3 w-3" />, status: "muted" as const },
        ];

        return (
            <div className="w-full max-w-lg rounded-lg border p-3">
                <h2 className="mb-3 text-sm font-semibold">Order Tracking</h2>
                <Timeline>
                    {steps.map((step, i) => (
                        <TimelineItem key={i}>
                            <TimelineConnector>
                                <TimelineDot status={step.status}>{step.icon}</TimelineDot>
                                <TimelineLine isLast={i === steps.length - 1} />
                            </TimelineConnector>
                            <TimelineContent>
                                <div className="flex items-center justify-between">
                                    <TimelineHeading>{step.title}</TimelineHeading>
                                    <TimelineTime>{step.time}</TimelineTime>
                                </div>
                                <TimelineDescription>{step.desc}</TimelineDescription>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Status Timeline (color-coded dots)                                 */
/* ------------------------------------------------------------------ */

export const StatusTimeline: Story = {
    render: () => {
        const events = [
            { title: "Deployment started", desc: "Building production bundle...", status: "info" as const, icon: <Package className="h-3 w-3" /> },
            { title: "Tests passed", desc: "All 142 tests passed", status: "success" as const, icon: <Check className="h-3 w-3" /> },
            { title: "Warning: Bundle size", desc: "Main bundle exceeds 500KB threshold", status: "warning" as const, icon: <AlertCircle className="h-3 w-3" /> },
            { title: "Deployment failed", desc: "DNS resolution error on edge node", status: "destructive" as const, icon: <AlertCircle className="h-3 w-3" /> },
            { title: "Rollback initiated", desc: "Reverting to previous stable version", status: "muted" as const, icon: <GitMerge className="h-3 w-3" /> },
        ];

        return (
            <Timeline className="w-[420px]">
                {events.map((event, i) => (
                    <TimelineItem key={i}>
                        <TimelineConnector>
                            <TimelineDot status={event.status}>{event.icon}</TimelineDot>
                            <TimelineLine isLast={i === events.length - 1} />
                        </TimelineConnector>
                        <TimelineContent>
                            <TimelineHeading>{event.title}</TimelineHeading>
                            <TimelineDescription>{event.desc}</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        );
    },
};

/* ------------------------------------------------------------------ */
/*  Project Milestones                                                 */
/* ------------------------------------------------------------------ */

export const ProjectMilestones: Story = {
    render: () => {
        const milestones = [
            { title: "Project Kickoff", desc: "Initial planning and requirements gathering", time: "January 2024" },
            { title: "Design Phase", desc: "UI/UX design and prototyping completed", time: "February 2024" },
            { title: "Development Sprint 1", desc: "Core features implementation", time: "March 2024" },
            { title: "Beta Testing", desc: "Internal testing and bug fixes", time: "April 2024" },
            { title: "Launch", desc: "Public release scheduled", time: "May 2024" },
        ];

        return (
            <Timeline className="w-[450px]">
                {milestones.map((m, i) => (
                    <TimelineItem key={i}>
                        <TimelineConnector>
                            <TimelineDot status={i < 3 ? "success" : i === 3 ? "active" : "muted"}>
                                {i < 3 && <Check className="h-3 w-3" />}
                            </TimelineDot>
                            <TimelineLine isLast={i === milestones.length - 1} />
                        </TimelineConnector>
                        <TimelineContent>
                            <div className="flex items-center justify-between">
                                <TimelineHeading>{m.title}</TimelineHeading>
                                <TimelineTime>{m.time}</TimelineTime>
                            </div>
                            <TimelineDescription>{m.desc}</TimelineDescription>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        );
    },
};
