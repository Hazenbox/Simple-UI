import type { Meta, StoryObj } from "@storybook/react";
import {
    Toolbar,
    ToolbarButton,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem,
} from "@acme/ui/toolbar";
import { Button } from "@acme/ui/button";
import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Link,
    Image,
    Plus,
    FileText,
    Copy,
    Save,
    Play,
    ChevronDown,
    CornerDownLeft,
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
            <ToolbarButton aria-label="Bold">
                <Bold className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton aria-label="Italic">
                <Italic className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton aria-label="Underline">
                <Underline className="h-3.5 w-3.5" />
            </ToolbarButton>
        </Toolbar>
    ),
};

export const WithSeparator: Story = {
    render: () => (
        <Toolbar>
            <ToolbarButton aria-label="Bold">
                <Bold className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton aria-label="Italic">
                <Italic className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton aria-label="Underline">
                <Underline className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarButton aria-label="Insert link">
                <Link className="h-3.5 w-3.5" />
            </ToolbarButton>
            <ToolbarButton aria-label="Insert image">
                <Image className="h-3.5 w-3.5" />
            </ToolbarButton>
        </Toolbar>
    ),
};

export const WithToggleGroup: Story = {
    render: () => (
        <Toolbar>
            <ToolbarToggleGroup type="multiple">
                <ToolbarToggleItem value="bold" aria-label="Bold">
                    <Bold className="h-3.5 w-3.5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic" aria-label="Italic">
                    <Italic className="h-3.5 w-3.5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="underline" aria-label="Underline">
                    <Underline className="h-3.5 w-3.5" />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup type="single">
                <ToolbarToggleItem value="left" aria-label="Align left">
                    <AlignLeft className="h-3.5 w-3.5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="center" aria-label="Align center">
                    <AlignCenter className="h-3.5 w-3.5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="right" aria-label="Align right">
                    <AlignRight className="h-3.5 w-3.5" />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
        </Toolbar>
    ),
};

export const TextEditor: Story = {
    render: () => (
        <div className="w-full max-w-2xl space-y-3">
            <Toolbar className="w-full">
                <ToolbarToggleGroup type="multiple">
                    <ToolbarToggleItem value="bold" aria-label="Bold">
                        <Bold className="h-3.5 w-3.5" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem value="italic" aria-label="Italic">
                        <Italic className="h-3.5 w-3.5" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem
                        value="underline"
                        aria-label="Underline"
                    >
                        <Underline className="h-3.5 w-3.5" />
                    </ToolbarToggleItem>
                </ToolbarToggleGroup>

                <ToolbarSeparator />

                <ToolbarToggleGroup type="single">
                    <ToolbarToggleItem value="left" aria-label="Align left">
                        <AlignLeft className="h-3.5 w-3.5" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem
                        value="center"
                        aria-label="Align center"
                    >
                        <AlignCenter className="h-3.5 w-3.5" />
                    </ToolbarToggleItem>
                    <ToolbarToggleItem
                        value="right"
                        aria-label="Align right"
                    >
                        <AlignRight className="h-3.5 w-3.5" />
                    </ToolbarToggleItem>
                </ToolbarToggleGroup>

                <ToolbarSeparator />

                <ToolbarButton aria-label="Insert link">
                    <Link className="h-3.5 w-3.5" />
                </ToolbarButton>
                <ToolbarButton aria-label="Insert image">
                    <Image className="h-3.5 w-3.5" />
                </ToolbarButton>
            </Toolbar>

            <div className="min-h-40 rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">
                    Editor content area...
                </p>
            </div>
        </div>
    ),
};

export const WithDropdownAndButton: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            {/* Toolbar A - with action icons, execute button, toggle, and accent */}
            <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">A</span>
                <Toolbar>
                    <ToolbarButton aria-label="Add new">
                        <Plus className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarButton aria-label="Documents">
                        <FileText className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarButton aria-label="Copy">
                        <Copy className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarButton aria-label="Save">
                        <Save className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarSeparator />
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 gap-1.5 rounded-md px-2 text-xs"
                    >
                        <Play className="h-3 w-3" />
                        Execute workflow
                        <kbd className="ml-1 text-xs text-muted-foreground">
                            Ctrl
                        </kbd>
                        <CornerDownLeft className="h-3 w-3 text-muted-foreground" />
                    </Button>
                </Toolbar>
            </div>

            {/* Toolbar B - compact variant */}
            <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">B</span>
                <Toolbar>
                    <ToolbarButton aria-label="Add new">
                        <Plus className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarButton aria-label="Documents">
                        <FileText className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarButton aria-label="Copy">
                        <Copy className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarButton aria-label="Save">
                        <Save className="h-3.5 w-3.5" />
                    </ToolbarButton>
                    <ToolbarSeparator />
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 gap-1.5 rounded-md px-2 text-xs"
                    >
                        <Play className="h-3 w-3" />
                        Execute workflow
                    </Button>
                    <ToolbarSeparator />
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 gap-1 rounded-md px-2 text-xs"
                    >
                        Options
                        <ChevronDown className="h-3 w-3" />
                    </Button>
                </Toolbar>
            </div>
        </div>
    ),
};
