import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const alertVariants = cva(
    "relative w-full rounded-xl border text-sm [&>svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-background text-foreground [&>svg]:text-foreground",
                destructive:
                    "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
                success:
                    "border-success/50 text-success dark:border-success [&>svg]:text-success",
                warning:
                    "border-warning/50 text-warning dark:border-warning [&>svg]:text-warning",
                info:
                    "border-info/50 text-info dark:border-info [&>svg]:text-info",
            },
            emphasis: {
                default: "",
                filled: "",
            },
            size: {
                default:
                    "px-4 py-3 [&:has(>svg)]:grid [&:has(>svg)]:grid-cols-[auto_1fr] [&:has(>svg)]:gap-x-3 [&>svg]:row-span-full [&>svg]:mt-0.5",
                compact: "px-3 py-2 flex items-center gap-2",
            },
        },
        compoundVariants: [
            { variant: "default", emphasis: "filled", className: "bg-muted" },
            { variant: "destructive", emphasis: "filled", className: "bg-destructive/10" },
            { variant: "success", emphasis: "filled", className: "bg-success/10" },
            { variant: "warning", emphasis: "filled", className: "bg-warning/10" },
            { variant: "info", emphasis: "filled", className: "bg-info/10" },
        ],
        defaultVariants: {
            variant: "default",
            emphasis: "default",
            size: "default",
        },
    }
)

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, emphasis, size, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, emphasis, size }), className)}
        {...props}
    />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn("mb-1 font-medium leading-none tracking-tight", className)}
        {...props}
    />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm [&_p]:leading-relaxed", className)}
        {...props}
    />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
