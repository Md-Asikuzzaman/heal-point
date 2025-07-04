"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Card, CardContent, CardFooter } from "../ui/card";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  title: string;
  price: number;
  image: string;
  brand: string;
  medicineType: string;
  medicineQuantity: string;
  rating: number;
  description: string;
}

export const ProductCard = ({ ...product }: Props) => {
  const router = useRouter();
  const { id, title, price, image, rating } = product;
  const { cart, addToCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const inCart = cart.find((p) => p.id === product.id);

  const handleOrder = () => {
    if (inCart) {
      router.push("/checkout");
    } else {
      addToCart({
        ...product,
        quantity: 1,
      });

      router.push("/checkout");
    }
  };

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
        {!inCart ? (
          <button
            onClick={() =>
              addToCart({
                ...product,
                quantity: 1,
              })
            }
            className="w-full py-2 px-4 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-bold"
            >
              −
            </button>
            <span className="text-lg font-bold">{inCart.quantity}</span>
            <button
              disabled={inCart.quantity >= 10}
              onClick={() => increaseQuantity(product.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-bold"
            >
              +
            </button>
          </div>
        )}

        {/* Order Now */}
        <button
          onClick={handleOrder}
          className="w-full py-2 px-4 text-sm font-medium bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          Order Now
        </button>
      </CardFooter>
    </Card>
  );
};
