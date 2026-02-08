import type { Meta, StoryObj } from "@storybook/react";
import { PinInput } from "@acme/ui/pin-input";
import { FormField } from "@acme/ui/form-field";
import { useState } from "react";

const meta = {
    title: "UI/Form/Pin Input",
    component: PinInput,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return <PinInput value={value} onChange={setValue} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <FormField label="Enter Verification Code" helperText="We sent a code to your email">
                <PinInput value={value} onChange={setValue} />
            </FormField>
        );
    },
};

export const FourDigits: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return <PinInput length={4} value={value} onChange={setValue} />;
    },
};

export const Masked: Story = {
    render: () => {
        const [value, setValue] = useState("");
        return <PinInput value={value} onChange={setValue} mask />;
    },
};

export const WithComplete: Story = {
    render: () => {
        const [value, setValue] = useState("");
        const [complete, setComplete] = useState(false);

        return (
            <div className="space-y-4">
                <PinInput
                    value={value}
                    onChange={setValue}
                    onComplete={(val) => {
                        setComplete(true);
                        console.log("Complete:", val);
                    }}
                />
                {complete && (
                    <p className="text-center text-sm text-green-600">
                        ✓ Code verified successfully!
                    </p>
                )}
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => <PinInput value="123456" disabled />,
};

export const VerificationFlow: Story = {
    render: () => {
        const [value, setValue] = useState("");
        const [isVerifying, setIsVerifying] = useState(false);
        const [isVerified, setIsVerified] = useState(false);

        const handleComplete = (code: string) => {
            setIsVerifying(true);
            // Simulate API call
            setTimeout(() => {
                setIsVerifying(false);
                setIsVerified(true);
            }, 1500);
        };

        return (
            <div className="w-full max-w-md space-y-6 rounded-lg border p-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Two-Factor Authentication</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Enter the 6-digit code from your authenticator app
                    </p>
                </div>

                <div className="flex justify-center">
                    <PinInput
                        value={value}
                        onChange={setValue}
                        onComplete={handleComplete}
                        disabled={isVerifying || isVerified}
                    />
                </div>

                {isVerifying && (
                    <p className="text-center text-sm text-muted-foreground">
                        Verifying code...
                    </p>
                )}

                {isVerified && (
                    <div className="rounded-md bg-green-50 p-4 text-center">
                        <p className="text-sm font-medium text-green-800">
                            ✓ Authentication successful!
                        </p>
                    </div>
                )}

                <button
                    className="w-full text-sm text-primary hover:underline"
                    onClick={() => {
                        setValue("");
                        setIsVerified(false);
                    }}
                >
                    Resend code
                </button>
            </div>
        );
    },
};
