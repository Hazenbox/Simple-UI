import type { Meta, StoryObj } from "@storybook/react";
import { Stat, StatGroup } from "@acme/ui/stat";
import { Users, DollarSign, ShoppingCart, Activity, Phone, Clock, CreditCard, Eye, Timer } from "lucide-react";
import { Progress } from "@acme/ui/progress";
import { Button } from "@acme/ui/button";

const meta = {
    title: "UI/Display/Stat",
    component: Stat,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Basic                                                              */
/* ------------------------------------------------------------------ */

export const Default: Story = {
    render: () => <Stat label="Total Revenue" value="$45,231.89" />,
};

export const WithChange: Story = {
    render: () => (
        <Stat
            label="Total Revenue"
            value="$45,231.89"
            change={20.1}
            helpText="Compared to last month"
        />
    ),
};

export const NegativeChange: Story = {
    render: () => (
        <Stat
            label="Active Users"
            value="2,350"
            change={-12.5}
            helpText="Compared to last week"
        />
    ),
};

export const WithIcon: Story = {
    render: () => (
        <Stat
            label="Total Users"
            value="12,234"
            change={15.3}
            icon={<Users className="h-4 w-4" />}
        />
    ),
};

/* ------------------------------------------------------------------ */
/*  With prefix / suffix                                               */
/* ------------------------------------------------------------------ */

export const WithPrefix: Story = {
    render: () => (
        <Stat
            label="Unvoiced amount"
            prefix="$"
            value="1,716.37"
            icon={<Eye className="h-4 w-4" />}
        />
    ),
};

export const WithSuffix: Story = {
    render: () => (
        <Stat
            label="Average Duration"
            value="2:43"
            suffix="min"
            change={8}
            compareText="from last month"
            icon={<Timer className="h-4 w-4" />}
        />
    ),
};

/* ------------------------------------------------------------------ */
/*  With compare text (moodboard: "VS PREV. 28 DAYS")                 */
/* ------------------------------------------------------------------ */

export const WithCompareText: Story = {
    render: () => (
        <Stat
            label="New Users"
            value="1.39K"
            change={147}
            compareText="VS PREV. 28 DAYS"
        />
    ),
};

/* ------------------------------------------------------------------ */
/*  Icon in tinted circle (moodboard pattern)                          */
/* ------------------------------------------------------------------ */

export const WithIconTinted: Story = {
    render: () => (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Stat
                label="New Users"
                value="1.39K"
                change={147}
                compareText="VS PREV. 28 DAYS"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-rose/15">
                        <Users className="h-4 w-4 text-avatar-rose" />
                    </div>
                }
            />
            <Stat
                label="Unique Users"
                value="1.52K"
                change={53}
                compareText="VS PREV. 28 DAYS"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-green/15">
                        <Users className="h-4 w-4 text-avatar-green" />
                    </div>
                }
            />
            <Stat
                label="Retention"
                value="4.53%"
                change={-10.7}
                compareText="VS PREV. 28 DAYS"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-blue/15">
                        <Activity className="h-4 w-4 text-avatar-blue" />
                    </div>
                }
            />
            <Stat
                label="Session"
                value="0.9"
                suffix="sec"
                change={29}
                compareText="VS PREV. 28 DAYS"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-amber/15">
                        <Clock className="h-4 w-4 text-avatar-amber" />
                    </div>
                }
            />
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  With sub-rows (moodboard: Billable / Non-billable)                 */
/* ------------------------------------------------------------------ */

