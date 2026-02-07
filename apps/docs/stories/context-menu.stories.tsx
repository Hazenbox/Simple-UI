import type { Meta, StoryObj } from "@storybook/react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuSeparator,
    ContextMenuCheckboxItem,
    ContextMenuLabel,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuShortcut,
    ContextMenuGroup,
} from "@acme/ui/context-menu";
import {
    ArrowLeft,
    ArrowRight,
    RefreshCw,
    Save,
    Printer,
    Copy,
    Scissors,
    ClipboardPaste,
    Bookmark,
    Clock,
    Globe,
    MapPin,
    Map,
    Share2,
    Search,
} from "lucide-react";

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
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
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
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
                Right click for options
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                    Show Toolbar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>
                    Show Sidebar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked>
                    Show Status Bar
                </ContextMenuCheckboxItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithSubmenu: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
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
                        <ContextMenuItem>
                            Create Shortcut...
                        </ContextMenuItem>
                        <ContextMenuItem>Name Window...</ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
                Right click for icons menu
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>
                    <ArrowLeft />
                    Back
                    <ContextMenuShortcut>Alt+Left</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                    <ArrowRight />
                    Forward
                    <ContextMenuShortcut>Alt+Right</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                    <RefreshCw />
                    Reload
                    <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                    <Save />
                    Save Page As...
                </ContextMenuItem>
                <ContextMenuItem>
                    <Printer />
                    Print...
                    <ContextMenuShortcut>Ctrl+P</ContextMenuShortcut>
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithIconsAndBadges: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
                Right click for full menu
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
                <ContextMenuItem>
                    <Bookmark />
                    Save
                </ContextMenuItem>
                <ContextMenuItem>
                    <Clock />
                    Recents
                    <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        3
                    </span>
                </ContextMenuItem>
                <ContextMenuItem>
                    <Globe />
                    Your contributions
                    <span className="ml-auto rounded-md bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                        New
                    </span>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                    <MapPin />
                    Location sharing
                </ContextMenuItem>
                <ContextMenuItem>
                    <Map />
                    Your timeline
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithSearchBar: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
                Right click for searchable menu
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
                <div
                    className="flex items-center gap-2 rounded-lg border bg-background px-2 py-1 mx-1 mb-1"
                    onFocusCapture={(e) => e.stopPropagation()}
                >
                    <Search className="h-3.5 w-3.5 text-muted-foreground" />
                    <input
                        className="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
                        placeholder="Search..."
                        onKeyDown={(e) => e.stopPropagation()}
                    />
                    <kbd className="font-mono text-xs text-muted-foreground">
                        Ctrl+K
                    </kbd>
                </div>
                <ContextMenuSeparator />
                <ContextMenuItem>
                    <Share2 />
                    Share or embed map
                </ContextMenuItem>
                <ContextMenuItem>
                    <Printer />
                    Print
                </ContextMenuItem>
                <ContextMenuItem>
                    <Map />
                    Edit the map
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithSections: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-lg border border-dashed text-xs">
                Right click for sectioned menu
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
                <ContextMenuGroup>
                    <ContextMenuLabel className="text-xs font-medium text-muted-foreground">
                        Edit
                    </ContextMenuLabel>
                    <ContextMenuItem>
                        <Copy />
                        Copy
                        <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        <Scissors />
                        Cut
                        <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        <ClipboardPaste />
                        Paste
                        <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                    <ContextMenuLabel className="text-xs font-medium text-muted-foreground">
                        Navigate
                    </ContextMenuLabel>
                    <ContextMenuItem>
                        <ArrowLeft />
                        Back
                    </ContextMenuItem>
                    <ContextMenuItem>
                        <ArrowRight />
                        Forward
                    </ContextMenuItem>
                    <ContextMenuItem>
                        <RefreshCw />
                        Reload
                    </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                    <ContextMenuLabel className="text-xs font-medium text-muted-foreground">
                        Tools
                    </ContextMenuLabel>
                    <ContextMenuItem>
                        <Save />
                        Save Page As...
                    </ContextMenuItem>
                    <ContextMenuItem>
                        <Printer />
                        Print
                    </ContextMenuItem>
                </ContextMenuGroup>
            </ContextMenuContent>
        </ContextMenu>
    ),
};
