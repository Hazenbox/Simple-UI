import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@acme/ui/primitives/grid";
import { Card, CardContent } from "@acme/ui/card";

const meta = {
    title: "UI/Primitives/Grid",
    component: Grid,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        cols: {
            control: { type: "select" },
            options: [1, 2, 3, 4, 6, 12],
        },
        gap: {
            control: { type: "select" },
            options: ["xs", "sm", "md", "lg", "xl"],
        },
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {
    args: {
        cols: 2,
        gap: "md",
        className: "w-96",
        children: (
            <>
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">{i + 1}</span>
                        </CardContent>
                    </Card>
                ))}
            </>
        ),
    },
};

export const ThreeColumns: Story = {
    args: {
        cols: 3,
        gap: "md",
        className: "w-[600px]",
        children: (
            <>
                {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i}>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">{i + 1}</span>
                        </CardContent>
                    </Card>
                ))}
            </>
        ),
    },
};

export const Responsive: Story = {
    render: () => (
        <Grid cols={1} gap="md" className="w-full max-w-4xl md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">{i + 1}</span>
                    </CardContent>
                </Card>
            ))}
        </Grid>
    ),
};
