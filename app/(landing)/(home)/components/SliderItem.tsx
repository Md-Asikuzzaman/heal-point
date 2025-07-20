"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  subtitle: string;
};

const SlideItem = ({ image, title, subtitle }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[8/3] md:aspect-[12/3] bg-gray-100 overflow-hidden">
      {/* Skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 z-0" />
      )}

      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        priority
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Optional text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4 space-y-2 md:space-y-5">
        <h2 className="text-xl md:text-5xl font-bold">{title}</h2>
        <p className="text-sm md:text-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default SlideItem;
