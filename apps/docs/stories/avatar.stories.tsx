import type { Meta, StoryObj } from "@storybook/react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    AvatarIcon,
    AvatarInitials,
    AvatarBadge,
} from "@acme/ui/avatar";
import type { AvatarColor, AvatarEmphasis } from "@acme/ui/avatar";
import { Stack } from "@acme/ui/primitives/stack";
import { User, Bell, Settings, Shield, Mail, Heart, Star, Zap } from "lucide-react";

const meta = {
    title: "UI/Display/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Basic                                                              */
/* ------------------------------------------------------------------ */

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/invalid-url.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};

/* ------------------------------------------------------------------ */
/*  All Sizes                                                          */
/* ------------------------------------------------------------------ */

const sizes = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const;

export const AllSizes: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center">
            {sizes.map((s) => (
                <div key={s} className="flex flex-col items-center gap-1">
                    <Avatar size={s}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{s}</span>
                </div>
            ))}
        </Stack>
    ),
};

export const AllSizesFallback: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center">
            {sizes.map((s) => (
                <div key={s} className="flex flex-col items-center gap-1">
                    <Avatar size={s}>
                        <AvatarInitials size={s}>JD</AvatarInitials>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{s}</span>
                </div>
            ))}
        </Stack>
    ),
};

/* ------------------------------------------------------------------ */
/*  Color Grid                                                         */
/* ------------------------------------------------------------------ */

const allColors: AvatarColor[] = [
    "red", "orange", "amber", "yellow", "lime",
    "green", "emerald", "teal", "cyan", "sky",
    "blue", "indigo", "violet", "purple", "fuchsia",
    "pink", "rose", "brown", "slate", "zinc",
];

const emphasisLevels: AvatarEmphasis[] = ["solid", "soft", "outline"];

export const ColorGridSolid: Story = {
    render: () => (
        <div className="grid grid-cols-10 gap-2">
            {allColors.map((c) => (
                <div key={c} className="flex flex-col items-center gap-1">
                    <Avatar color={c} emphasis="solid">
                        <AvatarInitials size="md">
                            {c.slice(0, 2).toUpperCase()}
                        </AvatarInitials>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{c}</span>
                </div>
            ))}
        </div>
    ),
};

export const ColorGridSoft: Story = {
    render: () => (
        <div className="grid grid-cols-10 gap-2">
            {allColors.map((c) => (
                <div key={c} className="flex flex-col items-center gap-1">
                    <Avatar color={c} emphasis="soft">
                        <AvatarInitials size="md">
                            {c.slice(0, 2).toUpperCase()}
                        </AvatarInitials>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{c}</span>
                </div>
            ))}
        </div>
    ),
};

export const ColorGridOutline: Story = {
    render: () => (
        <div className="grid grid-cols-10 gap-2">
            {allColors.map((c) => (
                <div key={c} className="flex flex-col items-center gap-1">
                    <Avatar color={c} emphasis="outline">
                        <AvatarInitials size="md">
                            {c.slice(0, 2).toUpperCase()}
                        </AvatarInitials>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{c}</span>
                </div>
            ))}
        </div>
    ),
};

