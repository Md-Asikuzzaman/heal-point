"use client";

import HardBreak from "@tiptap/extension-hard-break";
import Highlight from "@tiptap/extension-highlight";
import Strike from "@tiptap/extension-strike";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import MenuBar from "./menu-bar";

interface Props {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor = ({ value, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: "list-disc ml-4" } },
        orderedList: { HTMLAttributes: { class: "list-decimal ml-4" } },
        horizontalRule: {
          HTMLAttributes: { class: "border-t border-gray-300 my-4" },
        },
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
      HardBreak,
      Strike,
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "prose rich-text-editor max-w-none leading-relaxed min-h-[200px] p-4 border border-gray-300 rounded-md focus:outline-none",
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  // Sync editor content if value prop changes externally (e.g. on reset)
  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default RichTextEditor;
