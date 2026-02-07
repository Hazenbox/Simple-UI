import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@acme/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@acme/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@acme/ui/alert-dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover"
import { Progress } from "@acme/ui/progress"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@acme/ui/sheet"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@acme/ui/tooltip"
import { toast } from "sonner"
import { Toaster } from "@acme/ui/toaster"

// Phase 8 Imports
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@acme/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@acme/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@acme/ui/hover-card"
import { Calendar } from "@acme/ui/calendar"
import { DatePicker } from "@acme/ui/date-picker"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@acme/ui/input-otp"
// Phase 9 Imports
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@acme/ui/dropdown-menu"
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@acme/ui/context-menu"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@acme/ui/menubar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@acme/ui/navigation-menu"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@acme/ui/carousel"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@acme/ui/chart"
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    Area,
    AreaChart,
} from "recharts"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@acme/ui/breadcrumb"
import { ScrollArea } from "@acme/ui/scroll-area"
import { Separator } from "@acme/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@acme/ui/tabs"
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Switch,
    Checkbox,
    RadioGroup,
    RadioGroupItem,
    Slider,
    Badge,
    Skeleton,
    Spinner,
    Textarea,
    DataTable,
    // Command
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    // Form
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    // Primitives
    Box,
    Stack,
    Grid,
} from "@acme/ui";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const meta: Meta = {
    title: "Verification/Kitchen Sink",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj;


// --- Mock Form ---
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    notifications: z.boolean(),
    theme: z.enum(["light", "dark", "system"]),
})

const advancedFormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    bio: z.string().max(160).min(4),
    marketing_emails: z.boolean(),
    security_emails: z.boolean(),
    type: z.enum(["all", "mentions", "none"]),
    category: z.string().min(1, {
        message: "Please select a category.",
    }),
})

function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            notifications: true,
            theme: "system",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }: { field: ControllerRenderProps<any, any> }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: { field: ControllerRenderProps<any, any> }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="m@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Stack direction="row" gap="md" align="center">
                    <FormField
                        control={form.control}
                        name="notifications"
                        render={({ field }: { field: ControllerRenderProps<any, any> }) => (
                            <FormItem className="flex items-center gap-2 space-y-0">
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel>Enable Notifications</FormLabel>
                            </FormItem>
                        )}
                    />
                </Stack>
                <FormField
                    control={form.control}
                    name="theme"
                    render={({ field }: { field: ControllerRenderProps<any, any> }) => (
                        <FormItem>
                            <FormLabel>Theme</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a theme" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Update Profile</Button>
            </form>
        </Form>
    );
}

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--primary))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--secondary))",
    },
} satisfies ChartConfig



type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "success",
        email: "example@gmail.com",
    },
    {
        id: "8f1a2b3c",
        amount: 250,
        status: "processing",
        email: "test@hazen.com",
    },
    {
        id: "2c3d4e5f",
        amount: 50,
        status: "failed",
        email: "user@domain.com",
    },
    {
        id: "1a2b3c4d",
        amount: 450,
        status: "success",
        email: "admin@acme.ui",
    },
]

const columns = [
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }: { row: any }) => (
            <Badge variant={row.getValue("status") === "success" ? "default" : "secondary"}>
                {row.getValue("status")}
            </Badge>
        ),
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }: { row: any }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]

