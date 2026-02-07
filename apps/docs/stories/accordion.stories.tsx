import type { Meta, StoryObj } from "@storybook/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@acme/ui/accordion";
import { Settings, User, Bell, Shield, Palette, Globe } from "lucide-react";

const meta = {
    title: "UI/Navigation/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-96">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const Multiple: Story = {
    render: () => (
        <Accordion type="multiple" className="w-96">
            <AccordionItem value="item-1">
                <AccordionTrigger>Section 1</AccordionTrigger>
                <AccordionContent>
                    Content for section 1. Multiple sections can be open at
                    once.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Section 2</AccordionTrigger>
                <AccordionContent>
                    Content for section 2. Try opening multiple sections.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Section 3</AccordionTrigger>
                <AccordionContent>
                    Content for section 3. All sections can be open
                    simultaneously.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const Ghost: Story = {
    render: () => (
        <Accordion type="single" collapsible variant="ghost" className="w-96">
            <AccordionItem value="item-1">
                <AccordionTrigger>General Settings</AccordionTrigger>
                <AccordionContent>
                    <div className="px-3 text-muted-foreground">
                        Configure your general application preferences and
                        defaults.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Notifications</AccordionTrigger>
                <AccordionContent>
                    <div className="px-3 text-muted-foreground">
                        Manage how you receive alerts and notification
                        preferences.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Privacy & Security</AccordionTrigger>
                <AccordionContent>
                    <div className="px-3 text-muted-foreground">
                        Control your privacy settings, data sharing, and
                        security options.
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-96">
            <AccordionItem value="item-1">
                <AccordionTrigger icon={<User className="h-4 w-4" />}>
                    Account
                </AccordionTrigger>
                <AccordionContent>
                    Manage your account details, profile information, and login
                    credentials.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger icon={<Bell className="h-4 w-4" />}>
                    Notifications
                </AccordionTrigger>
                <AccordionContent>
                    Configure email, push, and in-app notification preferences.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger icon={<Shield className="h-4 w-4" />}>
                    Security
                </AccordionTrigger>
                <AccordionContent>
                    Two-factor authentication, session management, and password
                    settings.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const GhostWithIcons: Story = {
    render: () => (
        <Accordion type="single" collapsible variant="ghost" className="w-96">
            <AccordionItem value="item-1">
                <AccordionTrigger icon={<Settings className="h-4 w-4" />}>
                    General
                </AccordionTrigger>
                <AccordionContent>
                    <div className="px-3 text-muted-foreground">
                        Application-wide settings and configuration options.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger icon={<Palette className="h-4 w-4" />}>
                    Appearance
                </AccordionTrigger>
                <AccordionContent>
                    <div className="px-3 text-muted-foreground">
                        Customize theme, colors, font size, and display density.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger icon={<Globe className="h-4 w-4" />}>
                    Language & Region
                </AccordionTrigger>
                <AccordionContent>
                    <div className="px-3 text-muted-foreground">
                        Set your preferred language, timezone, and date format.
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};
