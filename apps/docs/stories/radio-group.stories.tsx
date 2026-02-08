import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem, RadioGroupCard } from "@acme/ui/radio-group";
import { Label } from "@acme/ui/label";
import { Stack } from "@acme/ui/primitives/stack";
import { FormField } from "@acme/ui/form-field";

const meta = {
    title: "UI/Form/RadioGroup",
    component: RadioGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one" className="cursor-pointer">
                    Option One
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="cursor-pointer">
                    Option Two
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three" className="cursor-pointer">
                    Option Three
                </Label>
            </div>
        </RadioGroup>
    ),
};

export const Horizontal: Story = {
    render: () => (
        <RadioGroup defaultValue="comfortable" className="flex space-x-4">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="compact" />
                <Label htmlFor="compact" className="cursor-pointer">
                    Compact
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="comfortable" />
                <Label htmlFor="comfortable" className="cursor-pointer">
                    Comfortable
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="spacious" id="spacious" />
                <Label htmlFor="spacious" className="cursor-pointer">
                    Spacious
                </Label>
            </div>
        </RadioGroup>
    ),
};

export const WithDisabled: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="r1" />
                <Label htmlFor="r1" className="cursor-pointer">
                    Default
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="r2" disabled />
                <Label htmlFor="r2" className="cursor-pointer opacity-50">
                    Disabled
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="r3" />
                <Label htmlFor="r3" className="cursor-pointer">
                    Available
                </Label>
            </div>
        </RadioGroup>
    ),
};

export const NotificationSettings: Story = {
    render: () => (
        <Stack gap="md" className="w-80">
            <div>
                <h3 className="mb-4 text-sm font-medium">Notify me about...</h3>
                <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all" />
                        <Label htmlFor="all" className="cursor-pointer font-normal">
                            All new messages
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mentions" id="mentions" />
                        <Label htmlFor="mentions" className="cursor-pointer font-normal">
                            Direct messages and mentions
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="none" />
                        <Label htmlFor="none" className="cursor-pointer font-normal">
                            Nothing
                        </Label>
                    </div>
                </RadioGroup>
            </div>
        </Stack>
    ),
};

export const ErrorState: Story = {
    render: () => (
        <FormField label="Select a plan" error="Please select a valid plan.">
            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="err-1" error />
                    <Label htmlFor="err-1" className="cursor-pointer">
                        Option One
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="err-2" error />
                    <Label htmlFor="err-2" className="cursor-pointer">
                        Option Two
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="err-3" error />
                    <Label htmlFor="err-3" className="cursor-pointer">
                        Option Three
                    </Label>
                </div>
            </RadioGroup>
        </FormField>
    ),
};

export const CardVariant: Story = {
    render: () => (
        <RadioGroup defaultValue="pro" className="w-80">
            <RadioGroupCard
                value="free"
                title="Free plan"
                description="Basic features for personal use. Up to 1 project."
            />
            <RadioGroupCard
                value="pro"
                title="Pro plan"
                description="Advanced features for professionals. Unlimited projects."
            />
            <RadioGroupCard
                value="enterprise"
                title="Enterprise"
                description="Custom solutions for large teams. Dedicated support."
            />
        </RadioGroup>
    ),
};

export const HoverState: Story = {
    render: () => (
        <Stack gap="sm">
            <p className="text-xs text-muted-foreground">
                Hover over the radio items to see the built-in hover effect.
            </p>
            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="hover-1" />
                    <Label htmlFor="hover-1" className="cursor-pointer">
                        Option One
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="hover-2" />
                    <Label htmlFor="hover-2" className="cursor-pointer">
                        Option Two
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="hover-3" />
                    <Label htmlFor="hover-3" className="cursor-pointer">
                        Option Three
                    </Label>
                </div>
            </RadioGroup>
        </Stack>
    ),
};
