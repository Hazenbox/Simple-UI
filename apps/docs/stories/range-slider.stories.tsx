import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from "@acme/ui/range-slider";
import { useState } from "react";

const meta = {
    title: "UI/Input/Range Slider",
    component: RangeSlider,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState([25, 75]);
        return (
            <div className="w-[400px]">
                <RangeSlider value={value} onValueChange={setValue} />
            </div>
        );
    },
};

export const WithLabels: Story = {
    render: () => {
        const [value, setValue] = useState([25, 75]);
        return (
            <div className="w-[400px]">
                <RangeSlider
                    value={value}
                    onValueChange={setValue}
                    showLabels
                />
            </div>
        );
    },
};

export const PriceRange: Story = {
    render: () => {
        const [value, setValue] = useState([100, 500]);
        return (
            <div className="w-[400px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Price Range</h3>
                    <p className="text-xs text-muted-foreground">
                        Filter products by price
                    </p>
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={value}
                    onValueChange={setValue}
                    formatLabel={(val) => `$${val}`}
                    showLabels
                />
            </div>
        );
    },
};

export const PercentageRange: Story = {
    render: () => {
        const [value, setValue] = useState([20, 80]);
        return (
            <div className="w-[400px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Discount Range</h3>
                    <p className="text-xs text-muted-foreground">
                        Select discount percentage
                    </p>
                </div>
                <RangeSlider
                    min={0}
                    max={100}
                    step={5}
                    value={value}
                    onValueChange={setValue}
                    formatLabel={(val) => `${val}%`}
                    showLabels
                />
            </div>
        );
    },
};

export const CustomStep: Story = {
    render: () => {
        const [value, setValue] = useState([0, 50]);
        return (
            <div className="w-[400px]">
                <RangeSlider
                    min={0}
                    max={100}
                    step={25}
                    value={value}
                    onValueChange={setValue}
                    showLabels
                />
            </div>
        );
    },
};
