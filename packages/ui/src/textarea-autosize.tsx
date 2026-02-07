"use client"

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";
import { textareaVariants } from "./textarea";

export interface TextareaAutosizeProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
    minRows?: number;
    maxRows?: number;
}

export const TextareaAutosize = React.forwardRef<
    HTMLTextAreaElement,
    TextareaAutosizeProps
>(({ className, minRows = 2, maxRows = 10, density = "default", onChange, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [height, setHeight] = React.useState<number | undefined>(undefined);

    const adjustHeight = React.useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        // Reset height to get accurate scrollHeight
        textarea.style.height = "auto";
        
        const computedStyle = getComputedStyle(textarea);
        const lineHeight = parseFloat(computedStyle.lineHeight) || 20;
        const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
        const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
        const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
        const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;
        
        const padding = paddingTop + paddingBottom;
        const border = borderTop + borderBottom;
        const minHeight = lineHeight * minRows + padding + border;
        const maxHeight = lineHeight * maxRows + padding + border;

        const scrollHeight = textarea.scrollHeight;
        const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);

        setHeight(newHeight);
        textarea.style.height = `${newHeight}px`;
    }, [minRows, maxRows]);

    React.useEffect(() => {
        adjustHeight();
    }, [adjustHeight, props.value, density]);

    React.useLayoutEffect(() => {
        adjustHeight();
    }, [adjustHeight]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        adjustHeight();
        onChange?.(e);
    };

    return (
        <textarea
            ref={(node) => {
                textareaRef.current = node;
                if (typeof ref === "function") {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            }}
            className={cn(
                textareaVariants({ density }),
                "resize-none transition-[height] duration-200 ease-in-out",
                className
            )}
            style={{
                height: height ? `${height}px` : undefined,
                minHeight: height ? undefined : "auto",
            }}
            onChange={handleChange}
            {...props}
        />
    );
});

TextareaAutosize.displayName = "TextareaAutosize";
