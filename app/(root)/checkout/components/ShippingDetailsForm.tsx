"use client";

import React, { useState } from "react";

const ShippingDetailsForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order Placed via Cash on Delivery ✅");

    // console.log(cart);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-green-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Shipping Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-600">Full Name</label>
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
          <label className="text-sm font-medium text-gray-600">Address</label>
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
            <label className="text-sm font-medium text-gray-600">City</label>
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

        <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
          <h4 className="text-green-700 font-semibold mb-2">Note:</h4>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>
              <span className="font-medium text-gray-800">Inside Dhaka:</span>{" "}
              Delivery charge is{" "}
              <span className="text-green-700 font-semibold">৳70</span>
            </li>
            <li>
              <span className="font-medium text-gray-800">Outside Dhaka:</span>{" "}
              Delivery charge is{" "}
              <span className="text-green-700 font-semibold">৳120</span>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetailsForm;
