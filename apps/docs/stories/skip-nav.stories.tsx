import type { Meta, StoryObj } from "@storybook/react";
import { SkipNav } from "@acme/ui/skip-nav";
import { Stack } from "@acme/ui/primitives/stack";
import { Box } from "@acme/ui/primitives/box";

const meta = {
    title: "UI/Navigation/Skip Nav",
    component: SkipNav,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "outline"],
        },
    },
} satisfies Meta<typeof SkipNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Box>
            <SkipNav href="#main-content" targetId="main-content">
                Skip to main content
            </SkipNav>
            <Box className="min-h-screen p-8">
                <Stack gap="lg">
                    <h1 className="text-2xl font-bold">Page Title</h1>
                    <nav className="border-b pb-4">
                        <ul className="flex gap-4">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <Box id="main-content" tabIndex={-1} className="mt-8 p-4 border rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                        <p className="text-sm text-muted-foreground">
                            Press Tab when the page loads to see the skip navigation link.
                            This helps keyboard users skip repetitive navigation.
                        </p>
                    </Box>
                </Stack>
            </Box>
        </Box>
    ),
};

export const Outline: Story = {
    render: () => (
        <Box>
            <SkipNav href="#main-content" variant="outline" targetId="main-content">
                Skip to main content
            </SkipNav>
            <Box className="min-h-screen p-8">
                <Stack gap="lg">
                    <h1 className="text-2xl font-bold">Page Title</h1>
                    <nav className="border-b pb-4">
                        <ul className="flex gap-4">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <Box id="main-content" tabIndex={-1} className="mt-8 p-4 border rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                        <p className="text-sm text-muted-foreground">
                            This skip nav uses the outline variant.
                        </p>
                    </Box>
                </Stack>
            </Box>
        </Box>
    ),
};

export const MultipleSkipLinks: Story = {
    render: () => (
        <Box>
            <Stack gap="sm" className="fixed left-0 top-0 z-50">
                <SkipNav href="#main-content" targetId="main-content">
                    Skip to main content
                </SkipNav>
                <SkipNav href="#navigation" targetId="navigation">
                    Skip to navigation
                </SkipNav>
            </Stack>
            <Box className="min-h-screen p-8">
                <Box id="navigation" tabIndex={-1} className="mb-8 p-4 border rounded-md">
                    <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                    <nav>
                        <ul className="flex gap-4">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </Box>
                <Box id="main-content" tabIndex={-1} className="p-4 border rounded-md">
                    <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                    <p className="text-sm text-muted-foreground">
                        Multiple skip links allow users to jump to different sections.
                    </p>
                </Box>
            </Box>
        </Box>
    ),
};
