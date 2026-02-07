import type { Meta, StoryObj } from "@storybook/react";
import { TextareaAutosize } from "@acme/ui/textarea-autosize";
import { Stack } from "@acme/ui/primitives/stack";
import { Label } from "@acme/ui/label";

const meta = {
    title: "UI/Form/Textarea Autosize",
    component: TextareaAutosize,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        minRows: {
            control: { type: "number", min: 1, max: 10 },
        },
        maxRows: {
            control: { type: "number", min: 1, max: 20 },
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg"],
        },
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof TextareaAutosize>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Type your message...",
        minRows: 2,
        maxRows: 10,
    },
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label htmlFor="message">Message</Label>
            <TextareaAutosize
                id="message"
                placeholder="Type your message..."
                minRows={3}
                maxRows={8}
            />
        </Stack>
    ),
};

export const Small: Story = {
    args: {
        placeholder: "Small textarea...",
        size: "sm",
        minRows: 2,
        maxRows: 6,
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <TextareaAutosize size="sm" placeholder="Small" minRows={2} maxRows={4} />
            <TextareaAutosize size="default" placeholder="Default" minRows={2} maxRows={4} />
            <TextareaAutosize size="lg" placeholder="Large" minRows={2} maxRows={4} />
        </Stack>
    ),
};

export const LongText: Story = {
    args: {
        placeholder: "Type a long message...",
        minRows: 3,
        maxRows: 10,
        defaultValue: "This is a longer text that will demonstrate how the textarea autosize feature works. As you type more content, the textarea will automatically expand to accommodate the text, up to the maximum number of rows specified.",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled textarea",
        disabled: true,
    },
};
