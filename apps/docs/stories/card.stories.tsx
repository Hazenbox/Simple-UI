import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@acme/ui/card";
import { Button } from "@acme/ui/button";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Display/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-96">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button>Action</Button>
            </CardFooter>
        </Card>
    ),
};

export const WithForm: Story = {
    render: () => (
        <Card className="w-96">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <Stack gap="md">
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input id="name" placeholder="Name of your project" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="framework" className="text-sm font-medium">Framework</label>
                        <select id="framework" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                            <option>Next.js</option>
                            <option>SvelteKit</option>
                            <option>Nuxt.js</option>
                        </select>
                    </div>
                </Stack>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    ),
};

export const Interactive: Story = {
    render: () => (
        <Card className="w-96 cursor-pointer transition-all hover:shadow-lg">
            <CardHeader>
                <CardTitle>Hover me</CardTitle>
                <CardDescription>This card is interactive</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    This card has hover effects and can be clicked.
                </p>
            </CardContent>
        </Card>
    ),
};
