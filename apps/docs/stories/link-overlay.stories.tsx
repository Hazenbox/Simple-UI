import type { Meta, StoryObj } from "@storybook/react";
import { LinkOverlay } from "@acme/ui/link-overlay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@acme/ui/card";
import { Stack } from "@acme/ui/primitives/stack";
import { Box } from "@acme/ui/primitives/box";

const meta = {
    title: "UI/Navigation/Link Overlay",
    component: LinkOverlay,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        external: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof LinkOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Box className="relative w-80">
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">This entire card is clickable via the link overlay.</p>
                </CardContent>
            </Card>
            <LinkOverlay href="https://example.com">
                <span className="sr-only">Navigate to example.com</span>
            </LinkOverlay>
        </Box>
    ),
};

export const ExternalLink: Story = {
    render: () => (
        <Box className="relative w-80">
            <Card>
                <CardHeader>
                    <CardTitle>External Link</CardTitle>
                    <CardDescription>Opens in new tab</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">This card links to an external website.</p>
                </CardContent>
            </Card>
            <LinkOverlay href="https://example.com" external>
                <span className="sr-only">Navigate to example.com (opens in new tab)</span>
            </LinkOverlay>
        </Box>
    ),
};

export const MultipleCards: Story = {
    render: () => (
        <Stack gap="md" className="w-96">
            <Box className="relative">
                <Card>
                    <CardHeader>
                        <CardTitle>Card 1</CardTitle>
                        <CardDescription>First card</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">Click anywhere on this card to navigate.</p>
                    </CardContent>
                </Card>
                <LinkOverlay href="#card1" />
            </Box>
            <Box className="relative">
                <Card>
                    <CardHeader>
                        <CardTitle>Card 2</CardTitle>
                        <CardDescription>Second card</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">Click anywhere on this card to navigate.</p>
                    </CardContent>
                </Card>
                <LinkOverlay href="#card2" />
            </Box>
        </Stack>
    ),
};
