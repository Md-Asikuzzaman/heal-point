"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import slide1 from "@/public/images/slide1.jpeg";
import slide2 from "@/public/images/slide2.webp";
import slide3 from "@/public/images/slide3.jpeg";
import slide4 from "@/public/images/slide4.jpeg";
import SlideItem from "../components/SliderItem";

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
  {
    id: 4,
    title: "Unani & Natural Products",
    subtitle: "Pure and Trusted",
    image: slide4,
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
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="w-full bg-gray-200 overflow-clip min-h-[300px]">
      <Slider {...settings}>
        {slides.map(({ id, title, subtitle, image }) => (
          <SlideItem key={id} image={image} title={title} subtitle={subtitle} />
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;
