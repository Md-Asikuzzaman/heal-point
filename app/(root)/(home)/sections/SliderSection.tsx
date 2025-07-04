"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "@/public/images/slide1.jpeg";
import slide2 from "@/public/images/slide2.webp";
import slide3 from "@/public/images/slide3.jpeg";

const slides = [
  {
    id: 1,
    title: "Unani & Natural Products",
    subtitle: "Pure and Trusted",
    image: slide1,
  },
  {
    id: 2,
    title: "Ayurvedic Care",
    subtitle: "Holistic wellness",
    image: slide2,
  },
  {
    id: 3,
    title: "Herbal Supplements",
    subtitle: "Natural immunity",
    image: slide3,
  },
];

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true, // 👈 add this
    cssEase: "linear", // 👈 optional for smoother fade
  };

  return (
    <section className="w-full bg-white">
      <Slider {...settings}>
        {slides.map(({ id, title, image }) => (
          <div
            key={id}
            className="relative w-full aspect-[8/3] md:aspect-[12/3] bg-white flex items-center justify-center"
          >
            <Image src={image} alt={title} fill priority sizes="100vw" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;
