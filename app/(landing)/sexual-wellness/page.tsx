"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";

export default function SexualWellnessPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-50 px-4">
      <div className="max-w-xl text-center p-8 bg-white shadow-xl rounded-xl border border-green-200">
        <h1 className="text-xl md:text-4xl font-bold text-green-700 mb-4 animate-bounce">
          🚧 Coming Soon 🚧
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Our{" "}
          <span className="font-semibold text-green-600">Sexual Wellness</span>{" "}
          products will be available soon. We are working hard to bring you the
          best Unani care.
        </p>

        <div className="flex items-center justify-center gap-2 text-green-700 font-semibold text-sm mb-4">
          <Clock className="w-5 h-5 animate-pulse" />
          Expected Launch:
          <span className="ml-1 font-bold">Coming This Month</span>
        </div>

        <button
          onClick={() => router.push("/products")}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
        >
          Back to Shop
        </button>
      </div>
    </section>
  );
}
