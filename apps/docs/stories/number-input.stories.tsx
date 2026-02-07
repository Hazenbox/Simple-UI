import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "@acme/ui/number-input";
import { useState } from "react";

const meta = {
    title: "UI/Form/Number Input",
    component: NumberInput,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState(0);
        return <NumberInput value={value} onChange={setValue} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = useState(5);
        return (
            <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <NumberInput value={value} onChange={setValue} />
            </div>
        );
    },
};

export const WithMinMax: Story = {
    render: () => {
        const [value, setValue] = useState(50);
        return (
            <div className="space-y-2">
                <label className="text-sm font-medium">Percentage (0-100)</label>
                <NumberInput value={value} onChange={setValue} min={0} max={100} />
            </div>
        );
    },
};

export const WithStep: Story = {
    render: () => {
        const [value, setValue] = useState(0);
        return (
            <div className="space-y-2">
                <label className="text-sm font-medium">Step by 5</label>
                <NumberInput value={value} onChange={setValue} step={5} min={0} max={100} />
            </div>
        );
    },
};

export const WithPrecision: Story = {
    render: () => {
        const [value, setValue] = useState(0);
        return (
            <div className="space-y-2">
                <label className="text-sm font-medium">Price (2 decimals)</label>
                <NumberInput
                    value={value}
                    onChange={setValue}
                    step={0.01}
                    precision={2}
                    min={0}
                />
            </div>
        );
    },
};

export const WithoutStepper: Story = {
    render: () => {
        const [value, setValue] = useState(42);
        return (
            <div className="space-y-2">
                <label className="text-sm font-medium">No Stepper</label>
                <NumberInput value={value} onChange={setValue} showStepper={false} />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => <NumberInput value={10} disabled />,
};

export const QuantitySelector: Story = {
    render: () => {
        const [quantity, setQuantity] = useState(1);
        const price = 29.99;
        return (
            <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="text-muted-foreground">${price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Quantity</label>
                    <NumberInput
                        value={quantity}
                        onChange={setQuantity}
                        min={1}
                        max={10}
                        className="w-32"
                    />
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                    <span className="font-semibold">Total</span>
                    <span className="text-lg font-bold">${(price * quantity).toFixed(2)}</span>
                </div>
            </div>
        );
    },
};
