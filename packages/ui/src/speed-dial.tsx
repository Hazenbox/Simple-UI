import * as React from "react";
import { cn } from "./lib/utils";
import { Plus, X } from "lucide-react";

export interface SpeedDialProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "up" | "down" | "left" | "right";
}

export interface SpeedDialActionProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    label?: string;
}

const SpeedDialContext = React.createContext<{
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    direction: "up" | "down" | "left" | "right";
}>({
    isOpen: false,
    setIsOpen: () => { },
    direction: "up",
});

export const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
    ({ className, direction = "up", children, ...props }, ref) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <SpeedDialContext.Provider value={{ isOpen, setIsOpen, direction }}>
                <div
                    ref={ref}
                    className={cn("relative inline-flex", className)}
                    {...props}
                >
                    {children}
                </div>
            </SpeedDialContext.Provider>
        );
    }
);
SpeedDial.displayName = "SpeedDial";

export const SpeedDialTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
    const { isOpen, setIsOpen } = React.useContext(SpeedDialContext);

    return (
        <button
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105",
                isOpen && "rotate-45",
                className
            )}
            {...props}
        >
            {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </button>
    );
});
SpeedDialTrigger.displayName = "SpeedDialTrigger";

export const SpeedDialContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const { isOpen, direction } = React.useContext(SpeedDialContext);

    const directionClasses = {
        up: "bottom-full mb-4 flex-col-reverse",
        down: "top-full mt-4 flex-col",
        left: "right-full mr-4 flex-row-reverse",
        right: "left-full ml-4 flex-row",
    };

    if (!isOpen) return null;

    return (
        <div
            ref={ref}
            className={cn(
                "absolute flex gap-3",
                directionClasses[direction],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});
SpeedDialContent.displayName = "SpeedDialContent";

export const SpeedDialAction = React.forwardRef<
    HTMLButtonElement,
    SpeedDialActionProps
>(({ className, icon, label, ...props }, ref) => {
    const { direction } = React.useContext(SpeedDialContext);
    
    return (
        <div className="flex items-center gap-3">
            {label && direction === "left" && (
                <span className="whitespace-nowrap rounded-md bg-background px-3 py-1 text-sm font-medium shadow-md">
                    {label}
                </span>
            )}
            <button
                ref={ref}
                className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg transition-transform hover:scale-105",
                    className
                )}
                {...props}
            >
                {icon}
            </button>
            {label && direction !== "left" && (
                <span className="whitespace-nowrap rounded-md bg-background px-3 py-1 text-sm font-medium shadow-md">
                    {label}
                </span>
            )}
        </div>
    );
});
SpeedDialAction.displayName = "SpeedDialAction";
