"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import React, { useState } from "react";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const { cart, getTotalPrice } = useCartStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order Placed via Cash on Delivery ✅");
  };

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Shipping Form */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Shipping Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <input
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="01xxxxxxxxx"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Street address, house no"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Dhaka"
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm font-medium text-gray-600">
                  ZIP Code
                </label>
                <input
                  name="zip"
                  required
                  value={form.zip}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1200"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-all mt-6"
            >
              Place Order (Cash on Delivery)
            </button>
          </form>
        </div>

        {/* Right: Summary */}
        {/* Right: Order Summary */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-amber-100 h-fit">
          <h2 className="text-xl font-bold text-amber-600 mb-6">
            Order Summary
          </h2>

          {/* Products */}
          <div className="space-y-4">
            {cart.map((product) => (
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
                <div className="text-sm font-semibold text-amber-600">
                  ৳{product.price * product.quantity}
                </div>
              </div>
            ))}
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
              <span className="text-amber-600">৳{getTotalPrice()}</span>
            </div>
          </div>

          {/* COD Note */}
          <div className="mt-6 p-4 border rounded-md bg-green-50 text-sm text-green-800">
            <strong>Payment Method:</strong> Cash on Delivery
            <p className="text-xs text-gray-500 mt-1">
              Pay when you receive your package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