export const WithSubRows: Story = {
    render: () => (
        <div className="grid gap-3 md:grid-cols-2">
            <Stat
                label="Total hours"
                value="17.00"
                icon={<Timer className="h-4 w-4" />}
                footer={
                    <div className="space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Billable</span>
                            <span className="font-medium">17.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Non-billable</span>
                            <span className="font-medium">0.00</span>
                        </div>
                    </div>
                }
            />
            <Stat
                label="Internal costs"
                prefix="$"
                value="611.37"
                footer={
                    <div className="space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Time</span>
                            <span className="font-medium">$1,190.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Non-billable</span>
                            <span className="font-medium text-avatar-blue">$32.75</span>
                        </div>
                    </div>
                }
            />
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  With progress bar (moodboard: Budget remaining)                    */
/* ------------------------------------------------------------------ */

export const WithProgress: Story = {
    render: () => (
        <Stat
            label="Budget remaining"
            value="8.00"
            footer={
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Total budget</span>
                        <span className="font-medium">25.00</span>
                    </div>
                    <Progress value={32} className="h-1.5" />
                </div>
            }
        />
    ),
};

/* ------------------------------------------------------------------ */
/*  Multi-value (moodboard: Latest HR / Lowest HR / Max HR)            */
/* ------------------------------------------------------------------ */

export const MultiValue: Story = {
    render: () => (
        <StatGroup
            items={[
                { label: "Latest HR", value: "100", suffix: "bpm" },
                { label: "Lowest HR", value: "68", suffix: "bpm" },
                { label: "Max HR", value: "168", suffix: "bpm" },
            ]}
        />
    ),
};

/* ------------------------------------------------------------------ */
/*  With action (moodboard: "+ New invoice")                           */
/* ------------------------------------------------------------------ */

export const WithAction: Story = {
    render: () => (
        <Stat
            label="Unvoiced amount"
            prefix="$"
            value="1,716.37"
            icon={<Eye className="h-4 w-4" />}
            footer={
                <Button variant="ghost" size="sm" className="w-full text-xs">
                    + New invoice
                </Button>
            }
        />
    ),
};

/* ------------------------------------------------------------------ */
/*  Compact inline (moodboard: health metrics)                         */
/* ------------------------------------------------------------------ */

export const CompactInline: Story = {
    render: () => (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
                { label: "Resting heart rate", value: "45", suffix: "bpm", color: "text-avatar-pink" },
                { label: "Heart rate variability", value: "83", suffix: "ms", color: "text-avatar-indigo" },
                { label: "Body temperature", value: "+0.2", suffix: "°C", color: "text-avatar-orange" },
                { label: "Respiratory rate", value: "11.0", suffix: "/ min", color: "text-avatar-teal" },
                { label: "Sleep", value: "8h 34m", suffix: "", color: "text-avatar-blue" },
                { label: "Weight", value: "72.5", suffix: "kg", color: "text-avatar-green" },
            ].map((s) => (
                <div key={s.label} className="flex items-start gap-2 rounded-lg border bg-card p-3">
                    <span className={cn("mt-0.5 text-sm", s.color)}>●</span>
                    <div>
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className="text-lg font-bold">
                            {s.value}
                            {s.suffix && <span className="ml-0.5 text-xs font-medium text-muted-foreground">{s.suffix}</span>}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Dashboard row (moodboard: Webcore/ElevenLabs pattern)              */
/* ------------------------------------------------------------------ */

export const DashboardRow: Story = {
    render: () => (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <Stat
                label="Number of Calls"
                value="128"
                change={20}
                compareText="from last month"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-pink/15">
                        <Phone className="h-4 w-4 text-avatar-pink" />
                    </div>
                }
            />
            <Stat
                label="Average Duration"
                value="2:43"
                change={8}
                compareText="from last month"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-violet/15">
                        <Clock className="h-4 w-4 text-avatar-violet" />
                    </div>
                }
            />
            <Stat
                label="Total Credits Spent"
                value="31,250"
                change={15}
                compareText="from last month"
                icon={
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-avatar-emerald/15">
                        <CreditCard className="h-4 w-4 text-avatar-emerald" />
                    </div>
                }
            />
        </div>
    ),
};

/* ------------------------------------------------------------------ */
/*  Dashboard Grid (original story, updated with compact spacing)      */
/* ------------------------------------------------------------------ */

export const Dashboard: Story = {
    render: () => (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Stat
                label="Total Revenue"
                value="$45,231.89"
                change={20.1}
                helpText="Compared to last month"
                icon={<DollarSign className="h-4 w-4" />}
            />
            <Stat
                label="Active Users"
                value="+2,350"
                change={15.3}
                helpText="Since last hour"
                icon={<Users className="h-4 w-4" />}
            />
            <Stat
                label="Sales"
                value="+12,234"
                change={-5.2}
                helpText="Since last month"
                icon={<ShoppingCart className="h-4 w-4" />}
            />
            <Stat
                label="Active Now"
                value="+573"
                change={8.7}
                helpText="Currently online"
                icon={<Activity className="h-4 w-4" />}
            />
        </div>
    ),
};

export const LargeNumbers: Story = {
    render: () => (
        <div className="grid gap-3 md:grid-cols-3">
            <Stat
                label="Total Downloads"
                value="1.2M"
                change={25.4}
                helpText="All time"
            />
            <Stat
                label="GitHub Stars"
                value="45.2K"
                change={12.8}
                helpText="This month"
            />
            <Stat
                label="Contributors"
                value="234"
                change={5.1}
                helpText="Active contributors"
            />
        </div>
    ),
};

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}
