import * as React from "react"
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "./lib/utils"
import { Button } from "./button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>[0]
type CarouselSize = "sm" | "default" | "lg"
type CarouselEmphasis = "default" | "filled" | "minimal"

interface CarouselProps {
    opts?: UseCarouselParameters
    plugins?: any[]
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void
    size?: CarouselSize
    emphasis?: CarouselEmphasis
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: CarouselApi
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }

    return context
}

const navSizeMap: Record<CarouselSize, { button: string; icon: string }> = {
    sm: { button: "h-6 w-6", icon: "h-3 w-3" },
    default: { button: "h-8 w-8", icon: "h-4 w-4" },
    lg: { button: "h-10 w-10", icon: "h-5 w-5" },
}

const navOffsetMap: Record<
    CarouselSize,
    { horizontal: { prev: string; next: string }; vertical: { prev: string; next: string } }
> = {
    sm: {
        horizontal: { prev: "-left-9", next: "-right-9" },
        vertical: { prev: "-top-9", next: "-bottom-9" },
    },
    default: {
        horizontal: { prev: "-left-12", next: "-right-12" },
        vertical: { prev: "-top-12", next: "-bottom-12" },
    },
    lg: {
        horizontal: { prev: "-left-14", next: "-right-14" },
        vertical: { prev: "-top-14", next: "-bottom-14" },
    },
}

const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            size = "default",
            emphasis = "default",
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        )
        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return
            }

            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === "ArrowRight") {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext]
        )

        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api?.off("select", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation ||
                        (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                    size,
                    emphasis,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal"
                        ? "-ml-4"
                        : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
})
CarouselItem.displayName = "CarouselItem"

function getNavButtonVariant(emphasis: CarouselEmphasis) {
    switch (emphasis) {
        case "filled":
            return "secondary" as const
        case "minimal":
            return "ghost" as const
        default:
            return "outline" as const
    }
}

const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant, size = "icon", ...props }, ref) => {
    const {
        orientation,
        scrollPrev,
        canScrollPrev,
        size: carouselSize = "default",
        emphasis = "default",
    } = useCarousel()
    const sizeConfig = navSizeMap[carouselSize]
    const offsets = navOffsetMap[carouselSize]
    const resolvedVariant = variant ?? getNavButtonVariant(emphasis)

    return (
        <Button
            ref={ref}
            variant={resolvedVariant}
            size={size}
            className={cn(
                "absolute rounded-full",
                sizeConfig.button,
                orientation === "horizontal"
                    ? `${offsets.horizontal.prev} top-1/2 -translate-y-1/2`
                    : `${offsets.vertical.prev} left-1/2 -translate-x-1/2 rotate-90`,
                className
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className={sizeConfig.icon} />
            <span className="sr-only">Previous slide</span>
        </Button>
    )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant, size = "icon", ...props }, ref) => {
    const {
        orientation,
        scrollNext,
        canScrollNext,
        size: carouselSize = "default",
        emphasis = "default",
    } = useCarousel()
    const sizeConfig = navSizeMap[carouselSize]
    const offsets = navOffsetMap[carouselSize]
    const resolvedVariant = variant ?? getNavButtonVariant(emphasis)

    return (
        <Button
            ref={ref}
            variant={resolvedVariant}
            size={size}
            className={cn(
                "absolute rounded-full",
                sizeConfig.button,
                orientation === "horizontal"
                    ? `${offsets.horizontal.next} top-1/2 -translate-y-1/2`
                    : `${offsets.vertical.next} left-1/2 -translate-x-1/2 rotate-90`,
                className
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className={sizeConfig.icon} />
            <span className="sr-only">Next slide</span>
        </Button>
    )
})
CarouselNext.displayName = "CarouselNext"

export {
    type CarouselApi,
    type CarouselSize,
    type CarouselEmphasis,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
}
