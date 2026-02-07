"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "framer-motion"
import { cn } from "./lib/utils"

type TabsVariant = "default" | "underline"

const TabsContext = React.createContext<{ variant: TabsVariant }>({
    variant: "default",
})

const Tabs = ({
    variant = "default",
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    variant?: TabsVariant
}) => (
    <TabsContext.Provider value={{ variant }}>
        <TabsPrimitive.Root className={className} {...props} />
    </TabsContext.Provider>
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
    const { variant } = React.useContext(TabsContext)
    return (
        <TabsPrimitive.List
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center text-muted-foreground",
                variant === "default" &&
                    "h-8 rounded-lg bg-muted p-0.5",
                variant === "underline" &&
                    "h-8 gap-2 border-b border-border",
                className
            )}
            {...props}
        />
    )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
    const { variant } = React.useContext(TabsContext)
    return (
        <TabsPrimitive.Trigger
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-2 py-0.5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-3.5 [&>svg]:shrink-0",
                variant === "default" &&
                    "rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
                variant === "underline" &&
                    "rounded-none border-b-2 border-transparent pb-1.5 data-[state=active]:border-primary data-[state=active]:text-foreground",
                className
            )}
            {...props}
        />
    )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(
            "mt-1.5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
            className
        )}
        {...props}
    >
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            {props.children}
        </motion.div>
    </TabsPrimitive.Content>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
export type { TabsVariant }
