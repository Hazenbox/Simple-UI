"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

/* ------------------------------------------------------------------ */
/*  Avatar size variants                                               */
/* ------------------------------------------------------------------ */

const avatarVariants = cva(
    "relative flex shrink-0 rounded-full",
    {
        variants: {
            size: {
                "2xs": "h-5 w-5",
                xs: "h-6 w-6",
                sm: "h-7 w-7",
                md: "h-8 w-8",
                lg: "h-10 w-10",
                xl: "h-12 w-12",
                "2xl": "h-16 w-16",
                "3xl": "h-20 w-20",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

/* ------------------------------------------------------------------ */
/*  Avatar color map (identity colors x emphasis)                      */
/* ------------------------------------------------------------------ */

type AvatarColor =
    | "red" | "orange" | "amber" | "yellow" | "lime"
    | "green" | "emerald" | "teal" | "cyan" | "sky"
    | "blue" | "indigo" | "violet" | "purple" | "fuchsia"
    | "pink" | "rose" | "brown" | "slate" | "zinc"

type AvatarEmphasis = "solid" | "soft" | "outline"

const colorMap: Record<AvatarColor, Record<AvatarEmphasis, string>> = {
    red:     { solid: "bg-avatar-red text-white",     soft: "bg-avatar-red/15 text-avatar-red",     outline: "border border-avatar-red/40 text-avatar-red bg-transparent" },
    orange:  { solid: "bg-avatar-orange text-white",  soft: "bg-avatar-orange/15 text-avatar-orange",  outline: "border border-avatar-orange/40 text-avatar-orange bg-transparent" },
    amber:   { solid: "bg-avatar-amber text-white",   soft: "bg-avatar-amber/15 text-avatar-amber",   outline: "border border-avatar-amber/40 text-avatar-amber bg-transparent" },
    yellow:  { solid: "bg-avatar-yellow text-white",  soft: "bg-avatar-yellow/15 text-avatar-yellow",  outline: "border border-avatar-yellow/40 text-avatar-yellow bg-transparent" },
    lime:    { solid: "bg-avatar-lime text-white",    soft: "bg-avatar-lime/15 text-avatar-lime",    outline: "border border-avatar-lime/40 text-avatar-lime bg-transparent" },
    green:   { solid: "bg-avatar-green text-white",   soft: "bg-avatar-green/15 text-avatar-green",   outline: "border border-avatar-green/40 text-avatar-green bg-transparent" },
    emerald: { solid: "bg-avatar-emerald text-white", soft: "bg-avatar-emerald/15 text-avatar-emerald", outline: "border border-avatar-emerald/40 text-avatar-emerald bg-transparent" },
    teal:    { solid: "bg-avatar-teal text-white",    soft: "bg-avatar-teal/15 text-avatar-teal",    outline: "border border-avatar-teal/40 text-avatar-teal bg-transparent" },
    cyan:    { solid: "bg-avatar-cyan text-white",    soft: "bg-avatar-cyan/15 text-avatar-cyan",    outline: "border border-avatar-cyan/40 text-avatar-cyan bg-transparent" },
    sky:     { solid: "bg-avatar-sky text-white",     soft: "bg-avatar-sky/15 text-avatar-sky",     outline: "border border-avatar-sky/40 text-avatar-sky bg-transparent" },
    blue:    { solid: "bg-avatar-blue text-white",    soft: "bg-avatar-blue/15 text-avatar-blue",    outline: "border border-avatar-blue/40 text-avatar-blue bg-transparent" },
    indigo:  { solid: "bg-avatar-indigo text-white",  soft: "bg-avatar-indigo/15 text-avatar-indigo",  outline: "border border-avatar-indigo/40 text-avatar-indigo bg-transparent" },
    violet:  { solid: "bg-avatar-violet text-white",  soft: "bg-avatar-violet/15 text-avatar-violet",  outline: "border border-avatar-violet/40 text-avatar-violet bg-transparent" },
    purple:  { solid: "bg-avatar-purple text-white",  soft: "bg-avatar-purple/15 text-avatar-purple",  outline: "border border-avatar-purple/40 text-avatar-purple bg-transparent" },
    fuchsia: { solid: "bg-avatar-fuchsia text-white", soft: "bg-avatar-fuchsia/15 text-avatar-fuchsia", outline: "border border-avatar-fuchsia/40 text-avatar-fuchsia bg-transparent" },
    pink:    { solid: "bg-avatar-pink text-white",    soft: "bg-avatar-pink/15 text-avatar-pink",    outline: "border border-avatar-pink/40 text-avatar-pink bg-transparent" },
    rose:    { solid: "bg-avatar-rose text-white",    soft: "bg-avatar-rose/15 text-avatar-rose",    outline: "border border-avatar-rose/40 text-avatar-rose bg-transparent" },
    brown:   { solid: "bg-avatar-brown text-white",   soft: "bg-avatar-brown/15 text-avatar-brown",   outline: "border border-avatar-brown/40 text-avatar-brown bg-transparent" },
    slate:   { solid: "bg-avatar-slate text-white",   soft: "bg-avatar-slate/15 text-avatar-slate",   outline: "border border-avatar-slate/40 text-avatar-slate bg-transparent" },
    zinc:    { solid: "bg-avatar-zinc text-white",    soft: "bg-avatar-zinc/15 text-avatar-zinc",    outline: "border border-avatar-zinc/40 text-avatar-zinc bg-transparent" },
}

/* ------------------------------------------------------------------ */
/*  Font-size per avatar size                                          */
/* ------------------------------------------------------------------ */

const fontSizeMap: Record<string, string> = {
    "2xs": "text-[8px] leading-none",
    xs: "text-xs",
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-sm",
    "2xl": "text-lg",
    "3xl": "text-xl",
}

/* Icon size per avatar size */
const iconSizeMap: Record<string, string> = {
    "2xs": "h-2.5 w-2.5",
    xs: "h-3 w-3",
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
    xl: "h-6 w-6",
    "2xl": "h-8 w-8",
    "3xl": "h-10 w-10",
}

/* ------------------------------------------------------------------ */
/*  Avatar Root                                                        */
/* ------------------------------------------------------------------ */

export interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
    color?: AvatarColor
    emphasis?: AvatarEmphasis
}

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, size, color, emphasis = "soft", ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            avatarVariants({ size }),
            color && colorMap[color]?.[emphasis],
            className
        )}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/* ------------------------------------------------------------------ */
/*  Avatar Image                                                       */
/* ------------------------------------------------------------------ */

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full overflow-hidden rounded-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/* ------------------------------------------------------------------ */
/*  Avatar Fallback                                                    */
/* ------------------------------------------------------------------ */

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-muted font-medium",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

/* ------------------------------------------------------------------ */
/*  Avatar Icon – renders a Lucide icon inside the circle              */
/* ------------------------------------------------------------------ */

export interface AvatarIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: NonNullable<VariantProps<typeof avatarVariants>["size"]>
}

