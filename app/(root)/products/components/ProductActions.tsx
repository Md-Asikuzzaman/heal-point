"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface Props {
  productId: number;
}

export default function ProductActions({ productId }: Props) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  console.log(productId);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-green-300 rounded-lg px-3 py-1.5">
          <button
            onClick={decrease}
            className="text-green-600 hover:text-green-700"
          >
            <Minus size={18} />
          </button>
          <span className="px-4 text-base font-medium text-gray-800">
            {quantity}
          </span>
          <button
            onClick={increase}
            className="text-green-600 hover:text-green-700"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {}}
          className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all"
        >
          Add to Cart
        </button>
        <button
          onClick={() => {}}
          className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
