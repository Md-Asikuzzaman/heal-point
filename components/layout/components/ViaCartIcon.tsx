"use client";

import { ShoppingCart } from "lucide-react";
import dynamic from "next/dynamic";

const CartIcon = dynamic(() => import("./CartIcon"), {
  ssr: false,
  loading: () => (
    <div className="relative w-fit cursor-pointer">
      <ShoppingCart className="w-6 h-6 text-green-500" />
    </div>
  ),
});

const ViaCartIcon = () => {
  return (
    <>
      <CartIcon />
    </>
  );
};

export default ViaCartIcon;
