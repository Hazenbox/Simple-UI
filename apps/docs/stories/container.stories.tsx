import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@acme/ui/container";

const meta = {
    title: "UI/Layout/Container",
    component: Container,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="bg-muted/50 p-8">
            <Container>
                <div className="rounded-lg border bg-background p-6">
                    <h2 className="mb-2 text-2xl font-bold">Default Container</h2>
                    <p className="text-muted-foreground">
                        This container has a max-width of lg (1024px) with responsive padding.
                    </p>
                </div>
            </Container>
        </div>
    ),
};

export const Small: Story = {
    render: () => (
        <div className="bg-muted/50 p-8">
            <Container size="sm">
                <div className="rounded-lg border bg-background p-6">
                    <h2 className="mb-2 text-2xl font-bold">Small Container</h2>
                    <p className="text-muted-foreground">
                        Max-width: 640px - Perfect for focused content like articles.
                    </p>
                </div>
            </Container>
        </div>
    ),
};

export const ExtraLarge: Story = {
    render: () => (
        <div className="bg-muted/50 p-8">
            <Container size="2xl">
                <div className="rounded-lg border bg-background p-6">
                    <h2 className="mb-2 text-2xl font-bold">Extra Large Container</h2>
                    <p className="text-muted-foreground">
                        Max-width: 1536px - Great for dashboards and wide layouts.
                    </p>
                </div>
            </Container>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="space-y-8 bg-muted/50 p-8">
            <Container size="sm">
                <div className="rounded-lg border bg-background p-4">
                    <p className="text-sm font-medium">Small (640px)</p>
                </div>
            </Container>
            <Container size="md">
                <div className="rounded-lg border bg-background p-4">
                    <p className="text-sm font-medium">Medium (768px)</p>
                </div>
            </Container>
            <Container size="lg">
                <div className="rounded-lg border bg-background p-4">
                    <p className="text-sm font-medium">Large (1024px)</p>
                </div>
            </Container>
            <Container size="xl">
                <div className="rounded-lg border bg-background p-4">
                    <p className="text-sm font-medium">Extra Large (1280px)</p>
                </div>
            </Container>
            <Container size="2xl">
                <div className="rounded-lg border bg-background p-4">
                    <p className="text-sm font-medium">2X Large (1536px)</p>
                </div>
            </Container>
        </div>
    ),
};
