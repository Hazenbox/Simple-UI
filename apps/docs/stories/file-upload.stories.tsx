import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "@acme/ui/file-upload";
import { useState } from "react";

const meta = {
    title: "UI/Input/File Upload",
    component: FileUpload,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="w-[500px]">
                <FileUpload files={files} onChange={setFiles} />
            </div>
        );
    },
};

export const ImageOnly: Story = {
    render: () => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="w-[500px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Upload Images</h3>
                    <p className="text-xs text-muted-foreground">
                        Only image files are accepted
                    </p>
                </div>
                <FileUpload
                    files={files}
                    onChange={setFiles}
                    accept="image/*"
                    maxFiles={3}
                />
            </div>
        );
    },
};

export const DocumentUpload: Story = {
    render: () => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="w-[500px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Upload Documents</h3>
                    <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX files only (Max 10MB)
                    </p>
                </div>
                <FileUpload
                    files={files}
                    onChange={setFiles}
                    accept=".pdf,.doc,.docx"
                    maxSize={10 * 1024 * 1024}
                    maxFiles={5}
                />
            </div>
        );
    },
};

export const AvatarUpload: Story = {
    render: () => {
        const [files, setFiles] = useState<File[]>([]);
        return (
            <div className="w-[400px] space-y-4">
                <div>
                    <h3 className="text-sm font-medium">Profile Picture</h3>
                    <p className="text-xs text-muted-foreground">
                        Upload a profile picture (Max 2MB)
                    </p>
                </div>
                <FileUpload
                    files={files}
                    onChange={setFiles}
                    accept="image/png,image/jpeg,image/jpg"
                    maxSize={2 * 1024 * 1024}
                    maxFiles={1}
                />
            </div>
        );
    },
};
