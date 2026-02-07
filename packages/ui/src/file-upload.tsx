import * as React from "react";
import { cn } from "./lib/utils";
import { Upload, X, File } from "lucide-react";
import { Button } from "./button";

export interface FileUploadProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    onChange?: (files: File[]) => void;
    onRemove?: (index: number) => void;
    maxFiles?: number;
    maxSize?: number; // in bytes
    accept?: string;
    files?: File[];
}

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
    (
        {
            className,
            onChange,
            onRemove,
            maxFiles = 5,
            maxSize = 5 * 1024 * 1024, // 5MB default
            accept,
            files = [],
            ...props
        },
        ref
    ) => {
        const [isDragging, setIsDragging] = React.useState(false);
        const inputRef = React.useRef<HTMLInputElement>(null);

        const handleFiles = (newFiles: FileList | null) => {
            if (!newFiles) return;

            const fileArray = Array.from(newFiles);
            const validFiles = fileArray.filter((file) => {
                if (maxSize && file.size > maxSize) {
                    console.warn(`File ${file.name} exceeds max size`);
                    return false;
                }
                return true;
            });

            const totalFiles = files.length + validFiles.length;
            if (totalFiles > maxFiles) {
                console.warn(`Cannot upload more than ${maxFiles} files`);
                return;
            }

            onChange?.([...files, ...validFiles]);
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
        };

        const handleDragOver = (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(true);
        };

        const handleDragLeave = () => {
            setIsDragging(false);
        };

        const handleClick = () => {
            inputRef.current?.click();
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            handleFiles(e.target.files);
        };

        const handleRemove = (index: number) => {
            onRemove?.(index);
            const newFiles = files.filter((_, i) => i !== index);
            onChange?.(newFiles);
        };

        const formatFileSize = (bytes: number) => {
            if (bytes === 0) return "0 Bytes";
            const k = 1024;
            const sizes = ["Bytes", "KB", "MB", "GB"];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
        };

        return (
            <div ref={ref} className={cn("space-y-4", className)}>
                <div
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={cn(
                        "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors",
                        isDragging
                            ? "border-primary bg-primary/5"
                            : "border-muted-foreground/25 hover:border-primary/50"
                    )}
                >
                    <Upload className="mb-3 h-8 w-8 text-muted-foreground" />
                    <p className="mb-2 text-sm font-medium">
                        Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {accept || "Any file type"} (Max {formatFileSize(maxSize)})
                    </p>
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        onChange={handleInputChange}
                        accept={accept}
                        multiple={maxFiles > 1}
                        {...props}
                    />
                </div>

                {files.length > 0 && (
                    <div className="space-y-2">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-lg border p-2"
                            >
                                <div className="flex items-center gap-2">
                                    <File className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">{file.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {formatFileSize(file.size)}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemove(index)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

FileUpload.displayName = "FileUpload";
