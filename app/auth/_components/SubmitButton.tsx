"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { NextPage } from "next";

interface Props extends React.ComponentProps<"button"> {
  text: string;
  loadingText: string;
  isPending: boolean;
}

const SubmitButton: NextPage<Props> = ({
  text,
  loadingText,
  isPending,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={cn(
        "w-full text-white disabled:opacity-50 disabled:cursor-not-allowed",
        className,
        isPending && "pointer-events-none"
      )}
      disabled={isPending}
      type="submit"
    >
      {isPending ? (
        <span className="flex items-center gap-1.5">
          <Loader className="animate-spin" />
          {loadingText}
        </span>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
