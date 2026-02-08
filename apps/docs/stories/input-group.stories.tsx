import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup, InputAddon, InputGroupInput } from "@acme/ui/input-group";
import { FormField } from "@acme/ui/form-field";
import { Search, DollarSign, AtSign, Lock } from "lucide-react";

const meta = {
    title: "UI/Form/Input Group",
    component: InputGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Username">
                <InputGroup>
                    <InputAddon position="left">
                        <AtSign className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput placeholder="username" />
                </InputGroup>
            </FormField>
        </div>
    ),
};

export const WithRightAddon: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Price">
                <InputGroup>
                    <InputGroupInput placeholder="0.00" />
                    <InputAddon position="right">
                        <DollarSign className="h-4 w-4" />
                    </InputAddon>
                </InputGroup>
            </FormField>
        </div>
    ),
};

export const WithBothAddons: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Website">
                <InputGroup>
                    <InputAddon position="left">https://</InputAddon>
                    <InputGroupInput placeholder="example.com" />
                    <InputAddon position="right">.com</InputAddon>
                </InputGroup>
            </FormField>
        </div>
    ),
};

export const SearchInput: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Search">
                <InputGroup>
                    <InputAddon position="left">
                        <Search className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput placeholder="Search..." />
                </InputGroup>
            </FormField>
        </div>
    ),
};

export const SmallSize: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Password (Small)">
                <InputGroup size="sm">
                    <InputAddon position="left">
                        <Lock className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput placeholder="Enter password" />
                </InputGroup>
            </FormField>
        </div>
    ),
};

export const LargeSize: Story = {
    render: () => (
        <div className="w-80">
            <FormField label="Password (Large)">
                <InputGroup size="lg">
                    <InputAddon position="left">
                        <Lock className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput placeholder="Enter password" />
                </InputGroup>
            </FormField>
        </div>
    ),
};
