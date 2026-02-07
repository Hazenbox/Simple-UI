import type { Meta, StoryObj } from "@storybook/react";
import {
    SpeedDial,
    SpeedDialTrigger,
    SpeedDialContent,
    SpeedDialAction,
} from "@acme/ui/speed-dial";
import { Share, Edit, Mail, Copy } from "lucide-react";

const meta = {
    title: "UI/Mobile/Speed Dial",
    component: SpeedDial,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DirectionUp: Story = {
    render: () => (
        <div className="flex h-[400px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <SpeedDial direction="up">
                <SpeedDialTrigger />
                <SpeedDialContent>
                    <SpeedDialAction icon={<Share className="h-5 w-5" />} label="Share" />
                    <SpeedDialAction icon={<Edit className="h-5 w-5" />} label="Edit" />
                    <SpeedDialAction icon={<Mail className="h-5 w-5" />} label="Email" />
                    <SpeedDialAction icon={<Copy className="h-5 w-5" />} label="Copy" />
                </SpeedDialContent>
            </SpeedDial>
        </div>
    ),
};

export const DirectionLeft: Story = {
    render: () => (
        <div className="flex h-[300px] w-[600px] items-center justify-end rounded-lg border bg-muted/50 p-6">
            <SpeedDial direction="left">
                <SpeedDialTrigger />
                <SpeedDialContent>
                    <SpeedDialAction icon={<Share className="h-5 w-5" />} label="Share" />
                    <SpeedDialAction icon={<Edit className="h-5 w-5" />} label="Edit" />
                    <SpeedDialAction icon={<Mail className="h-5 w-5" />} label="Email" />
                </SpeedDialContent>
            </SpeedDial>
        </div>
    ),
};

export const NoLabels: Story = {
    render: () => (
        <div className="flex h-[400px] w-[400px] items-end justify-end rounded-lg border bg-muted/50 p-6">
            <SpeedDial direction="up">
                <SpeedDialTrigger />
                <SpeedDialContent>
                    <SpeedDialAction icon={<Share className="h-5 w-5" />} />
                    <SpeedDialAction icon={<Edit className="h-5 w-5" />} />
                    <SpeedDialAction icon={<Mail className="h-5 w-5" />} />
                </SpeedDialContent>
            </SpeedDial>
        </div>
    ),
};
