import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@acme/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@acme/ui/card";
import {
    Table,
    LayoutGrid,
    BarChart,
    ChevronDown,
    Share,
    Lock,
    Globe,
    Settings,
} from "lucide-react";

const meta = {
    title: "UI/Navigation/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-96">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <p className="text-xs text-muted-foreground">
                    Make changes to your account here.
                </p>
            </TabsContent>
            <TabsContent value="password">
                <p className="text-xs text-muted-foreground">
                    Change your password here.
                </p>
            </TabsContent>
        </Tabs>
    ),
};

export const WithCards: Story = {
    render: () => (
        <Tabs defaultValue="overview" className="w-96">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <Card>
                    <CardHeader className="p-3">
                        <CardTitle className="text-sm">Overview</CardTitle>
                        <CardDescription className="text-xs">
                            View your account overview and recent activity.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-1 p-3 pt-0">
                        <p className="text-xs">Total users: 1,234</p>
                        <p className="text-xs">Active sessions: 56</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="analytics">
                <Card>
                    <CardHeader className="p-3">
                        <CardTitle className="text-sm">Analytics</CardTitle>
                        <CardDescription className="text-xs">
                            Detailed analytics and insights for your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-1 p-3 pt-0">
                        <p className="text-xs">Page views: 45,678</p>
                        <p className="text-xs">Bounce rate: 32%</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    ),
};

export const MultipleTabs: Story = {
    render: () => (
        <Tabs defaultValue="share" className="w-96">
            <TabsList>
                <TabsTrigger value="share">Share</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
                <TabsTrigger value="publishing">Publishing</TabsTrigger>
                <TabsTrigger value="domain">Domain</TabsTrigger>
            </TabsList>
            <TabsContent value="share">
                <p className="text-xs text-muted-foreground">
                    Share settings and collaboration options.
                </p>
            </TabsContent>
            <TabsContent value="privacy">
                <p className="text-xs text-muted-foreground">
                    Privacy and visibility controls.
                </p>
            </TabsContent>
            <TabsContent value="publishing">
                <p className="text-xs text-muted-foreground">
                    Publishing and deployment settings.
                </p>
            </TabsContent>
            <TabsContent value="domain">
                <p className="text-xs text-muted-foreground">
                    Custom domain configuration.
                </p>
            </TabsContent>
        </Tabs>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Tabs defaultValue="table" className="w-96">
            <TabsList>
                <TabsTrigger value="table">
                    <Table />
                    Table
                </TabsTrigger>
                <TabsTrigger value="board">
                    <LayoutGrid />
                    Board
                </TabsTrigger>
                <TabsTrigger value="chart">
                    <BarChart />
                    Chart
                </TabsTrigger>
            </TabsList>
            <TabsContent value="table">
                <p className="text-xs text-muted-foreground">
                    Table view with rows and columns.
                </p>
            </TabsContent>
            <TabsContent value="board">
                <p className="text-xs text-muted-foreground">
                    Board view with cards and columns.
                </p>
            </TabsContent>
            <TabsContent value="chart">
                <p className="text-xs text-muted-foreground">
                    Chart view with visual analytics.
                </p>
            </TabsContent>
        </Tabs>
    ),
};

export const Underline: Story = {
    render: () => (
        <Tabs defaultValue="share" variant="underline" className="w-96">
            <TabsList>
                <TabsTrigger value="share">
                    <Share />
                    Share
                </TabsTrigger>
                <TabsTrigger value="privacy">
                    <Lock />
                    Privacy
                </TabsTrigger>
                <TabsTrigger value="publishing">
                    <Globe />
                    Publishing
                </TabsTrigger>
                <TabsTrigger value="domain">
                    <Settings />
                    Domain
                </TabsTrigger>
            </TabsList>
            <TabsContent value="share">
                <p className="text-xs text-muted-foreground">
                    Share settings and collaboration options.
                </p>
            </TabsContent>
            <TabsContent value="privacy">
                <p className="text-xs text-muted-foreground">
                    Privacy and visibility controls.
                </p>
            </TabsContent>
            <TabsContent value="publishing">
                <p className="text-xs text-muted-foreground">
                    Publishing and deployment settings.
                </p>
            </TabsContent>
            <TabsContent value="domain">
                <p className="text-xs text-muted-foreground">
                    Custom domain configuration.
                </p>
            </TabsContent>
        </Tabs>
    ),
};
