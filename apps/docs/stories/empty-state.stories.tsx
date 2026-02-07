import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@acme/ui/empty-state";
import { FileQuestion, Inbox, Search, ShoppingCart } from "lucide-react";

const meta = {
    title: "UI/Display/Empty State",
    component: EmptyState,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <EmptyState
            title="No results found"
            description="Try adjusting your search or filter to find what you're looking for."
        />
    ),
};

export const WithIcon: Story = {
    render: () => (
        <EmptyState
            icon={<FileQuestion />}
            title="No files found"
            description="Upload your first file to get started."
        />
    ),
};

export const WithAction: Story = {
    render: () => (
        <EmptyState
            icon={<Inbox />}
            title="No messages"
            description="You don't have any messages yet. Start a conversation to get started."
            action={{
                label: "New Message",
                onClick: () => alert("Create new message"),
            }}
        />
    ),
};

export const SearchResults: Story = {
    render: () => (
        <div className="w-full max-w-2xl">
            <EmptyState
                icon={<Search />}
                title="No search results"
                description="We couldn't find any results for your search. Try different keywords or check your spelling."
                action={{
                    label: "Clear Search",
                    onClick: () => alert("Clear search"),
                }}
            />
        </div>
    ),
};

export const EmptyCart: Story = {
    render: () => (
        <EmptyState
            icon={<ShoppingCart />}
            title="Your cart is empty"
            description="Looks like you haven't added anything to your cart yet. Start shopping to add items."
            action={{
                label: "Start Shopping",
                onClick: () => alert("Navigate to shop"),
            }}
        />
    ),
};

export const NoData: Story = {
    render: () => (
        <div className="w-full max-w-3xl">
            <EmptyState
                title="No data available"
                description="There is no data to display at this time. Check back later or try refreshing the page."
            />
        </div>
    ),
};
