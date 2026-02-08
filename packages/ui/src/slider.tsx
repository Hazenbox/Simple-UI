"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./lib/utils"

const sliderTrackVariants = cva(
    "relative w-full grow overflow-hidden rounded-full bg-secondary",
    {
        variants: {
            size: {
                sm: "h-0.5",
                default: "h-1",
                lg: "h-1.5",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

const sliderThumbVariants = cva(
    "block rounded-full border-2 border-primary bg-background ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 hover:ring-4 hover:ring-primary/20 active:ring-8 active:ring-primary/30 active:scale-105 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            size: {
                sm: "h-3.5 w-2.5",
                default: "h-4.5 w-3",
                lg: "h-5.5 w-3.5",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface SliderProps
    extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderTrackVariants> { }

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderProps
>(({ className, size, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
        )}
        {...props}
    >
        <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={cn(sliderThumbVariants({ size }))} />
    </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
