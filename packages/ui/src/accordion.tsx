"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { cn } from "./lib/utils"

type AccordionVariant = "default" | "ghost"

const AccordionContext = React.createContext<{ variant: AccordionVariant }>({
    variant: "default",
})

const accordionItemVariants = cva("", {
    variants: {
        variant: {
            default: "border-b",
            ghost: "rounded-xl",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

const accordionTriggerVariants = cva(
    "flex flex-1 items-center justify-between py-3 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",
    {
        variants: {
            variant: {
                default: "hover:underline",
                ghost: "rounded-lg px-3 hover:bg-accent",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface AccordionTriggerProps
    extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    icon?: React.ReactNode
}

const Accordion = ({
    variant = "default",
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant
}) => (
    <AccordionContext.Provider value={{ variant }}>
        <AccordionPrimitive.Root
            className={className}
            {...(props as React.ComponentPropsWithoutRef<
                typeof AccordionPrimitive.Root
            >)}
        />
    </AccordionContext.Provider>
)
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
    const { variant } = React.useContext(AccordionContext)
    return (
        <AccordionPrimitive.Item
            ref={ref}
            className={cn(accordionItemVariants({ variant }), className)}
            {...props}
        />
    )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    AccordionTriggerProps
>(({ className, children, icon, ...props }, ref) => {
    const { variant } = React.useContext(AccordionContext)
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    accordionTriggerVariants({ variant }),
                    className
                )}
                {...props}
            >
                <span className="flex items-center gap-2">
                    {icon && (
                        <span className="shrink-0 text-muted-foreground">
                            {icon}
                        </span>
                    )}
                    {children}
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-3 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionVariant, AccordionTriggerProps }
