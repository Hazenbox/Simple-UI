import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "./lib/utils"

type BreadcrumbVariant = "default" | "emphasis" | "pill"

const BreadcrumbContext = React.createContext<{ variant: BreadcrumbVariant }>({
    variant: "default",
})

const breadcrumbListVariants = cva(
    "flex flex-wrap items-center break-words",
    {
        variants: {
            variant: {
                default: "gap-1 text-xs text-muted-foreground",
                emphasis: "gap-1.5 text-sm text-muted-foreground",
                pill: "gap-1 text-xs text-muted-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Breadcrumb = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<"nav"> & {
        separator?: React.ReactNode
        variant?: BreadcrumbVariant
    }
>(({ variant = "default", ...props }, ref) => (
    <BreadcrumbContext.Provider value={{ variant }}>
        <nav ref={ref} aria-label="breadcrumb" {...props} />
    </BreadcrumbContext.Provider>
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
    HTMLOListElement,
    React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => {
    const { variant } = React.useContext(BreadcrumbContext)
    return (
        <ol
            ref={ref}
            className={cn(breadcrumbListVariants({ variant }), className)}
            {...props}
        />
    )
})
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => {
    const { variant } = React.useContext(BreadcrumbContext)
    return (
        <li
            ref={ref}
            className={cn(
                "inline-flex items-center gap-1",
                variant === "pill" && "rounded-md bg-muted px-2 py-0.5",
                className
            )}
            {...props}
        />
    )
})
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a"> & {
        asChild?: boolean
    }
>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"

    return (
        <Comp
            ref={ref}
            className={cn(
                "transition-colors hover:text-foreground",
                className
            )}
            {...props}
        />
    )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
    const { variant } = React.useContext(BreadcrumbContext)
    return (
        <span
            ref={ref}
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={cn(
                "text-foreground",
                variant === "emphasis"
                    ? "font-semibold"
                    : "font-normal",
                className
            )}
            {...props}
        />
    )
})
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
    children,
    className,
    ...props
}: React.ComponentProps<"li">) => (
    <li
        role="presentation"
        aria-hidden="true"
        className={cn("[&>svg]:size-3", className)}
        {...props}
    >
        {children ?? <ChevronRight />}
    </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
    className,
    ...props
}: React.ComponentProps<"span">) => (
    <span
        role="presentation"
        aria-hidden="true"
        className={cn(
            "flex h-7 w-7 items-center justify-center",
            className
        )}
        {...props}
    >
        <MoreHorizontal className="h-3.5 w-3.5" />
        <span className="sr-only">More</span>
    </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
}
export type { BreadcrumbVariant }
