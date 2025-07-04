import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
}

export const ProductCard = ({ id, title, price, image, rating = 5 }: Props) => {
  return (
    <Card
      title={title}
      className="group relative w-full max-w-xs rounded-xl border hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/products/${id}`}>
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      {/* Content */}
      <CardContent className="p-4">
        <h3 className="text-md font-semibold text-gray-800 group-hover:text-green-600 line-clamp-2 mb-1">
          {title}
        </h3>

        <div className="flex items-center justify-between mb-2">
          <p className="text-green-600 font-bold text-lg">
            ৳{price.toFixed(2)}
          </p>
          <div className="flex items-center gap-0.5 text-yellow-500 text-sm">
            {Array.from({ length: rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </CardContent>
      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        {/* Add to Cart */}
        <button className="w-full py-2 px-4 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Add to Cart
        </button>

        {/* Order Now */}
        <button className="w-full py-2 px-4 text-sm font-medium bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
          Order Now
        </button>
      </CardFooter>
    </Card>
  );
};
