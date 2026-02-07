import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "@acme/ui/center";
import { User } from "lucide-react";

const meta = {
    title: "UI/Layout/Center",
    component: Center,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Center className="h-[200px] w-[400px] rounded-lg border">
            <p className="font-semibold">Centered Content</p>
        </Center>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <Center className="h-[200px] w-[400px] rounded-lg border">
            <div className="text-center">
                <Center className="mb-4">
                    <div className="rounded-full bg-primary p-4">
                        <User className="h-8 w-8 text-primary-foreground" />
                    </div>
                </Center>
                <h3 className="font-semibold">User Profile</h3>
                <p className="text-sm text-muted-foreground">Centered icon and text</p>
            </div>
        </Center>
    ),
};

export const Inline: Story = {
    render: () => (
        <div className="space-y-4 rounded-lg border p-6">
            <p>
                This is some text with an{" "}
                <Center inline className="h-6 w-6 rounded bg-primary text-primary-foreground">
                    !
                </Center>{" "}
                inline centered element.
            </p>
        </div>
    ),
};

export const FullPage: Story = {
    render: () => (
        <Center className="h-[400px] w-[600px] rounded-lg border bg-muted/50">
            <div className="text-center">
                <h1 className="mb-2 text-3xl font-bold">Welcome</h1>
                <p className="text-muted-foreground">
                    This content is perfectly centered
                </p>
            </div>
        </Center>
    ),
};
