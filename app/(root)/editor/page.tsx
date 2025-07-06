"use client";

import RichTextEditor from "@/components/rich-text-editor";
import { useState } from "react";

export default function EditorPage() {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);

    console.log(content);
  };

  return (
    <div className="min-h-screen max-w-3xl mx-auto my-3">
      <RichTextEditor
        content={content}
        handleContentChange={handleContentChange}
      />

      <div
        className="rich-text-editor space-y-1"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
