"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import React from "react";

const OrderSummary = () => {
  const { cart, getTotalPrice } = useCartStore();

  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-orange-100 h-fit">
      <h2 className="text-xl font-bold text-orange-600 mb-6">Order Summary</h2>

      {/* Products */}
      <div className="space-y-4">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b pb-3"
            >
              <div className="w-16 h-16 relative rounded-md border bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800">
                  {product.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {product.quantity} × ৳{product.price}
                </p>
              </div>
              <div className="text-sm font-semibold text-orange-600">
                ৳{product.price * product.quantity}
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      {/* Price Summary */}
      <div className="mt-6 space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳{getTotalPrice()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="border-t pt-4 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span className="text-orange-600">৳{getTotalPrice()}</span>
        </div>
      </div>

      {/* COD Note */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
        <strong className="text-green-700 font-semibold mb-2">
          Payment Method:
        </strong>{" "}
        Cash on Delivery
        <p className="text-xs text-gray-500 mt-1">
          Pay when you receive your package.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
