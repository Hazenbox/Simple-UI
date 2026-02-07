import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@acme/ui/stepper";
import { useState } from "react";
import { Button } from "@acme/ui/button";
import { User, Settings, CreditCard, CheckCircle, Mail, Lock } from "lucide-react";

const meta = {
    title: "UI/Navigation/Stepper",
    component: Stepper,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
    { label: "Account", description: "Create your account" },
    { label: "Profile", description: "Set up your profile" },
    { label: "Preferences", description: "Choose your preferences" },
    { label: "Complete", description: "Review and finish" },
];

export const Default: Story = {
    render: () => <Stepper steps={steps} activeStep={1} />,
};

export const Horizontal: Story = {
    render: () => (
        <div className="w-full max-w-2xl">
            <Stepper
                steps={steps}
                activeStep={2}
                orientation="horizontal"
            />
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="w-full max-w-md">
            <Stepper steps={steps} activeStep={1} orientation="vertical" />
        </div>
    ),
};

export const WithOptionalStep: Story = {
    render: () => {
        const stepsWithOptional = [
            { label: "Account", description: "Create your account" },
            {
                label: "Profile",
                description: "Set up your profile",
                optional: true,
            },
            {
                label: "Preferences",
                description: "Choose your preferences",
            },
            { label: "Complete", description: "Review and finish" },
        ];
        return <Stepper steps={stepsWithOptional} activeStep={1} />;
    },
};

export const Compact: Story = {
    render: () => (
        <div className="w-full max-w-xl">
            <Stepper
                steps={[
                    { label: "Account" },
                    { label: "Profile" },
                    { label: "Preferences" },
                    { label: "Complete" },
                ]}
                activeStep={2}
                variant="compact"
            />
        </div>
    ),
};

export const CompactVertical: Story = {
    render: () => (
        <div className="w-full max-w-xs">
            <Stepper
                steps={[
                    { label: "Account" },
                    { label: "Profile" },
                    { label: "Preferences" },
                    { label: "Complete" },
                ]}
                activeStep={1}
                variant="compact"
                orientation="vertical"
            />
        </div>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <div className="w-full max-w-2xl">
            <Stepper
                steps={[
                    {
                        label: "Account",
                        description: "Create your account",
                        icon: <User className="h-3.5 w-3.5" />,
                    },
                    {
                        label: "Security",
                        description: "Set up security",
                        icon: <Lock className="h-3.5 w-3.5" />,
                    },
                    {
                        label: "Verify",
                        description: "Verify your email",
                        icon: <Mail className="h-3.5 w-3.5" />,
                    },
                    {
                        label: "Done",
                        description: "All set",
                        icon: <CheckCircle className="h-3.5 w-3.5" />,
                    },
                ]}
                activeStep={1}
                variant="iconText"
            />
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [activeStep, setActiveStep] = useState(0);

        return (
            <div className="w-full max-w-2xl space-y-6">
                <Stepper steps={steps} activeStep={activeStep} />

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        className="h-8 text-xs"
                        onClick={() =>
                            setActiveStep((prev) => Math.max(0, prev - 1))
                        }
                        disabled={activeStep === 0}
                    >
                        Previous
                    </Button>
                    <Button
                        className="h-8 text-xs"
                        onClick={() =>
                            setActiveStep((prev) =>
                                Math.min(steps.length - 1, prev + 1)
                            )
                        }
                        disabled={activeStep === steps.length - 1}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </div>
            </div>
        );
    },
};

export const CheckoutFlow: Story = {
    render: () => {
        const [activeStep, setActiveStep] = useState(0);

        const checkoutSteps = [
            {
                label: "Cart",
                description: "Review items",
                icon: <CreditCard className="h-3.5 w-3.5" />,
            },
            {
                label: "Shipping",
                description: "Enter address",
                icon: <Mail className="h-3.5 w-3.5" />,
            },
            {
                label: "Payment",
                description: "Payment details",
                icon: <Settings className="h-3.5 w-3.5" />,
            },
            {
                label: "Confirm",
                description: "Place order",
                icon: <CheckCircle className="h-3.5 w-3.5" />,
            },
        ];

        return (
            <div className="w-full max-w-3xl space-y-6 rounded-lg border p-4">
                <h2 className="text-lg font-semibold">Checkout</h2>

                <Stepper steps={checkoutSteps} activeStep={activeStep} />

                <div className="min-h-40 rounded-md border p-4">
                    <h3 className="mb-2 text-sm font-semibold">
                        {checkoutSteps[activeStep].label}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                        {checkoutSteps[activeStep].description}
                    </p>
                </div>

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        className="h-8 text-xs"
                        onClick={() =>
                            setActiveStep((prev) => Math.max(0, prev - 1))
                        }
                        disabled={activeStep === 0}
                    >
                        Back
                    </Button>
                    <Button
                        className="h-8 text-xs"
                        onClick={() =>
                            setActiveStep((prev) =>
                                Math.min(
                                    checkoutSteps.length - 1,
                                    prev + 1
                                )
                            )
                        }
                    >
                        {activeStep === checkoutSteps.length - 1
                            ? "Place Order"
                            : "Continue"}
                    </Button>
                </div>
            </div>
        );
    },
};
