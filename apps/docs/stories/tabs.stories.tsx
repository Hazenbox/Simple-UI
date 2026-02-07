import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@acme/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";

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
                <p className="text-sm text-muted-foreground">
                    Make changes to your account here.
                </p>
            </TabsContent>
            <TabsContent value="password">
                <p className="text-sm text-muted-foreground">
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
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                        <CardDescription>
                            View your account overview and recent activity.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-sm">Total users: 1,234</p>
                        <p className="text-sm">Active sessions: 56</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="analytics">
                <Card>
                    <CardHeader>
                        <CardTitle>Analytics</CardTitle>
                        <CardDescription>
                            Detailed analytics and insights for your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-sm">Page views: 45,678</p>
                        <p className="text-sm">Bounce rate: 32%</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    ),
};

export const MultipleTabs: Story = {
    render: () => (
        <Tabs defaultValue="tab1" className="w-96">
            <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Content for Tab 1</TabsContent>
            <TabsContent value="tab2">Content for Tab 2</TabsContent>
            <TabsContent value="tab3">Content for Tab 3</TabsContent>
            <TabsContent value="tab4">Content for Tab 4</TabsContent>
        </Tabs>
    ),
};
