"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    title: "Herbal Syrup",
    image: "/images/slide1.jpeg",
    price: 220,
    quantity: 2,
  },
  {
    id: 2,
    title: "Natural Balm",
    image: "/images/slide2.webp",
    price: 150,
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const increase = (id: number) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrease = (id: number) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );

  const removeItem = (id: number) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="w-full py-10 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-green-100">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-6"
                >
                  {/* Image */}
                  <div className="w-full sm:w-24 h-24 relative rounded-md border bg-white overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Info and Controls */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ৳{item.price} per item
                        </p>
                      </div>

                      {/* Price Total (top right on desktop) */}
                      <p className="text-base font-semibold text-amber-600 sm:text-right">
                        ৳{item.price * item.quantity}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border rounded-lg px-3 py-1.5 gap-3 bg-white shadow-sm">
                        <button
                          onClick={() => decrease(item.id)}
                          className="text-green-600 hover:text-green-700"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="text-base font-medium text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increase(item.id)}
                          className="text-green-600 hover:text-green-700"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
              <div className="text-xl font-bold text-gray-700">
                Total: <span className="text-amber-600">৳{total}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout"
                  className="w-full sm:w-auto py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