const AvatarIcon = React.forwardRef<HTMLSpanElement, AvatarIconProps>(
    ({ className, size = "md", children, ...props }, ref) => (
        <span
            ref={ref}
            className={cn(
                "flex h-full w-full items-center justify-center rounded-full",
                className
            )}
            {...props}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
                        className: cn(iconSizeMap[size ?? "md"], (child as React.ReactElement<{ className?: string }>).props.className),
                    })
                }
                return child
            })}
        </span>
    )
)
AvatarIcon.displayName = "AvatarIcon"

/* ------------------------------------------------------------------ */
/*  Avatar Initials – convenience wrapper for text-based fallback      */
/* ------------------------------------------------------------------ */

export interface AvatarInitialsProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: NonNullable<VariantProps<typeof avatarVariants>["size"]>
}

const AvatarInitials = React.forwardRef<HTMLSpanElement, AvatarInitialsProps>(
    ({ className, size = "md", children, ...props }, ref) => (
        <span
            ref={ref}
            className={cn(
                "flex h-full w-full items-center justify-center rounded-full font-medium select-none",
                fontSizeMap[size ?? "md"],
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
)
AvatarInitials.displayName = "AvatarInitials"

/* ------------------------------------------------------------------ */
/*  Avatar Badge – status dot overlaid on avatar                       */
/* ------------------------------------------------------------------ */

const badgeStatusMap = {
    online: "bg-success",
    offline: "bg-muted-foreground",
    busy: "bg-destructive",
    away: "bg-warning",
} as const

export interface AvatarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    status?: keyof typeof badgeStatusMap
}

const AvatarBadge = React.forwardRef<HTMLSpanElement, AvatarBadgeProps>(
    ({ className, status = "online", ...props }, ref) => (
        <span
            ref={ref}
            className={cn(
                "absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-background",
                badgeStatusMap[status],
                className
            )}
            {...props}
        />
    )
)
AvatarBadge.displayName = "AvatarBadge"

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */

export {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarIcon,
    AvatarInitials,
    AvatarBadge,
    avatarVariants,
    fontSizeMap as avatarFontSizeMap,
    iconSizeMap as avatarIconSizeMap,
}

export type { AvatarColor, AvatarEmphasis }
