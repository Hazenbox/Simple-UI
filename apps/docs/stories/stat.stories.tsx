import type { Meta, StoryObj } from "@storybook/react";
import { Stat } from "@acme/ui/stat";
import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

const meta = {
    title: "UI/Display/Stat",
    component: Stat,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Stat label="Total Revenue" value="$45,231.89" />,
};

export const WithChange: Story = {
    render: () => (
        <Stat
            label="Total Revenue"
            value="$45,231.89"
            change={20.1}
            helpText="Compared to last month"
        />
    ),
};

export const NegativeChange: Story = {
    render: () => (
        <Stat
            label="Active Users"
            value="2,350"
            change={-12.5}
            helpText="Compared to last week"
        />
    ),
};

export const WithIcon: Story = {
    render: () => (
        <Stat
            label="Total Users"
            value="12,234"
            change={15.3}
            icon={<Users className="h-4 w-4" />}
        />
    ),
};

export const Dashboard: Story = {
    render: () => (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Stat
                label="Total Revenue"
                value="$45,231.89"
                change={20.1}
                helpText="Compared to last month"
                icon={<DollarSign className="h-4 w-4" />}
            />
            <Stat
                label="Active Users"
                value="+2,350"
                change={15.3}
                helpText="Since last hour"
                icon={<Users className="h-4 w-4" />}
            />
            <Stat
                label="Sales"
                value="+12,234"
                change={-5.2}
                helpText="Since last month"
                icon={<ShoppingCart className="h-4 w-4" />}
            />
            <Stat
                label="Active Now"
                value="+573"
                change={8.7}
                helpText="Currently online"
                icon={<Activity className="h-4 w-4" />}
            />
        </div>
    ),
};

export const LargeNumbers: Story = {
    render: () => (
        <div className="grid gap-4 md:grid-cols-3">
            <Stat
                label="Total Downloads"
                value="1.2M"
                change={25.4}
                helpText="All time"
            />
            <Stat
                label="GitHub Stars"
                value="45.2K"
                change={12.8}
                helpText="This month"
            />
            <Stat
                label="Contributors"
                value="234"
                change={5.1}
                helpText="Active contributors"
            />
        </div>
    ),
};
