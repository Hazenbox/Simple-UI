import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup, InputAddon, InputGroupInput } from "@acme/ui/input-group";
import { Stack } from "@acme/ui/primitives/stack";
import { Label } from "@acme/ui/label";
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
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Username</Label>
                <InputGroup>
                    <InputAddon position="left">
                        <AtSign className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput placeholder="username" hasLeftAddon />
                </InputGroup>
            </Stack>
        </Stack>
    ),
};

export const WithRightAddon: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Price</Label>
                <InputGroup>
                    <InputGroupInput placeholder="0.00" hasRightAddon />
                    <InputAddon position="right">
                        <DollarSign className="h-4 w-4" />
                    </InputAddon>
                </InputGroup>
            </Stack>
        </Stack>
    ),
};

export const WithBothAddons: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Website</Label>
                <InputGroup>
                    <InputAddon position="left">https://</InputAddon>
                    <InputGroupInput placeholder="example.com" hasLeftAddon hasRightAddon />
                    <InputAddon position="right">.com</InputAddon>
                </InputGroup>
            </Stack>
        </Stack>
    ),
};

export const SearchInput: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Search</Label>
                <InputGroup>
                    <InputAddon position="left">
                        <Search className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput placeholder="Search..." hasLeftAddon />
                </InputGroup>
            </Stack>
        </Stack>
    ),
};

export const PasswordInput: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Password</Label>
                <InputGroup>
                    <InputAddon position="left">
                        <Lock className="h-4 w-4" />
                    </InputAddon>
                    <InputGroupInput type="password" placeholder="Enter password" hasLeftAddon />
                </InputGroup>
            </Stack>
        </Stack>
    ),
};
