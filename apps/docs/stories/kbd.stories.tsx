import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "@acme/ui/kbd";

const meta = {
    title: "UI/Display/Kbd",
    component: Kbd,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Kbd>Ctrl</Kbd>,
};

export const SingleKey: Story = {
    render: () => (
        <div className="flex gap-2">
            <Kbd>⌘</Kbd>
            <Kbd>Ctrl</Kbd>
            <Kbd>Alt</Kbd>
            <Kbd>Shift</Kbd>
        </div>
    ),
};

export const Combination: Story = {
    render: () => (
        <div className="flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <span className="text-sm">+</span>
            <Kbd>K</Kbd>
        </div>
    ),
};

export const ShortcutList: Story = {
    render: () => (
        <div className="w-full max-w-md space-y-3 rounded-lg border p-4">
            <h3 className="font-semibold">Keyboard Shortcuts</h3>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm">Search</span>
                    <div className="flex items-center gap-1">
                        <Kbd>⌘</Kbd>
                        <span className="text-sm">+</span>
                        <Kbd>K</Kbd>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Copy</span>
                    <div className="flex items-center gap-1">
                        <Kbd>⌘</Kbd>
                        <span className="text-sm">+</span>
                        <Kbd>C</Kbd>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Paste</span>
                    <div className="flex items-center gap-1">
                        <Kbd>⌘</Kbd>
                        <span className="text-sm">+</span>
                        <Kbd>V</Kbd>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Undo</span>
                    <div className="flex items-center gap-1">
                        <Kbd>⌘</Kbd>
                        <span className="text-sm">+</span>
                        <Kbd>Z</Kbd>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Redo</span>
                    <div className="flex items-center gap-1">
                        <Kbd>⌘</Kbd>
                        <span className="text-sm">+</span>
                        <Kbd>Shift</Kbd>
                        <span className="text-sm">+</span>
                        <Kbd>Z</Kbd>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const InText: Story = {
    render: () => (
        <p className="max-w-md text-sm">
            Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette, or use{" "}
            <Kbd>Ctrl</Kbd> <Kbd>K</Kbd> on Windows.
        </p>
    ),
};

export const FunctionKeys: Story = {
    render: () => (
        <div className="flex gap-2">
            <Kbd>F1</Kbd>
            <Kbd>F2</Kbd>
            <Kbd>F3</Kbd>
            <Kbd>F12</Kbd>
        </div>
    ),
};
