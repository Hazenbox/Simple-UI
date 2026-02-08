import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "@acme/ui/combobox";
import { FormField } from "@acme/ui/form-field";
import { useState } from "react";

const meta = {
    title: "UI/Form/Combobox",
    component: Combobox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular" },
];

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <Combobox
                options={frameworks}
                value={value}
                onValueChange={setValue}
                placeholder="Select framework..."
            />
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <FormField label="Framework">
                <Combobox
                    options={frameworks}
                    value={value}
                    onValueChange={setValue}
                    placeholder="Select framework..."
                />
            </FormField>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <Combobox
            options={frameworks}
            value="react"
            placeholder="Select framework..."
            disabled
        />
    ),
};

export const CustomWidth: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <Combobox
                options={frameworks}
                value={value}
                onValueChange={setValue}
                placeholder="Select framework..."
                className="w-[300px]"
            />
        );
    },
};

const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "cn", label: "China" },
    { value: "in", label: "India" },
    { value: "br", label: "Brazil" },
];

export const LongList: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <Combobox
                options={countries}
                value={value}
                onValueChange={setValue}
                placeholder="Select country..."
                searchPlaceholder="Search countries..."
                className="w-[250px]"
            />
        );
    },
};
