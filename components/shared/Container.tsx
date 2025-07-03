import { cn } from "@/lib/utils";
import { NextPage } from "next";
import React from "react";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

const Container: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("max-w-[1400px] w-full mx-auto px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
};

export default Container;
