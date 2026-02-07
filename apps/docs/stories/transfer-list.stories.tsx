import type { Meta, StoryObj } from "@storybook/react";
import { TransferList, TransferListItem } from "@acme/ui/transfer-list";
import { useState } from "react";

const meta = {
    title: "UI/Input/Transfer List",
    component: TransferList,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof TransferList>;

export default meta;
type Story = StoryObj<typeof meta>;

const initialLeftItems: TransferListItem[] = [
    { id: "1", label: "React" },
    { id: "2", label: "Vue" },
    { id: "3", label: "Angular" },
    { id: "4", label: "Svelte" },
    { id: "5", label: "Solid" },
];

const initialRightItems: TransferListItem[] = [];

export const Default: Story = {
    render: () => {
        const [leftItems, setLeftItems] = useState(initialLeftItems);
        const [rightItems, setRightItems] = useState<TransferListItem[]>([]);

        return (
            <TransferList
                leftItems={leftItems}
                rightItems={rightItems}
                onChange={(left, right) => {
                    setLeftItems(left);
                    setRightItems(right);
                }}
            />
        );
    },
};

export const WithSearch: Story = {
    render: () => {
        const [leftItems, setLeftItems] = useState(initialLeftItems);
        const [rightItems, setRightItems] = useState<TransferListItem[]>([]);

        return (
            <TransferList
                leftItems={leftItems}
                rightItems={rightItems}
                onChange={(left, right) => {
                    setLeftItems(left);
                    setRightItems(right);
                }}
                searchable
            />
        );
    },
};

export const CustomTitles: Story = {
    render: () => {
        const [leftItems, setLeftItems] = useState(initialLeftItems);
        const [rightItems, setRightItems] = useState<TransferListItem[]>([]);

        return (
            <TransferList
                leftTitle="All Frameworks"
                rightTitle="My Stack"
                leftItems={leftItems}
                rightItems={rightItems}
                onChange={(left, right) => {
                    setLeftItems(left);
                    setRightItems(right);
                }}
                searchable
            />
        );
    },
};

export const PermissionsManager: Story = {
    render: () => {
        const allPermissions: TransferListItem[] = [
            { id: "read", label: "Read" },
            { id: "write", label: "Write" },
            { id: "delete", label: "Delete" },
            { id: "admin", label: "Admin" },
            { id: "share", label: "Share" },
            { id: "export", label: "Export" },
        ];

        const [leftItems, setLeftItems] = useState(allPermissions);
        const [rightItems, setRightItems] = useState<TransferListItem[]>([]);

        return (
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold">User Permissions</h3>
                    <p className="text-sm text-muted-foreground">
                        Manage permissions for this user
                    </p>
                </div>
                <TransferList
                    leftTitle="Available Permissions"
                    rightTitle="Granted Permissions"
                    leftItems={leftItems}
                    rightItems={rightItems}
                    onChange={(left, right) => {
                        setLeftItems(left);
                        setRightItems(right);
                    }}
                    searchable
                />
            </div>
        );
    },
};
