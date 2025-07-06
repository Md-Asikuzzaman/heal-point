"use client";

import { useCartStore } from "@/store/useCartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmptyCartMessage from "./components/EmptyCartMessage";

const CartPage = () => {
  const {
    cart,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  return (
    <section className="w-full py-10 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-green-100">
        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              Your Cart
            </h2>
            <div className="space-y-6">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-6"
                >
                  {/* Image */}
                  <div className="w-full sm:w-24 h-24 relative rounded-md border bg-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Info and Controls */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ৳{product.price} per item
                        </p>
                      </div>

                      {/* Price Total (top right on desktop) */}
                      <p className="text-base font-semibold text-amber-600 sm:text-right">
                        ৳{product.price * product.quantity}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border rounded-full p-1.5 gap-3 bg-white shadow-sm">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-full text-sm font-bold"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="text-base font-medium text-gray-800">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="bg-green-500 hover:bg-green-600 text-white p-1 rounded-full text-sm font-bold"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(product.id)}
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
                Total:{" "}
                <span className="text-amber-600">
                  ৳{getTotalPrice().toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all text-center"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout"
                  className="w-full sm:w-auto py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all text-center"
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
