"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-dashed border-green-300 lg:min-h-[60vh]">
      <ShoppingCart className="w-16 h-16 text-green-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Your cart is empty
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link
        href="/shop"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all"
      >
        Go to Shop
      </Link>
    </div>
  );
};

export default EmptyCartMessage;
