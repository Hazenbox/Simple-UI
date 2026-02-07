import * as React from "react";
import { cn } from "./lib/utils";
import { Button } from "./button";
import {
    Bold,
    Italic,
    Underline,
    List,
    ListOrdered,
    Heading1,
    Heading2,
} from "lucide-react";

export interface RichTextEditorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
}

export const RichTextEditor = React.forwardRef<
    HTMLDivElement,
    RichTextEditorProps
>(({ className, value = "", onValueChange, ...props }, ref) => {
    const editorRef = React.useRef<HTMLDivElement>(null);

    const execCommand = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
    };

    const handleInput = () => {
        const content = editorRef.current?.innerHTML || "";
        onValueChange?.(content);
    };

    React.useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value;
        }
    }, [value]);

    return (
        <div ref={ref} className={cn("space-y-2", className)}>
            <div className="flex flex-wrap gap-1 rounded-lg border bg-muted/50 p-2">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("bold")}
                    type="button"
                >
                    <Bold className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("italic")}
                    type="button"
                >
                    <Italic className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("underline")}
                    type="button"
                >
                    <Underline className="h-4 w-4" />
                </Button>
                <div className="mx-1 w-px bg-border" />
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("formatBlock", "h1")}
                    type="button"
                >
                    <Heading1 className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("formatBlock", "h2")}
                    type="button"
                >
                    <Heading2 className="h-4 w-4" />
                </Button>
                <div className="mx-1 w-px bg-border" />
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("insertUnorderedList")}
                    type="button"
                >
                    <List className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand("insertOrderedList")}
                    type="button"
                >
                    <ListOrdered className="h-4 w-4" />
                </Button>
            </div>
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                className={cn(
                    "min-h-48 rounded-lg border bg-background p-4 text-sm outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    "prose prose-sm dark:prose-invert max-w-none"
                )}
                {...props}
            />
        </div>
    );
});

RichTextEditor.displayName = "RichTextEditor";
