import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@acme/ui/typography";
import { Stack } from "@acme/ui/primitives/stack";

const meta = {
    title: "UI/Typography",
    component: Typography,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [
                "h1", "h2", "h3", "h4", "h5", "h6",
                "p", "blockquote", "ul", "ol", "code",
                "lead", "large", "small", "muted", "link"
            ],
        },
    },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "p",
        children: "This is a paragraph",
    },
};

export const Headings: Story = {
    render: () => (
        <Stack gap="lg" className="w-96">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
        </Stack>
    ),
};

export const TextVariants: Story = {
    render: () => (
        <Stack gap="md" className="w-96">
            <Typography variant="lead">
                This is a lead paragraph. It's larger and used for introductory text.
            </Typography>
            <Typography variant="p">
                This is a regular paragraph with normal text size and spacing.
            </Typography>
            <Typography variant="small">
                This is small text, typically used for captions or secondary information.
            </Typography>
            <Typography variant="muted">
                This is muted text with reduced opacity for less emphasis.
            </Typography>
            <Typography variant="link" as="a" href="#">
                This is a link variant
            </Typography>
        </Stack>
    ),
};

export const Blockquote: Story = {
    render: () => (
        <Stack gap="md" className="w-96">
            <Typography variant="blockquote">
                "The only way to do great work is to love what you do."
            </Typography>
        </Stack>
    ),
};

export const Lists: Story = {
    render: () => (
        <Stack gap="lg" className="w-96">
            <div>
                <Typography variant="h4">Unordered List</Typography>
                <Typography variant="ul">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </Typography>
            </div>
            <div>
                <Typography variant="h4">Ordered List</Typography>
                <Typography variant="ol">
                    <li>First step</li>
                    <li>Second step</li>
                    <li>Third step</li>
                </Typography>
            </div>
        </Stack>
    ),
};

export const Code: Story = {
    render: () => (
        <Stack gap="md" className="w-96">
            <Typography variant="p">
                Use the <Typography variant="code">Typography</Typography> component to style text.
            </Typography>
            <Typography variant="p">
                Inline code: <Typography variant="code">const x = 42;</Typography>
            </Typography>
        </Stack>
    ),
};

export const SemanticHTML: Story = {
    render: () => (
        <Stack gap="md" className="w-96">
            <Typography variant="h1" as="h1">
                Semantic Heading 1
            </Typography>
            <Typography variant="h2" as="h2">
                Semantic Heading 2
            </Typography>
            <Typography variant="p" as="p">
                This paragraph uses semantic HTML with the as prop.
            </Typography>
        </Stack>
    ),
};
