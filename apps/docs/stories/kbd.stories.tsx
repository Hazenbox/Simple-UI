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
        <div className="flex gap-1.5">
            <Kbd>⌘</Kbd>
            <Kbd>Ctrl</Kbd>
            <Kbd>Alt</Kbd>
            <Kbd>Shift</Kbd>
        </div>
    ),
};

export const Combination: Story = {
    render: () => (
        <div className="flex items-center gap-0.5">
            <Kbd>⌘</Kbd>
            <span className="text-xs text-muted-foreground">+</span>
            <Kbd>K</Kbd>
        </div>
    ),
};

export const ShortcutList: Story = {
    render: () => (
        <div className="w-full max-w-xs space-y-2 rounded-lg border p-3">
            <h3 className="text-xs font-semibold">Keyboard Shortcuts</h3>
            <div className="space-y-1.5">
                {[
                    { action: "Search", keys: ["⌘", "K"] },
                    { action: "Copy", keys: ["⌘", "C"] },
                    { action: "Paste", keys: ["⌘", "V"] },
                    { action: "Undo", keys: ["⌘", "Z"] },
                    { action: "Redo", keys: ["⌘", "Shift", "Z"] },
                ].map(({ action, keys }) => (
                    <div key={action} className="flex items-center justify-between gap-4">
                        <span className="text-xs text-muted-foreground">{action}</span>
                        <div className="flex items-center gap-0.5">
                            {keys.map((key, i) => (
                                <span key={i} className="flex items-center gap-0.5">
                                    {i > 0 && <span className="text-xs text-muted-foreground">+</span>}
                                    <Kbd>{key}</Kbd>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
};

export const InText: Story = {
    render: () => (
        <p className="max-w-md text-xs leading-relaxed">
            Press <Kbd className="align-middle">⌘</Kbd> <Kbd className="align-middle">K</Kbd> to open the command palette, or use{" "}
            <Kbd className="align-middle">Ctrl</Kbd> <Kbd className="align-middle">K</Kbd> on Windows.
        </p>
    ),
};

export const FunctionKeys: Story = {
    render: () => (
        <div className="flex gap-1.5">
            <Kbd>F1</Kbd>
            <Kbd>F2</Kbd>
            <Kbd>F3</Kbd>
            <Kbd>F12</Kbd>
        </div>
    ),
};
