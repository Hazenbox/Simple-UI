import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from "@acme/ui/color-picker";
import { useState } from "react";

const meta = {
    title: "UI/Input/Color Picker",
    component: ColorPicker,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [color, setColor] = useState("#3b82f6");
        return (
            <div className="w-[300px]">
                <ColorPicker value={color} onChange={setColor} />
            </div>
        );
    },
};

export const BrandColor: Story = {
    render: () => {
        const [color, setColor] = useState("#8b5cf6");
        return (
            <div className="w-[300px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Brand Color</h3>
                    <p className="text-xs text-muted-foreground">
                        Select your brand's primary color
                    </p>
                </div>
                <ColorPicker value={color} onChange={setColor} />
                <div
                    className="h-20 rounded-lg"
                    style={{ backgroundColor: color }}
                />
            </div>
        );
    },
};

export const ThemeColors: Story = {
    render: () => {
        const [primary, setPrimary] = useState("#3b82f6");
        const [secondary, setSecondary] = useState("#8b5cf6");
        const [accent, setAccent] = useState("#ec4899");

        return (
            <div className="w-[300px] space-y-6">
                <div>
                    <h3 className="text-sm font-medium">Theme Colors</h3>
                    <p className="text-xs text-muted-foreground">
                        Customize your theme palette
                    </p>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium">Primary</label>
                        <ColorPicker value={primary} onChange={setPrimary} />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">Secondary</label>
                        <ColorPicker value={secondary} onChange={setSecondary} />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium">Accent</label>
                        <ColorPicker value={accent} onChange={setAccent} />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div
                        className="h-16 flex-1 rounded-lg"
                        style={{ backgroundColor: primary }}
                    />
                    <div
                        className="h-16 flex-1 rounded-lg"
                        style={{ backgroundColor: secondary }}
                    />
                    <div
                        className="h-16 flex-1 rounded-lg"
                        style={{ backgroundColor: accent }}
                    />
                </div>
            </div>
        );
    },
};
