import type { Meta, StoryObj } from "@storybook/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@acme/ui/collapsible";
import { Button } from "@acme/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const meta = {
    title: "UI/Layout/Collapsible",
    component: Collapsible,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                        @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @stitches/react
                    </div>
                </CollapsibleContent>
            </Collapsible>
        );
    },
};

export const FAQ: Story = {
    render: () => {
        const [open1, setOpen1] = useState(false);
        const [open2, setOpen2] = useState(false);
        const [open3, setOpen3] = useState(false);

        return (
            <div className="w-full max-w-md space-y-4">
                <Collapsible open={open1} onOpenChange={setOpen1}>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between">
                            <span className="font-semibold">What is Simple UI?</span>
                            <ChevronsUpDown className="h-4 w-4" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
                        Simple UI is a comprehensive component library built with React,
                        TypeScript, and Tailwind CSS. It provides beautifully designed,
                        accessible components for building modern web applications.
                    </CollapsibleContent>
                </Collapsible>

                <Collapsible open={open2} onOpenChange={setOpen2}>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between">
                            <span className="font-semibold">How do I install it?</span>
                            <ChevronsUpDown className="h-4 w-4" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
                        You can install Simple UI using npm or pnpm. Run `pnpm add @acme/ui`
                        in your project directory to get started.
                    </CollapsibleContent>
                </Collapsible>

                <Collapsible open={open3} onOpenChange={setOpen3}>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between">
                            <span className="font-semibold">Is it accessible?</span>
                            <ChevronsUpDown className="h-4 w-4" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
                        Yes! All components are built with accessibility in mind, using Radix
                        UI primitives and following WAI-ARIA guidelines for keyboard
                        navigation and screen reader support.
                    </CollapsibleContent>
                </Collapsible>
            </div>
        );
    },
};

export const WithContent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="w-full max-w-md rounded-lg border p-4">
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            <span>Show more details</span>
                            <ChevronsUpDown className="h-4 w-4" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-2">
                        <p className="text-sm text-muted-foreground">
                            This is additional content that can be shown or hidden. It can
                            contain any type of content including text, images, or other
                            components.
                        </p>
                        <ul className="list-inside list-disc text-sm text-muted-foreground">
                            <li>Feature one</li>
                            <li>Feature two</li>
                            <li>Feature three</li>
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        );
    },
};
