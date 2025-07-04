"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus, CheckCircle, Star } from "lucide-react";

interface Props {
  id: number;
  title: string;
  price: number;
  image: string;
  brand: string;
  medicineType: string;
  medicineQuantity: string;
  description: string;
  rating: number;
}

const ProjectDetailsCard = ({
  id,
  title,
  price,
  image,
  brand,
  medicineType,
  medicineQuantity,
  description,
  rating,
}: Props) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  console.log(id);

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-green-100">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Image */}
          <div className="relative w-full h-[450px] bg-white rounded-xl overflow-hidden border">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-6"
              priority
            />
            <div className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm border border-green-200 transition-all hover:scale-105">
              <CheckCircle className="w-4 h-4" />
              In Stock
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Brand */}
              <p className="text-sm text-gray-400">Brand: {brand}</p>

              {/* Title */}
              <h1 className="text-3xl font-bold text-green-700">{title}</h1>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {description}
              </p>

              {/* Type & Quantity Badges */}
              <div className="flex gap-2 flex-wrap">
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  Type: {medicineType}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  Quantity: {medicineQuantity}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i <= rating ? "#facc15" : "none"}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">({rating}/5)</span>
              </div>

              {/* Guarantee */}
              <div className="mt-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-500">
                  Guaranteed quality product
                </span>
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="space-y-6">
              {/* Price */}
              <p className="text-2xl font-bold text-amber-600">
                ৳{price.toFixed(2)}
              </p>

              {/* Quantity Counter */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all">
                  Add to Cart
                </button>
                <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-105 text-white rounded-lg font-semibold transition-all">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsCard;
