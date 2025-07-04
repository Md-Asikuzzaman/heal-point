"use client";

import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const { getTotalItems } = useCartStore();

  return (
    <div className="relative w-fit cursor-pointer">
      <ShoppingCart className="w-6 h-6 text-green-500" />
      {getTotalItems() > 0 && (
        <span
          className={`absolute -top-2 -right-2 flex items-center justify-center text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full shadow-lg`}
        >
          {getTotalItems()}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
