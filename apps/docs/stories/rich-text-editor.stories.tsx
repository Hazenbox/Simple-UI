import type { Meta, StoryObj } from "@storybook/react";
import { RichTextEditor } from "@acme/ui/rich-text-editor";
import { useState } from "react";

const meta = {
    title: "UI/Input/Rich Text Editor",
    component: RichTextEditor,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <div className="w-[600px]">
                <RichTextEditor value={value} onValueChange={setValue} />
            </div>
        );
    },
};

export const WithInitialContent: Story = {
    render: () => {
        const [value, setValue] = useState(
            "<h1>Welcome to the Editor</h1><p>Start typing to create your content...</p>"
        );
        return (
            <div className="w-[600px]">
                <RichTextEditor value={value} onValueChange={setValue} />
            </div>
        );
    },
};

export const BlogPost: Story = {
    render: () => {
        const [value, setValue] = useState(
            "<h1>My Blog Post</h1><p>This is a sample blog post with <strong>bold text</strong> and <em>italic text</em>.</p><ul><li>First point</li><li>Second point</li></ul>"
        );
        return (
            <div className="w-[700px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Write Your Post</h3>
                    <p className="text-xs text-muted-foreground">
                        Use the toolbar to format your content
                    </p>
                </div>
                <RichTextEditor value={value} onValueChange={setValue} />
            </div>
        );
    },
};

export const CommentEditor: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <div className="w-[500px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Add a Comment</h3>
                    <p className="text-xs text-muted-foreground">
                        Share your thoughts
                    </p>
                </div>
                <RichTextEditor
                    value={value}
                    onValueChange={setValue}
                    className="min-h-[150px]"
                />
            </div>
        );
    },
};
