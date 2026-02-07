import type { Meta, StoryObj } from "@storybook/react";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@acme/ui/resizable";

const meta = {
    title: "UI/Layout/Resizable",
    component: ResizablePanelGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <ResizablePanelGroup direction="horizontal" className="h-[400px] w-[600px] rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Left Panel</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Right Panel</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const WithHandle: Story = {
    render: () => (
        <ResizablePanelGroup direction="horizontal" className="h-[400px] w-[600px] rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const Vertical: Story = {
    render: () => (
        <ResizablePanelGroup direction="vertical" className="h-[600px] w-[400px] rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Top Panel</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Bottom Panel</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const ThreeColumns: Story = {
    render: () => (
        <ResizablePanelGroup direction="horizontal" className="h-[400px] w-[800px] rounded-lg border">
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Main Content</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Inspector</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};
