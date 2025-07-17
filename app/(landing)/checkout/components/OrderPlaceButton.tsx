"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { NextPage } from "next";

interface Props extends React.ComponentProps<"button"> {
  text: string;
  mdText?: string;
  lgText?: string;
  isPending: boolean;
  cart: CartProductType[];
}

const OrderPlaceButton: NextPage<Props> = ({
  text,
  mdText,
  lgText,
  isPending,
  cart,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={cn(
        "w-full text-white font-semibold py-3 rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed",
        className,
        (isPending || cart.length === 0) && "pointer-events-none"
      )}
      disabled={isPending || cart.length === 0}
      type="submit"
    >
      {isPending ? (
        <span className="flex items-center gap-1.5">
          <Loader className="animate-spin" />
          Order Placing...
        </span>
      ) : (
        <>
          <span className="md:hidden">{text}</span>
          <span className="hidden md:inline lg:hidden">{mdText}</span>
          <span className="hidden lg:inline">{lgText}</span>
        </>
      )}
    </Button>
  );
};

export default OrderPlaceButton;
