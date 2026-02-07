import type { Meta, StoryObj } from "@storybook/react";
import { AppBar, AppBarTitle, AppBarActions } from "@acme/ui/app-bar";
import { Button } from "@acme/ui/button";
import { Menu, Search, Bell, User } from "lucide-react";

const meta = {
    title: "UI/Mobile/App Bar",
    component: AppBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
    render: () => (
        <div className="h-[400px] bg-muted/50">
            <AppBar position="static">
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
                <AppBarTitle>My App</AppBarTitle>
                <AppBarActions>
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                </AppBarActions>
            </AppBar>
            <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Content area</p>
            </div>
        </div>
    ),
};

export const Fixed: Story = {
    render: () => (
        <div className="relative h-[600px] bg-muted/50">
            <AppBar position="fixed">
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
                <AppBarTitle>Dashboard</AppBarTitle>
                <AppBarActions>
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                </AppBarActions>
            </AppBar>
            <div className="flex h-full items-center justify-center pt-16">
                <p className="text-muted-foreground">Scrollable content</p>
            </div>
        </div>
    ),
};

export const Simple: Story = {
    render: () => (
        <div className="h-[400px] bg-muted/50">
            <AppBar>
                <AppBarTitle>Simple Title</AppBarTitle>
            </AppBar>
            <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Content area</p>
            </div>
        </div>
    ),
};
