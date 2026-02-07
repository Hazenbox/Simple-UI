import * as React from "react";
import { cn } from "./lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";

export interface TransferListItem {
    id: string;
    label: string;
    disabled?: boolean;
}

export interface TransferListProps {
    leftTitle?: string;
    rightTitle?: string;
    leftItems: TransferListItem[];
    rightItems: TransferListItem[];
    onChange: (leftItems: TransferListItem[], rightItems: TransferListItem[]) => void;
    searchable?: boolean;
}

export const TransferList = React.forwardRef<HTMLDivElement, TransferListProps>(
    (
        {
            leftTitle = "Available",
            rightTitle = "Selected",
            leftItems,
            rightItems,
            onChange,
            searchable = false,
        },
        ref
    ) => {
        const [leftSelected, setLeftSelected] = React.useState<Set<string>>(new Set());
        const [rightSelected, setRightSelected] = React.useState<Set<string>>(new Set());
        const [leftSearch, setLeftSearch] = React.useState("");
        const [rightSearch, setRightSearch] = React.useState("");

        const filteredLeftItems = React.useMemo(() => {
            if (!searchable || !leftSearch) return leftItems;
            return leftItems.filter((item) =>
                item.label.toLowerCase().includes(leftSearch.toLowerCase())
            );
        }, [leftItems, leftSearch, searchable]);

        const filteredRightItems = React.useMemo(() => {
            if (!searchable || !rightSearch) return rightItems;
            return rightItems.filter((item) =>
                item.label.toLowerCase().includes(rightSearch.toLowerCase())
            );
        }, [rightItems, rightSearch, searchable]);

        const moveToRight = () => {
            const itemsToMove = leftItems.filter((item) => leftSelected.has(item.id));
            const newLeftItems = leftItems.filter((item) => !leftSelected.has(item.id));
            const newRightItems = [...rightItems, ...itemsToMove];
            onChange(newLeftItems, newRightItems);
            setLeftSelected(new Set());
        };

        const moveToLeft = () => {
            const itemsToMove = rightItems.filter((item) => rightSelected.has(item.id));
            const newRightItems = rightItems.filter((item) => !rightSelected.has(item.id));
            const newLeftItems = [...leftItems, ...itemsToMove];
            onChange(newLeftItems, newRightItems);
            setRightSelected(new Set());
        };

        const toggleLeftSelection = (id: string) => {
            const newSelected = new Set(leftSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            setLeftSelected(newSelected);
        };

        const toggleRightSelection = (id: string) => {
            const newSelected = new Set(rightSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            setRightSelected(newSelected);
        };

        const renderList = (
            items: TransferListItem[],
            selected: Set<string>,
            onToggle: (id: string) => void,
            title: string,
            search: string,
            onSearchChange: (value: string) => void
        ) => (
            <div className="flex flex-1 flex-col rounded-lg border">
                <div className="border-b p-3">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-xs text-muted-foreground">
                        {items.length} {items.length === 1 ? "item" : "items"}
                    </p>
                </div>
                {searchable && (
                    <div className="border-b p-2">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="pl-8"
                            />
                        </div>
                    </div>
                )}
                <div className="flex-1 overflow-auto p-2 max-h-72">
                    {items.length === 0 ? (
                        <p className="p-4 text-center text-sm text-muted-foreground">
                            No items
                        </p>
                    ) : (
                        <div className="space-y-1">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => onToggle(item.id)}
                                    disabled={item.disabled}
                                    className={cn(
                                        "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
                                        "hover:bg-accent hover:text-accent-foreground",
                                        selected.has(item.id) && "bg-accent text-accent-foreground",
                                        item.disabled && "cursor-not-allowed opacity-50"
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );

        return (
            <div ref={ref} className="flex items-center gap-4">
                {renderList(
                    filteredLeftItems,
                    leftSelected,
                    toggleLeftSelection,
                    leftTitle,
                    leftSearch,
                    setLeftSearch
                )}
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={moveToRight}
                        disabled={leftSelected.size === 0}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={moveToLeft}
                        disabled={rightSelected.size === 0}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </div>
                {renderList(
                    filteredRightItems,
                    rightSelected,
                    toggleRightSelection,
                    rightTitle,
                    rightSearch,
                    setRightSearch
                )}
            </div>
        );
    }
);

TransferList.displayName = "TransferList";
