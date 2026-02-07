import type { Meta, StoryObj } from "@storybook/react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
    MenubarCheckboxItem,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarShortcut,
} from "@acme/ui/menubar";
import {
    File,
    Edit,
    Eye,
    HelpCircle,
    Plus,
    FolderOpen,
    Save,
    Printer,
    Undo,
    Redo,
    Scissors,
    Copy,
    ClipboardPaste,
    Maximize,
} from "lucide-react";

const meta = {
    title: "UI/Navigation/Menubar",
    component: Menubar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem checked>
                        Show Toolbar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem>Enter Full Screen</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    ),
};

export const WithSubmenu: Story = {
    render: () => (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New File</MenubarItem>
                    <MenubarSub>
                        <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Document 1.pdf</MenubarItem>
                            <MenubarItem>Document 2.pdf</MenubarItem>
                            <MenubarItem>Document 3.pdf</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Save</MenubarItem>
                    <MenubarItem>Export</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <File />
                    File
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Plus />
                        New File
                        <MenubarShortcut>Ctrl+N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        <FolderOpen />
                        Open...
                        <MenubarShortcut>Ctrl+O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        <Save />
                        Save
                        <MenubarShortcut>Ctrl+S</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Printer />
                        Print
                        <MenubarShortcut>Ctrl+P</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <Edit />
                    Edit
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Undo />
                        Undo
                        <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        <Redo />
                        Redo
                        <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Scissors />
                        Cut
                    </MenubarItem>
                    <MenubarItem>
                        <Copy />
                        Copy
                    </MenubarItem>
                    <MenubarItem>
                        <ClipboardPaste />
                        Paste
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <Eye />
                    View
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem checked>
                        Show Toolbar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Maximize />
                        Full Screen
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <HelpCircle />
                    Help
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>Release Notes</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>About</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    ),
};

export const WithIconOnly: Story = {
    render: () => (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger aria-label="File">
                    <File />
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New File</MenubarItem>
                    <MenubarItem>Open...</MenubarItem>
                    <MenubarItem>Save</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger aria-label="Edit">
                    <Edit />
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger aria-label="View">
                    <Eye />
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem checked>
                        Show Toolbar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger aria-label="Help">
                    <HelpCircle />
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>About</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    ),
};
