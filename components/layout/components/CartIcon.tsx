"use client";

import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";

const CartIcon = ({ count = 0 }: { count: number }) => {
  const [animate, setAnimate] = useState(false);

  // Trigger pulse animation on count change
  useEffect(() => {
    if (count > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="relative w-fit cursor-pointer">
      <ShoppingCart className="w-6 h-6 text-green-700" />
      {count > 0 && (
        <span
          className={`absolute -top-2 -right-2 flex items-center justify-center text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full shadow-lg 
            ${animate ? "animate-pulse" : ""}`}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
