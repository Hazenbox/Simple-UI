import type { Meta, StoryObj } from "@storybook/react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemContent,
    ListItemTitle,
    ListItemDescription,
    ListItemAction,
} from "@acme/ui/list";
import { Button } from "@acme/ui/button";
import { Mail, Phone, MapPin, User, ChevronRight } from "lucide-react";

const meta = {
    title: "UI/Display/List",
    component: List,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <List className="w-[350px]">
            <ListItem>
                <ListItemContent>
                    <ListItemTitle>Item 1</ListItemTitle>
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent>
                    <ListItemTitle>Item 2</ListItemTitle>
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent>
                    <ListItemTitle>Item 3</ListItemTitle>
                </ListItemContent>
            </ListItem>
        </List>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <List className="w-[350px]">
            <ListItem>
                <ListItemIcon>
                    <Mail className="h-5 w-5" />
                </ListItemIcon>
                <ListItemContent>
                    <ListItemTitle>Email</ListItemTitle>
                    <ListItemDescription>john@example.com</ListItemDescription>
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Phone className="h-5 w-5" />
                </ListItemIcon>
                <ListItemContent>
                    <ListItemTitle>Phone</ListItemTitle>
                    <ListItemDescription>+1 (555) 123-4567</ListItemDescription>
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <MapPin className="h-5 w-5" />
                </ListItemIcon>
                <ListItemContent>
                    <ListItemTitle>Address</ListItemTitle>
                    <ListItemDescription>123 Main St, City, State</ListItemDescription>
                </ListItemContent>
            </ListItem>
        </List>
    ),
};

export const WithActions: Story = {
    render: () => (
        <List className="w-[400px]">
            <ListItem>
                <ListItemIcon>
                    <User className="h-5 w-5" />
                </ListItemIcon>
                <ListItemContent>
                    <ListItemTitle>John Doe</ListItemTitle>
                    <ListItemDescription>Software Engineer</ListItemDescription>
                </ListItemContent>
                <ListItemAction>
                    <Button variant="ghost" size="sm">
                        View
                    </Button>
                </ListItemAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <User className="h-5 w-5" />
                </ListItemIcon>
                <ListItemContent>
                    <ListItemTitle>Jane Smith</ListItemTitle>
                    <ListItemDescription>Product Designer</ListItemDescription>
                </ListItemContent>
                <ListItemAction>
                    <Button variant="ghost" size="sm">
                        View
                    </Button>
                </ListItemAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <User className="h-5 w-5" />
                </ListItemIcon>
                <ListItemContent>
                    <ListItemTitle>Bob Johnson</ListItemTitle>
                    <ListItemDescription>Project Manager</ListItemDescription>
                </ListItemContent>
                <ListItemAction>
                    <Button variant="ghost" size="sm">
                        View
                    </Button>
                </ListItemAction>
            </ListItem>
        </List>
    ),
};

export const Clickable: Story = {
    render: () => (
        <List className="w-[350px]">
            <ListItem className="cursor-pointer">
                <ListItemContent>
                    <ListItemTitle>Settings</ListItemTitle>
                    <ListItemDescription>Manage your account settings</ListItemDescription>
                </ListItemContent>
                <ListItemAction>
                    <ChevronRight className="h-5 w-5" />
                </ListItemAction>
            </ListItem>
            <ListItem className="cursor-pointer">
                <ListItemContent>
                    <ListItemTitle>Privacy</ListItemTitle>
                    <ListItemDescription>Control your privacy settings</ListItemDescription>
                </ListItemContent>
                <ListItemAction>
                    <ChevronRight className="h-5 w-5" />
                </ListItemAction>
            </ListItem>
            <ListItem className="cursor-pointer">
                <ListItemContent>
                    <ListItemTitle>Notifications</ListItemTitle>
                    <ListItemDescription>Manage notification preferences</ListItemDescription>
                </ListItemContent>
                <ListItemAction>
                    <ChevronRight className="h-5 w-5" />
                </ListItemAction>
            </ListItem>
        </List>
    ),
};
