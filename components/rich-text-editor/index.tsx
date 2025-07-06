"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./menu-bar";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import HardBreak from "@tiptap/extension-hard-break";

// type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface Props {
  content: string;
  handleContentChange: (newContent: string) => void;
}

const RichTextEditor = ({ content, handleContentChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-4",
          },
        },

        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-4",
          },
        },

        horizontalRule: {
          HTMLAttributes: {
            class: "border-t border-gray-300 my-4",
          },
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      HardBreak,
      Strike,
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose rich-text-editor max-w-none leading-relaxed min-h-[200px] p-4 border border-gray-300 rounded-md",
      },
    },

    onUpdate({ editor }) {
      const html = editor.getHTML();
      handleContentChange(html);
    },
  });

  return (
    <>
      <MenuBar editor={editor} />

      <EditorContent editor={editor} />
    </>
  );
};

export default RichTextEditor;
