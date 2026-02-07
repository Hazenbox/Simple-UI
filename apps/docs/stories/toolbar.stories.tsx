import type { Meta, StoryObj } from "@storybook/react";
import {
    Toolbar,
    ToolbarButton,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem,
} from "@acme/ui/toolbar";
import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Link,
    Image,
} from "lucide-react";

const meta = {
    title: "UI/Navigation/Toolbar",
    component: Toolbar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Toolbar>
            <ToolbarButton>
                <Bold className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
                <Italic className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
                <Underline className="h-4 w-4" />
            </ToolbarButton>
        </Toolbar>
    ),
};

export const WithSeparator: Story = {
    render: () => (
        <Toolbar>
            <ToolbarButton>
                <Bold className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
                <Italic className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
                <Underline className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarButton>
                <Link className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
                <Image className="h-4 w-4" />
            </ToolbarButton>
        </Toolbar>
    ),
};

export const WithToggleGroup: Story = {
    render: () => (
        <Toolbar>
            <ToolbarToggleGroup type="multiple">
                <ToolbarToggleItem value="bold">
                    <Bold className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic">
                    <Italic className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="underline">
                    <Underline className="h-4 w-4" />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup type="single">
                <ToolbarToggleItem value="left">
                    <AlignLeft className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="center">
                    <AlignCenter className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="right">
                    <AlignRight className="h-4 w-4" />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
        </Toolbar>
    ),
};

export const TextEditor: Story = {
    render: () => (
        <div className="w-full max-w-2xl space-y-4">
            <Toolbar className="w-full">
                <ToolbarToggleGroup type="multiple">
                    <ToolbarToggleItem value="bold" aria-label="Bold">
                        <Bold className="h-4 w-4" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem value="italic" aria-label="Italic">
                        <Italic className="h-4 w-4" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem value="underline" aria-label="Underline">
                        <Underline className="h-4 w-4" />
                    </ToolbarToggleItem>
                </ToolbarToggleGroup>

                <ToolbarSeparator />

                <ToolbarToggleGroup type="single">
                    <ToolbarToggleItem value="left" aria-label="Align left">
                        <AlignLeft className="h-4 w-4" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem value="center" aria-label="Align center">
                        <AlignCenter className="h-4 w-4" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem value="right" aria-label="Align right">
                        <AlignRight className="h-4 w-4" />
                    </ToolbarToggleItem>
                </ToolbarToggleGroup>

                <ToolbarSeparator />

                <ToolbarButton aria-label="Insert link">
                    <Link className="h-4 w-4" />
                </ToolbarButton>
                <ToolbarButton aria-label="Insert image">
                    <Image className="h-4 w-4" />
                </ToolbarButton>
            </Toolbar>

            <div className="min-h-[200px] rounded-md border p-4">
                <p className="text-muted-foreground">Editor content area...</p>
            </div>
        </div>
    ),
};