export const AllEmphasis: Story = {
    render: () => (
        <div className="space-y-4">
            {emphasisLevels.map((e) => (
                <div key={e} className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground capitalize">{e}</p>
                    <div className="flex flex-wrap gap-2">
                        {allColors.map((c) => (
                            <Avatar key={c} color={c} emphasis={e}>
                                <AvatarInitials size="md">
                                    {c.slice(0, 2).toUpperCase()}
                                </AvatarInitials>
                            </Avatar>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Icon Only                                                          */
/* ------------------------------------------------------------------ */

export const IconOnly: Story = {
    render: () => (
        <Stack direction="row" gap="sm" align="center">
            <Avatar color="blue" emphasis="soft">
                <AvatarIcon size="md"><User /></AvatarIcon>
            </Avatar>
            <Avatar color="emerald" emphasis="soft">
                <AvatarIcon size="md"><Shield /></AvatarIcon>
            </Avatar>
            <Avatar color="amber" emphasis="soft">
                <AvatarIcon size="md"><Bell /></AvatarIcon>
            </Avatar>
            <Avatar color="purple" emphasis="soft">
                <AvatarIcon size="md"><Settings /></AvatarIcon>
            </Avatar>
            <Avatar color="rose" emphasis="soft">
                <AvatarIcon size="md"><Heart /></AvatarIcon>
            </Avatar>
            <Avatar color="sky" emphasis="soft">
                <AvatarIcon size="md"><Mail /></AvatarIcon>
            </Avatar>
        </Stack>
    ),
};

export const IconOnlySolid: Story = {
    render: () => (
        <Stack direction="row" gap="sm" align="center">
            <Avatar color="blue" emphasis="solid" size="lg">
                <AvatarIcon size="lg"><User /></AvatarIcon>
            </Avatar>
            <Avatar color="emerald" emphasis="solid" size="lg">
                <AvatarIcon size="lg"><Shield /></AvatarIcon>
            </Avatar>
            <Avatar color="amber" emphasis="solid" size="lg">
                <AvatarIcon size="lg"><Star /></AvatarIcon>
            </Avatar>
            <Avatar color="purple" emphasis="solid" size="lg">
                <AvatarIcon size="lg"><Zap /></AvatarIcon>
            </Avatar>
        </Stack>
    ),
};

/* ------------------------------------------------------------------ */
/*  Initials Only                                                      */
/* ------------------------------------------------------------------ */

export const InitialsOnly: Story = {
    render: () => (
        <Stack direction="row" gap="sm" align="center">
            {(["red", "blue", "green", "purple", "amber", "pink"] as AvatarColor[]).map((c) => (
                <Avatar key={c} color={c} emphasis="soft" size="lg">
                    <AvatarInitials size="lg">
                        {c.slice(0, 1).toUpperCase() + "K"}
                    </AvatarInitials>
                </Avatar>
            ))}
        </Stack>
    ),
};

/* ------------------------------------------------------------------ */
/*  With Badge                                                         */
/* ------------------------------------------------------------------ */

export const WithBadge: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge status="online" />
            </Avatar>
            <Avatar>
                <AvatarImage src="https://avatar.vercel.sh/1.png" />
                <AvatarFallback>U1</AvatarFallback>
                <AvatarBadge status="busy" />
            </Avatar>
            <Avatar>
                <AvatarImage src="https://avatar.vercel.sh/2.png" />
                <AvatarFallback>U2</AvatarFallback>
                <AvatarBadge status="away" />
            </Avatar>
            <Avatar>
                <AvatarFallback>OF</AvatarFallback>
                <AvatarBadge status="offline" />
            </Avatar>
        </Stack>
    ),
};

export const BadgeSizes: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center">
            {(["sm", "md", "lg", "xl"] as const).map((s) => (
                <Avatar key={s} size={s}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge status="online" />
                </Avatar>
            ))}
        </Stack>
    ),
};

/* ------------------------------------------------------------------ */
/*  Group                                                              */
/* ------------------------------------------------------------------ */

export const Group: Story = {
    render: () => (
        <div className="flex -space-x-3">
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/1.png" />
                <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/2.png" />
                <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/3.png" />
                <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarFallback>+5</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const GroupWithBadges: Story = {
    render: () => (
        <div className="flex -space-x-3">
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/1.png" />
                <AvatarFallback>U1</AvatarFallback>
                <AvatarBadge status="online" />
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/2.png" />
                <AvatarFallback>U2</AvatarFallback>
                <AvatarBadge status="busy" />
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatar.vercel.sh/3.png" />
                <AvatarFallback>U3</AvatarFallback>
                <AvatarBadge status="away" />
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarFallback>+2</AvatarFallback>
            </Avatar>
        </div>
    ),
};
