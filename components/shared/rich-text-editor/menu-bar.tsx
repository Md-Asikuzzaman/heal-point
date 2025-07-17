import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  SeparatorHorizontal,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Toggle } from "../../ui/toggle";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const options = [
    {
      icon: <Heading1 className="size-5" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },

    {
      icon: <Heading2 className="size-5" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },

    {
      icon: <Heading3 className="size-5" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },

    {
      icon: <Bold className="size-5" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },

    {
      icon: <Italic className="size-5" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },

    {
      icon: <Underline className="size-5" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive("underline"),
    },

    {
      icon: <Strikethrough className="size-5" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },

    {
      icon: <Code className="size-5" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      pressed: editor.isActive("code"),
    },

    {
      icon: <AlignLeft className="size-5" />,
      onClick: () => editor.chain().focus().toggleTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },

    {
      icon: <AlignCenter className="size-5" />,
      onClick: () => editor.chain().focus().toggleTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },

    {
      icon: <AlignRight className="size-5" />,
      onClick: () => editor.chain().focus().toggleTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },

    {
      icon: <AlignJustify className="size-5" />,
      onClick: () => editor.chain().focus().toggleTextAlign("justify").run(),
      pressed: editor.isActive({ textAlign: "justify" }),
    },

    {
      icon: <List className="size-5" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },

    {
      icon: <ListOrdered className="size-5" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },

    {
      icon: <Highlighter />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
    },

    {
      icon: <SeparatorHorizontal />,
      onClick: () => editor.chain().focus().setHardBreak().run(),
      pressed: editor.isActive("break"),
    },
  ];

  return (
    <div className="border p-1 mb-1 bg-slate-50 space-x-2 z-20">
      {options.map((option, index) => (
        <Toggle
          key={index}
          onPressedChange={option.onClick}
          pressed={option.pressed}
          variant="default"
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
};

export default MenuBar;
