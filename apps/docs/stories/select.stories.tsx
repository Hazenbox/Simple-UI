import type { Meta, StoryObj } from "@storybook/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@acme/ui/select";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";
import { FieldWrapper } from "@acme/ui/form-field";

const meta = {
    title: "UI/Form/Select",
    component: Select,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm" className="w-80">
            <Label htmlFor="framework">Framework</Label>
            <Select>
                <SelectTrigger id="framework">
                    <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>
            </Select>
        </Stack>
    ),
};

export const WithGroups: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Select disabled>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithDisabledItems: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a plan" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="enterprise" disabled>
                    Enterprise (Coming Soon)
                </SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const Sizes: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <Stack gap="sm">
                <Label>Small</Label>
                <Select>
                    <SelectTrigger selectSize="sm">
                        <SelectValue placeholder="Small select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a">Option A</SelectItem>
                        <SelectItem value="b">Option B</SelectItem>
                    </SelectContent>
                </Select>
            </Stack>
            <Stack gap="sm">
                <Label>Default</Label>
                <Select>
                    <SelectTrigger selectSize="default">
                        <SelectValue placeholder="Default select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a">Option A</SelectItem>
                        <SelectItem value="b">Option B</SelectItem>
                    </SelectContent>
                </Select>
            </Stack>
            <Stack gap="sm">
                <Label>Large</Label>
                <Select>
                    <SelectTrigger selectSize="lg">
                        <SelectValue placeholder="Large select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a">Option A</SelectItem>
                        <SelectItem value="b">Option B</SelectItem>
                    </SelectContent>
                </Select>
            </Stack>
        </Stack>
    ),
};

export const GhostVariant: Story = {
    render: () => (
        <Select>
            <SelectTrigger variant="ghost" className="w-[180px]">
                <SelectValue placeholder="Ghost select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const ErrorState: Story = {
    render: () => (
        <FieldWrapper label="Framework" error="Please select a framework">
            <Select>
                <SelectTrigger error={true}>
                    <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>
            </Select>
        </FieldWrapper>
    ),
};

export const LoadingState: Story = {
    render: () => (
        <Select>
            <SelectTrigger loading={true} className="w-[180px]">
                <SelectValue placeholder="Loading..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
            </SelectContent>
        </Select>
    ),
};