export const Dashboard: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false)
        const [isLoading, setIsLoading] = React.useState(false)

        const advancedForm = useForm<z.infer<typeof advancedFormSchema>>({
            resolver: zodResolver(advancedFormSchema),
            defaultValues: {
                username: "jdoe",
                email: "jdoe@example.com",
                bio: "Frontend engineer building Simple UI.",
                marketing_emails: false,
                security_emails: true,
                type: "all",
                category: "personal",
            },
        })

        function onAdvancedSubmit(data: z.infer<typeof advancedFormSchema>) {
            toast.success("Profile updated", {
                description: JSON.stringify(data, null, 2),
            })
        }

        React.useEffect(() => {
            const down = (e: KeyboardEvent) => {
                if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    setOpen((open) => !open)
                }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
        }, [])

        return (
            <TooltipProvider>
                <Toaster />
                <Box className="min-h-screen bg-muted/20 p-8">
                    <Stack gap="lg" className="mx-auto max-w-6xl">
                        {/* Hero Alert */}
                        <Alert>
                            <AlertTitle>System Update</AlertTitle>
                            <AlertDescription>
                                We've successfully deployed Phase 7: Feedback & Interaction components.
                            </AlertDescription>
                        </Alert>

                        {/* Navigation Menu Showcase */}
                        <div className="flex w-full justify-center rounded-lg border bg-background p-2">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                Simple UI
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully designed components built with Radix UI and Tailwind CSS.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <NavigationMenuLink asChild>
                                                    <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        <div className="text-sm font-medium leading-none">Introduction</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Re-usable components built using Radix UI and Tailwind CSS.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <a href="/docs/installation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        <div className="text-sm font-medium leading-none">Installation</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            How to install dependencies and structure your app.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {["Alert", "Button", "Card", "Dialog"].map((component) => (
                                                    <li key={component}>
                                                        <NavigationMenuLink asChild>
                                                            <a href={`/docs/components/${component.toLowerCase()}`} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">{component}</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                    Explore the {component} component.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
                                            Documentation
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* Menubar Showcase */}
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarSub>
                                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Email link</MenubarItem>
                                            <MenubarItem>Messages</MenubarItem>
                                            <MenubarItem>Notes</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>

                        {/* Header */}
                        <Stack direction="row" justify="between" align="center">
                            <Stack gap="xs">
                                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                                <p className="text-muted-foreground">
                                    Welcome back to your comprehensive design system overview.
                                </p>
                            </Stack>
                            <Stack direction="row" gap="sm">
                                <Button variant="outline">Download</Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button>Create New</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Project Types</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                Next.js App
                                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Vite Project
                                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            Custom Template
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </Stack>
                        </Stack>

                        {/* Stats Grid using Cards */}
                        <Grid columns={4} gap="md">
                            {[1, 2, 3, 4].map((i) => (
                                <ContextMenu key={i}>
                                    <ContextMenuTrigger asChild>
                                        <Card className="cursor-context-menu">
                                            <CardHeader className="pb-2">
                                                <CardDescription>Total Revenue</CardDescription>
                                                <CardTitle className="text-2xl">$45,231.89</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                            </CardContent>
                                        </Card>
                                    </ContextMenuTrigger>
                                    <ContextMenuContent className="w-64">
                                        <ContextMenuItem inset>
                                            View Details
                                            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                                        </ContextMenuItem>
                                        <ContextMenuItem inset>
                                            Export CSV
                                        </ContextMenuItem>
                                        <ContextMenuSeparator />
                                        <ContextMenuSub>
                                            <ContextMenuSubTrigger inset>Insights</ContextMenuSubTrigger>
                                            <ContextMenuSubContent className="w-48">
                                                <ContextMenuItem>AI Summary</ContextMenuItem>
                                                <ContextMenuItem>Historical Data</ContextMenuItem>
                                            </ContextMenuSubContent>
                                        </ContextMenuSub>
                                    </ContextMenuContent>
                                </ContextMenu>
                            ))}
                        </Grid>

                        {/* Carousel Showcase */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Featured Components</CardTitle>
                                <CardDescription>Explore our latest complex additions.</CardDescription>
                            </CardHeader>
                            <CardContent className="px-12">
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent className="flex aspect-video items-center justify-center p-6">
                                                            <span className="text-3xl font-semibold">Slide {index + 1}</span>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </CardContent>
                        </Card>

                        <Grid columns={12} gap="lg">
                            {/* Main Content Area - Phase 6-8 Showcases */}
                            <Box className="col-span-12 space-y-8 rounded-xl border bg-card p-6 lg:col-span-8">
                                <Stack gap="sm">
                                    <h3 className="text-lg font-semibold">Quick Navigation</h3>
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/docs">Components</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Kitchen Sink</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </Stack>

                                <Tabs defaultValue="overview" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="overview">Overview</TabsTrigger>
                                        <TabsTrigger value="actions">System Actions</TabsTrigger>
                                        <TabsTrigger value="settings">Settings & Profile</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="overview">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>System Health</CardTitle>
                                                <CardDescription>Monitoring real-time deployment status.</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Stack gap="md">
                                                    <Stack gap="xs">
                                                        <div className="flex justify-between text-xs font-medium">
                                                            <span>Phase 10 Completion</span>
                                                            <span>85%</span>
                                                        </div>
                                                        <Progress value={85} />
                                                    </Stack>
                                                    <div className="h-[200px] w-full">
                                                        <ChartContainer config={chartConfig}>
                                                            <AreaChart
                                                                data={chartData}
                                                                margin={{
                                                                    left: 12,
                                                                    right: 12,
                                                                }}
                                                            >
                                                                <CartesianGrid vertical={false} />
                                                                <XAxis
                                                                    dataKey="month"
                                                                    tickLine={false}
                                                                    axisLine={false}
                                                                    tickMargin={8}
                                                                    tickFormatter={(value) => value.slice(0, 3)}
                                                                />
                                                                <ChartTooltip
                                                                    cursor={false}
                                                                    content={<ChartTooltipContent indicator="dot" />}
                                                                />
                                                                <Area
                                                                    dataKey="mobile"
                                                                    type="natural"
                                                                    fill="var(--color-mobile)"
                                                                    fillOpacity={0.4}
                                                                    stroke="var(--color-mobile)"
                                                                    stackId="a"
                                                                />
                                                                <Area
                                                                    dataKey="desktop"
                                                                    type="natural"
                                                                    fill="var(--color-desktop)"
                                                                    fillOpacity={0.4}
                                                                    stroke="var(--color-desktop)"
                                                                    stackId="a"
                                                                />
                                                            </AreaChart>
                                                        </ChartContainer>
                                                    </div>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="actions">
                                        <Box border="default" padding="md" radius="md">
                                            <div className="flex flex-wrap gap-2">
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="destructive">Reset System</Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete your
                                                                system configuration and logs.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction>Continue</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>

                                                <Sheet>
                                                    <SheetTrigger asChild>
                                                        <Button variant="outline">View Settings</Button>
                                                    </SheetTrigger>
                                                    <SheetContent side="right">
                                                        <SheetHeader>
                                                            <SheetTitle>System Settings</SheetTitle>
                                                            <SheetDescription>
                                                                Configure your design system preferences here.
                                                            </SheetDescription>
                                                        </SheetHeader>
                                                        <div className="py-6">
                                                            <Stack gap="md">
                                                                <p className="text-sm text-muted-foreground">
                                                                    Settings panels are perfect for complex configurations that don't fit in modals.
                                                                </p>
                                                            </Stack>
                                                        </div>
                                                    </SheetContent>
                                                </Sheet>

                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button variant="outline" size="icon">?</Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Need help?</p>
                                                    </TooltipContent>
                                                </Tooltip>

                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button variant="outline">Info</Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <Stack gap="sm">
                                                            <h4 className="font-medium leading-none">Popover Title</h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                Contextual information that remains open until interaction.
                                                            </p>
                                                        </Stack>
                                                    </PopoverContent>
                                                </Popover>

                                                <Button
                                                    variant="outline"
                                                    onClick={() => toast.success("System updated successfully!", {
                                                        description: "Phase 8 components are now ready for use."
                                                    })}
                                                >
                                                    Show Notification
                                                </Button>
                                            </div>
                                        </Box>
                                    </TabsContent>
                                    <TabsContent value="settings">
                                        <Stack gap="lg">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Advanced Profile Settings</CardTitle>
                                                    <CardDescription>
                                                        Manage your account preferences and notification settings.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Form {...advancedForm}>
                                                        <form onSubmit={advancedForm.handleSubmit(onAdvancedSubmit)} className="space-y-6">
                                                            <Grid columns={2} gap="md">
                                                                <FormField
                                                                    control={advancedForm.control}
                                                                    name="username"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel>Username</FormLabel>
                                                                            <FormControl>
                                                                                <Input placeholder="@username" {...field} />
                                                                            </FormControl>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <FormField
                                                                    control={advancedForm.control}
                                                                    name="category"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel>Category</FormLabel>
                                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                                <FormControl>
                                                                                    <SelectTrigger>
                                                                                        <SelectValue placeholder="Select a category" />
                                                                                    </SelectTrigger>
                                                                                </FormControl>
                                                                                <SelectContent>
                                                                                    <SelectItem value="personal">Personal</SelectItem>
                                                                                    <SelectItem value="work">Work</SelectItem>
                                                                                    <SelectItem value="other">Other</SelectItem>
                                                                                </SelectContent>
                                                                            </Select>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            </Grid>

                                                            <FormField
                                                                control={advancedForm.control}
                                                                name="bio"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Bio</FormLabel>
                                                                        <FormControl>
                                                                            <Textarea
                                                                                placeholder="Tell us a little bit about yourself"
                                                                                className="resize-none"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormDescription>
                                                                            You can <span>@mention</span> other users and organizations.
                                                                        </FormDescription>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />

                                                            <Stack gap="md">
                                                                <h4 className="text-sm font-medium">Notifications</h4>
                                                                <FormField
                                                                    control={advancedForm.control}
                                                                    name="marketing_emails"
                                                                    render={({ field }) => (
                                                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                                                            <div className="space-y-0.5">
                                                                                <FormLabel>Marketing emails</FormLabel>
                                                                                <FormDescription>
                                                                                    Receive emails about new products, features, and more.
                                                                                </FormDescription>
                                                                            </div>
                                                                            <FormControl>
                                                                                <Switch
                                                                                    checked={field.value}
                                                                                    onCheckedChange={field.onChange}
                                                                                />
                                                                            </FormControl>
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <FormField
                                                                    control={advancedForm.control}
                                                                    name="security_emails"
                                                                    render={({ field }) => (
                                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value}
                                                                                    onCheckedChange={field.onChange}
                                                                                />
                                                                            </FormControl>
                                                                            <div className="space-y-1 leading-none">
                                                                                <FormLabel>Security emails</FormLabel>
                                                                                <FormDescription>
                                                                                    Receive emails about your account security.
                                                                                </FormDescription>
                                                                            </div>
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            </Stack>

                                                            <FormField
                                                                control={advancedForm.control}
                                                                name="type"
                                                                render={({ field }) => (
                                                                    <FormItem className="space-y-3">
                                                                        <FormLabel>Notify me about...</FormLabel>
                                                                        <FormControl>
                                                                            <RadioGroup
                                                                                onValueChange={field.onChange}
                                                                                defaultValue={field.value}
                                                                                className="flex flex-col space-y-1"
                                                                            >
                                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value="all" />
                                                                                    </FormControl>
                                                                                    <FormLabel className="font-normal">
                                                                                        All new messages
                                                                                    </FormLabel>
                                                                                </FormItem>
                                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value="mentions" />
                                                                                    </FormControl>
                                                                                    <FormLabel className="font-normal">
                                                                                        Direct messages and mentions
                                                                                    </FormLabel>
                                                                                </FormItem>
                                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value="none" />
                                                                                    </FormControl>
                                                                                    <FormLabel className="font-normal">
                                                                                        Nothing
                                                                                    </FormLabel>
                                                                                </FormItem>
                                                                            </RadioGroup>
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <Button type="submit">Update Profile</Button>
                                                        </form>
                                                    </Form>
                                                </CardContent>
                                            </Card>

                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>System Feedback & Badges</CardTitle>
                                                    <CardDescription>
                                                        Review all available badge variants and loading indicators.
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Stack gap="lg">
                                                        <Box className="space-y-4">
                                                            <h4 className="text-sm font-medium">Badge Variants</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                <Badge>Default</Badge>
                                                                <Badge variant="secondary">Secondary</Badge>
                                                                <Badge variant="outline">Outline</Badge>
                                                                <Badge variant="destructive">Destructive</Badge>
                                                                <Badge className="bg-success text-success-foreground">Success</Badge>
                                                                <Badge className="bg-warning text-warning-foreground">Warning</Badge>
                                                            </div>
                                                        </Box>

                                                        <Separator />

                                                        <Box className="space-y-4">
                                                            <Stack direction="row" align="center" justify="between">
                                                                <h4 className="text-sm font-medium">Loading States</h4>
                                                                <Stack direction="row" gap="sm" align="center">
                                                                    <Label htmlFor="loading-toggle" className="text-xs">Simulate Loading</Label>
                                                                    <Switch
                                                                        id="loading-toggle"
                                                                        checked={isLoading}
                                                                        onCheckedChange={setIsLoading}
                                                                    />
                                                                </Stack>
                                                            </Stack>

                                                            <Grid columns={2} gap="md">
                                                                {isLoading ? (
                                                                    <>
                                                                        <Card className="p-4">
                                                                            <Stack gap="sm">
                                                                                <Skeleton className="h-4 w-[250px]" />
                                                                                <Skeleton className="h-4 w-[200px]" />
                                                                                <Skeleton className="h-20 w-full" />
                                                                            </Stack>
                                                                        </Card>
                                                                        <Card className="p-4">
                                                                            <Stack direction="row" gap="md" align="center">
                                                                                <Skeleton className="h-12 w-12 rounded-full" />
                                                                                <Stack gap="xs">
                                                                                    <Skeleton className="h-4 w-[150px]" />
                                                                                    <Skeleton className="h-4 w-[100px]" />
                                                                                </Stack>
                                                                            </Stack>
                                                                        </Card>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Card className="p-4">
                                                                            <Stack gap="sm">
                                                                                <h5 className="font-semibold">Actual Content</h5>
                                                                                <p className="text-sm text-muted-foreground">The data has been loaded successfully.</p>
                                                                                <div className="rounded bg-muted p-4 text-xs font-mono">
                                                                                    Success: 200 OK
                                                                                </div>
                                                                            </Stack>
                                                                        </Card>
                                                                        <Card className="p-4">
                                                                            <Stack direction="row" gap="md" align="center">
                                                                                <Avatar>
                                                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                                                    <AvatarFallback>CN</AvatarFallback>
                                                                                </Avatar>
                                                                                <Stack gap="xs">
                                                                                    <h5 className="font-semibold text-sm">Shadcn</h5>
                                                                                    <p className="text-xs text-muted-foreground">@shadcn</p>
                                                                                </Stack>
                                                                            </Stack>
                                                                        </Card>
                                                                    </>
                                                                )}
                                                            </Grid>
                                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                <Spinner size="sm" /> <span>System sync in progress...</span>
                                                            </div>
                                                        </Box>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Stack>
                                    </TabsContent>
                                </Tabs>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Recent Transactions</CardTitle>
                                        <CardDescription>A list of your recent payment activities.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <DataTable columns={columns} data={payments} />
                                    </CardContent>
                                </Card>

                                <Stack gap="md">
                                    <h3 className="text-lg font-semibold">FAQs & Collapsibles</h3>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                            <AccordionContent>
                                                Yes. It adheres to the WAI-ARIA design pattern.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                                            <AccordionContent>
                                                Yes. It uses Framer Motion for smooth transitions.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </Stack>
                            </Box>

                            {/* Sidebar Area - Logs & Form */}
                            <Box className="col-span-12 space-y-8 lg:col-span-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Activity Log</CardTitle>
                                        <CardDescription>Recent system updates</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ScrollArea className="h-[300px] pr-4">
                                            <div className="space-y-4">
                                                {Array.from({ length: 15 }).map((_, i) => (
                                                    <div key={i} className="flex gap-3 text-sm">
                                                        <Avatar className="h-8 w-8">
                                                            <AvatarImage src={`https://avatar.vercel.sh/${i}.png`} />
                                                            <AvatarFallback>U{i}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1">
                                                            <ContextMenu>
                                                                <ContextMenuTrigger>
                                                                    <HoverCard>
                                                                        <HoverCardTrigger asChild>
                                                                            <span className="cursor-help font-semibold underline decoration-dotted">Dev_{i + 1}</span>
                                                                        </HoverCardTrigger>
                                                                        <HoverCardContent className="w-80">
                                                                            <div className="flex justify-between space-x-4">
                                                                                <Avatar>
                                                                                    <AvatarImage src={`https://avatar.vercel.sh/${i}.png`} />
                                                                                    <AvatarFallback>U{i}</AvatarFallback>
                                                                                </Avatar>
                                                                                <div className="space-y-1">
                                                                                    <h4 className="text-sm font-semibold">@dev_{i + 1}</h4>
                                                                                    <p className="text-sm">
                                                                                        Senior Frontend Engineer working on Phase 8 components.
                                                                                    </p>
                                                                                    <div className="flex items-center pt-2">
                                                                                        <span className="text-xs text-muted-foreground">
                                                                                            Joined January 2026
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </HoverCardContent>
                                                                    </HoverCard>
                                                                </ContextMenuTrigger>
                                                                <ContextMenuContent>
                                                                    <ContextMenuItem>View Profile</ContextMenuItem>
                                                                    <ContextMenuItem>Message @dev_{i + 1}</ContextMenuItem>
                                                                    <ContextMenuItem>Mute notifications</ContextMenuItem>
                                                                </ContextMenuContent>
                                                            </ContextMenu>
                                                            {" "}pushed to Phase 8 components.
                                                            <Separator className="my-2" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Quick Config</CardTitle>
                                        <CardDescription>Adjust system parameters</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <Stack gap="sm">
                                            <Label>Deployment Date</Label>
                                            <DatePicker className="w-full" />
                                        </Stack>
                                        <Stack gap="sm">
                                            <Label>Deployment Progress</Label>
                                            <Progress value={66} className="h-2" />
                                            <p className="text-[10px] text-muted-foreground text-right">Drafting Phase 13...</p>
                                        </Stack>
                                        <Stack gap="sm">
                                            <Label>Verification Code</Label>
                                            <InputOTP maxLength={6}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </Stack>
                                        <Stack gap="sm">
                                            <Label>System Volume</Label>
                                            <Slider defaultValue={[75]} max={100} step={1} />
                                        </Stack>
                                        <Separator />
                                        <Stack gap="sm">
                                            <Label>System Calendar</Label>
                                            <Calendar
                                                mode="single"
                                                selected={new Date()}
                                                className="rounded-md border shadow-sm"
                                            />
                                        </Stack>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Save Changes</Button>
                                    </CardFooter>
                                </Card>
                            </Box>
                        </Grid>
                    </Stack>
                </Box>

                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <span>Calendar</span>
                                <CommandShortcut>⌘C</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <span>Search Emoji</span>
                                <CommandShortcut>⌘E</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <span>Calculator</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </TooltipProvider>
        )
    },
};
