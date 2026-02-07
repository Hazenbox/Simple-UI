import type { Meta, StoryObj } from "@storybook/react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@acme/ui/navigation-menu";
import {
    Layout,
    Layers,
    Zap,
    Palette,
    Code,
    Box,
    Image,
    BarChart,
    Settings,
    BookOpen,
} from "lucide-react";

const meta = {
    title: "UI/Navigation/NavigationMenu",
    component: NavigationMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Getting started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-3 md:w-[350px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-1 mt-3 text-sm font-medium">
                                            Simple UI
                                        </div>
                                        <p className="text-xs leading-tight text-muted-foreground">
                                            Beautifully designed components
                                            built with Radix UI and Tailwind
                                            CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/docs"
                                        className="block select-none space-y-0.5 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-xs font-medium leading-none">
                                            Introduction
                                        </div>
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                            Re-usable components built using
                                            Radix UI and Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/docs/installation"
                                        className="block select-none space-y-0.5 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-xs font-medium leading-none">
                                            Installation
                                        </div>
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                            How to install dependencies and
                                            structure your app.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[350px] gap-2 p-3 md:w-[400px] md:grid-cols-2">
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/docs/primitives/alert-dialog"
                                        className="block select-none space-y-0.5 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-xs font-medium leading-none">
                                            Alert Dialog
                                        </div>
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                            A modal dialog that interrupts the
                                            user with important content.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/docs/primitives/hover-card"
                                        className="block select-none space-y-0.5 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-xs font-medium leading-none">
                                            Hover Card
                                        </div>
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                            For sighted users to preview
                                            content available behind a link.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    ),
};

export const WithImageAndIcons: Story = {
    render: () => (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-2 p-3 md:w-[450px] lg:grid-cols-[200px_1fr]">
                            {/* Image placeholder */}
                            <div className="row-span-3 flex items-center justify-center rounded-md bg-muted">
                                <Image className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <ul className="grid gap-1">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href="/products/design"
                                            className="flex items-center gap-2 rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <Palette className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                            <div>
                                                <div className="font-medium">
                                                    Design System
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Tokens, components, and
                                                    patterns
                                                </p>
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href="/products/components"
                                            className="flex items-center gap-2 rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <Box className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                            <div>
                                                <div className="font-medium">
                                                    Components
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Ready-to-use UI
                                                    building blocks
                                                </p>
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href="/products/templates"
                                            className="flex items-center gap-2 rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <Layout className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                            <div>
                                                <div className="font-medium">
                                                    Templates
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Pre-built page layouts
                                                </p>
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[350px] gap-1 p-3 md:w-[400px] md:grid-cols-2">
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/features/analytics"
                                        className="flex items-center gap-2 rounded-md p-2 text-xs no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <BarChart className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                        <span className="font-medium">
                                            Analytics
                                        </span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/features/performance"
                                        className="flex items-center gap-2 rounded-md p-2 text-xs no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Zap className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                        <span className="font-medium">
                                            Performance
                                        </span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/features/code"
                                        className="flex items-center gap-2 rounded-md p-2 text-xs no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Code className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                        <span className="font-medium">
                                            Developer API
                                        </span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/features/layers"
                                        className="flex items-center gap-2 rounded-md p-2 text-xs no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Layers className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                        <span className="font-medium">
                                            Integrations
                                        </span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/features/settings"
                                        className="flex items-center gap-2 rounded-md p-2 text-xs no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Settings className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                        <span className="font-medium">
                                            Settings
                                        </span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        href="/features/docs"
                                        className="flex items-center gap-2 rounded-md p-2 text-xs no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <BookOpen className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                                        <span className="font-medium">
                                            Documentation
                                        </span>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    ),
};
