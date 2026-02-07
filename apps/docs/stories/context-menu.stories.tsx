import type { Meta, StoryObj } from "@storybook/react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuSeparator,
    ContextMenuCheckboxItem,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
} from "@acme/ui/context-menu";

const meta = {
    title: "UI/Navigation/ContextMenu",
    component: ContextMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Back</ContextMenuItem>
                <ContextMenuItem>Forward</ContextMenuItem>
                <ContextMenuItem>Reload</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Print...</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithCheckboxes: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm">
                Right click for options
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>Show Toolbar</ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked>Show Status Bar</ContextMenuCheckboxItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithSubmenu: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm">
                Right click for menu
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Copy</ContextMenuItem>
                <ContextMenuItem>Cut</ContextMenuItem>
                <ContextMenuItem>Paste</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                    <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent>
                        <ContextMenuItem>Save Page As...</ContextMenuItem>
                        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                        <ContextMenuItem>Name Window...</ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
            </ContextMenuContent>
        </ContextMenu>
    ),
};
