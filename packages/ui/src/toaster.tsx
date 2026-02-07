"use client"

import { Toaster as Sonner } from "sonner"
import { cn } from "./lib/utils"

type ToasterProps = React.ComponentProps<typeof Sonner> & {
    /** When true, applies compact padding for denser toast notifications */
    compact?: boolean
}

const Toaster = ({ compact, ...props }: ToasterProps) => {
    return (
        <Sonner
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: cn(
                        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-sm group-[.toaster]:rounded-xl",
                        compact && "group-[.toaster]:py-2 group-[.toaster]:px-3"
                    ),
                    title: "group-[.toast]:text-sm group-[.toast]:font-medium",
                    description: "group-[.toast]:text-muted-foreground group-[.toast]:text-xs",
                    icon: "group-[.toast]:shrink-0",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                    success:
                        "group-[.toaster]:border-success/30 group-[.toaster]:text-success [&_[data-description]]:text-success/80",
                    error:
                        "group-[.toaster]:border-destructive/30 group-[.toaster]:text-destructive [&_[data-description]]:text-destructive/80",
                    warning:
                        "group-[.toaster]:border-warning/30 group-[.toaster]:text-warning [&_[data-description]]:text-warning/80",
                    info:
                        "group-[.toaster]:border-info/30 group-[.toaster]:text-info [&_[data-description]]:text-info/80",
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
