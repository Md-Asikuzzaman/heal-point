"use client";

import { ShoppingCart } from "lucide-react";
import React from "react";

const CartIcon = ({ count = 0 }: { count: number }) => {
  return (
    <div className="relative w-fit">
      <ShoppingCart className="w-6 h-6 text-foreground" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
