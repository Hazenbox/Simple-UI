import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@acme/ui/stepper";
import { useState } from "react";
import { Button } from "@acme/ui/button";

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
            <Stepper steps={steps} activeStep={2} orientation="horizontal" />
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
            { label: "Profile", description: "Set up your profile", optional: true },
            { label: "Preferences", description: "Choose your preferences" },
            { label: "Complete", description: "Review and finish" },
        ];
        return <Stepper steps={stepsWithOptional} activeStep={1} />;
    },
};

export const Interactive: Story = {
    render: () => {
        const [activeStep, setActiveStep] = useState(0);

        return (
            <div className="w-full max-w-2xl space-y-8">
                <Stepper steps={steps} activeStep={activeStep} />

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                        disabled={activeStep === 0}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() =>
                            setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
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
            { label: "Cart", description: "Review items" },
            { label: "Shipping", description: "Enter address" },
            { label: "Payment", description: "Payment details" },
            { label: "Confirm", description: "Place order" },
        ];

        return (
            <div className="w-full max-w-3xl space-y-8 rounded-lg border p-6">
                <h2 className="text-2xl font-bold">Checkout</h2>

                <Stepper steps={checkoutSteps} activeStep={activeStep} />

                <div className="min-h-[200px] rounded-md border p-6">
                    <h3 className="mb-4 text-lg font-semibold">
                        {checkoutSteps[activeStep].label}
                    </h3>
                    <p className="text-muted-foreground">
                        {checkoutSteps[activeStep].description}
                    </p>
                </div>

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                        disabled={activeStep === 0}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={() =>
                            setActiveStep((prev) =>
                                Math.min(checkoutSteps.length - 1, prev + 1)
                            )
                        }
                    >
                        {activeStep === checkoutSteps.length - 1 ? "Place Order" : "Continue"}
                    </Button>
                </div>
            </div>
        );
    },
};
