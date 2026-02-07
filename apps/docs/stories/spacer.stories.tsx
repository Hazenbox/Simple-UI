import type { Meta, StoryObj } from "@storybook/react";
import { Spacer } from "@acme/ui/spacer";

const meta = {
    title: "UI/Layout/Spacer",
    component: Spacer,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    render: () => (
        <div className="w-[300px] rounded-lg border p-6">
            <p>First paragraph</p>
            <Spacer size={2} />
            <p>Second paragraph with 2rem spacing</p>
        </div>
    ),
};

export const Horizontal: Story = {
    render: () => (
        <div className="flex rounded-lg border p-6">
            <p>Left</p>
            <Spacer axis="horizontal" size={4} />
            <p>Right</p>
        </div>
    ),
};

export const CustomSize: Story = {
    render: () => (
        <div className="w-[300px] space-y-0 rounded-lg border p-6">
            <p>Item 1</p>
            <Spacer size="0.5rem" />
            <p>Item 2</p>
            <Spacer size="1rem" />
            <p>Item 3</p>
            <Spacer size="2rem" />
            <p>Item 4</p>
        </div>
    ),
};

export const InLayout: Story = {
    render: () => (
        <div className="w-[400px] rounded-lg border p-6">
            <h2 className="text-2xl font-bold">Title</h2>
            <Spacer size={1} />
            <p className="text-muted-foreground">Subtitle text</p>
            <Spacer size={2} />
            <div className="rounded-lg bg-muted p-4">
                <p>Content section</p>
            </div>
            <Spacer size={1.5} />
            <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
                Action
            </button>
        </div>
    ),
};
