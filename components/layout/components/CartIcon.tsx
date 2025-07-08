"use client";

import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const { getTotalItems } = useCartStore();

  return (
    <button
      aria-label="Cart"
      className="relative rounded-full p-2 hover:bg-gray-100 cursor-pointer"
    >
      <ShoppingCart className="size-6 text-green-500" />
      {getTotalItems() > 0 && (
        <span
          className={`absolute -top-1 -right-1 flex items-center justify-center text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full shadow-lg`}
        >
          {getTotalItems()}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
