import type { Meta, StoryObj } from "@storybook/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuShortcut,
    DropdownMenuGroup,
} from "@acme/ui/dropdown-menu";
import { Button } from "@acme/ui/button";
import {
    User,
    CreditCard,
    Users,
    Settings,
    LogOut,
    Plus,
    Bookmark,
    Clock,
    Globe,
    MapPin,
    Map,
    FileText,
    Mail,
    MessageSquare,
    PlusCircle,
    UserPlus,
} from "lucide-react";

const meta = {
    title: "UI/Navigation/DropdownMenu",
    component: DropdownMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    Open
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithCheckboxes: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    View Options
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                    Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                    Panel
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithRadioGroup: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    Position
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="bottom">
                    <DropdownMenuRadioItem value="top">
                        Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                        Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                        Right
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithSubmenu: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    File
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>New File</DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        Open Recent
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Document 1</DropdownMenuItem>
                        <DropdownMenuItem>Document 2</DropdownMenuItem>
                        <DropdownMenuItem>Document 3</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Save</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    My Account
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User />
                    Profile
                    <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CreditCard />
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Users />
                    Team
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings />
                    Settings
                    <DropdownMenuShortcut>Ctrl+,</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut />
                    Log out
                    <DropdownMenuShortcut>Ctrl+Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithIconsAndBadges: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    Menu
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuItem>
                    <Bookmark />
                    Save
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Clock />
                    Recents
                    <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        3
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Globe />
                    Your contributions
                    <span className="ml-auto rounded-md bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                        New
                    </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <MapPin />
                    Location sharing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Map />
                    Your timeline
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithSections: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 text-xs">
                    Actions
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                        Create
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Plus />
                        New Document
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <PlusCircle />
                        New Project
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <UserPlus />
                        Invite Member
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                        Communication
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Mail />
                        Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MessageSquare />
                        Start Chat
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                        Resources
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <FileText />
                        Documentation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};
