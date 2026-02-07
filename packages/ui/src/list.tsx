import * as React from "react";
import { cn } from "./lib/utils";

const List = React.forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn("divide-y divide-border rounded-md border", className)}
        {...props}
    />
));
List.displayName = "List";

const ListItem = React.forwardRef<
    HTMLLIElement,
    React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={cn(
            "flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors",
            className
        )}
        {...props}
    />
));
ListItem.displayName = "ListItem";

const ListItemIcon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex-shrink-0 text-muted-foreground", className)}
        {...props}
    />
));
ListItemIcon.displayName = "ListItemIcon";

const ListItemContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 space-y-1", className)} {...props} />
));
ListItemContent.displayName = "ListItemContent";

const ListItemTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm font-medium leading-none", className)}
        {...props}
    />
));
ListItemTitle.displayName = "ListItemTitle";

const ListItemDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
ListItemDescription.displayName = "ListItemDescription";

const ListItemAction = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-shrink-0", className)} {...props} />
));
ListItemAction.displayName = "ListItemAction";

export {
    List,
    ListItem,
    ListItemIcon,
    ListItemContent,
    ListItemTitle,
    ListItemDescription,
    ListItemAction,
};
