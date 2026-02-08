import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@acme/ui/rating";
import { FieldWrapper } from "@acme/ui/form-field";
import { useState } from "react";

const meta = {
    title: "UI/Form/Rating",
    component: Rating,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState(0);
        return <Rating value={value} onChange={setValue} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = useState(3);
        return (
            <FieldWrapper label="Rate your experience">
                <Rating value={value} onChange={setValue} />
                <p className="text-sm text-muted-foreground">{value} out of 5 stars</p>
            </FieldWrapper>
        );
    },
};

export const Small: Story = {
    render: () => {
        const [value, setValue] = useState(4);
        return <Rating value={value} onChange={setValue} size="sm" />;
    },
};

export const Large: Story = {
    render: () => {
        const [value, setValue] = useState(5);
        return <Rating value={value} onChange={setValue} size="lg" />;
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <span className="w-16 text-sm">Small:</span>
                <Rating value={4} size="sm" readOnly />
            </div>
            <div className="flex items-center gap-4">
                <span className="w-16 text-sm">Medium:</span>
                <Rating value={4} size="md" readOnly />
            </div>
            <div className="flex items-center gap-4">
                <span className="w-16 text-sm">Large:</span>
                <Rating value={4} size="lg" readOnly />
            </div>
        </div>
    ),
};

export const HalfStars: Story = {
    render: () => {
        const [value, setValue] = useState(3.5);
        return (
            <div className="space-y-2">
                <Rating value={value} onChange={setValue} allowHalf />
                <p className="text-sm text-muted-foreground">{value} stars</p>
            </div>
        );
    },
};

export const ReadOnly: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Rating value={5} readOnly />
                <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
                <Rating value={4.5} allowHalf readOnly />
                <span className="text-sm text-muted-foreground">(89 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
                <Rating value={3} readOnly />
                <span className="text-sm text-muted-foreground">(42 reviews)</span>
            </div>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => <Rating value={3} disabled />,
};

export const MaxTen: Story = {
    render: () => {
        const [value, setValue] = useState(7);
        return (
            <div className="space-y-2">
                <label className="text-sm font-medium">Rate out of 10</label>
                <Rating value={value} onChange={setValue} max={10} size="sm" />
                <p className="text-sm text-muted-foreground">{value}/10</p>
            </div>
        );
    },
};

export const ProductReview: Story = {
    render: () => {
        const [rating, setRating] = useState(0);
        const [submitted, setSubmitted] = useState(false);

        return (
            <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
                <h3 className="text-lg font-semibold">Rate this product</h3>

                <div className="space-y-2">
                    <Rating value={rating} onChange={setRating} size="lg" />
                    {rating > 0 && (
                        <p className="text-sm text-muted-foreground">
                            {rating === 1 && "Poor"}
                            {rating === 2 && "Fair"}
                            {rating === 3 && "Good"}
                            {rating === 4 && "Very Good"}
                            {rating === 5 && "Excellent"}
                        </p>
                    )}
                </div>

                <button
                    onClick={() => setSubmitted(true)}
                    disabled={rating === 0 || submitted}
                    className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                    {submitted ? "Thank you!" : "Submit Review"}
                </button>

                {submitted && (
                    <p className="text-center text-sm text-green-600">
                        ✓ Your review has been submitted
                    </p>
                )}
            </div>
        );
    },
};

export const WithFormField: Story = {
    render: () => {
        const [value, setValue] = useState(0);
        return (
            <FieldWrapper label="Rate your experience">
                <Rating value={value} onChange={setValue} />
            </FieldWrapper>
        );
    },
};
