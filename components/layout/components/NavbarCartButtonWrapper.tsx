"use client";

import { ShoppingCart } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const CartIcon = dynamic(() => import("./NavbarCartButton"), {
  ssr: false,
  loading: () => (
    <button
      aria-label="Cart"
      className="relative rounded-full p-2 hover:bg-gray-100 cursor-pointer"
    >
      <ShoppingCart className="size-6 text-green-500" />
    </button>
  ),
});

const NavbarCartButtonWrapper = () => {
  return (
    <Link href="/cart">
      <CartIcon />
    </Link>
  );
};

export default NavbarCartButtonWrapper;
