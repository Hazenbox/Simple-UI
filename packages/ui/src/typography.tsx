"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h2: "scroll-m-20 text-xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-lg font-semibold tracking-tight",
      h4: "scroll-m-20 text-base font-semibold tracking-tight",
      h5: "scroll-m-20 text-sm font-semibold tracking-tight",
      h6: "scroll-m-20 text-sm font-medium tracking-tight",
      p: "leading-6 [&:not(:first-child)]:mt-4",
      blockquote: "mt-4 border-l-2 pl-4 italic",
      ul: "my-4 ml-6 list-disc [&>li]:mt-1.5",
      ol: "my-4 ml-6 list-decimal [&>li]:mt-1.5",
      code: "relative rounded bg-muted px-1 py-0.5 font-mono text-sm font-semibold",
      lead: "text-lg text-muted-foreground",
      large: "text-base font-semibold",
      small: "text-xs font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "blockquote" | "ul" | "ol" | "code" | "pre"
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild, as, ...props }, ref) => {
    const Comp: any = asChild ? Slot : (as || getDefaultTag(variant || undefined))

    return (
      <Comp
        ref={ref as any}
        className={cn(typographyVariants({ variant, className }))}
        {...(props as any)}
      />
    )
  }
)
Typography.displayName = "Typography"

function getDefaultTag(variant?: string): keyof JSX.IntrinsicElements {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "h5":
      return "h5"
    case "h6":
      return "h6"
    case "blockquote":
      return "blockquote"
    case "ul":
      return "ul"
    case "ol":
      return "ol"
    case "code":
      return "code"
    case "lead":
    case "large":
    case "small":
    case "muted":
    case "link":
      return "p"
    default:
      return "p"
  }
}

export { Typography, typographyVariants }
