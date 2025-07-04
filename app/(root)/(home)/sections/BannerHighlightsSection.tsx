"use client";

import { MdLocalPharmacy, MdOutlineSupportAgent } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import Container from "@/components/shared/Container";

const BannerHighlights = () => {
  const items = [
    {
      icon: <MdLocalPharmacy className="text-green-600 text-3xl" />,
      title: "NATURAL MEDICINE",
      subtitle: "Authentic & Trusted",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "100% ORGANIC",
      subtitle: "Certified Ingredients",
    },
    {
      icon: <MdOutlineSupportAgent className="text-green-600 text-3xl" />,
      title: "24/7 SUPPORT",
      subtitle: "Always Available",
    },
    {
      icon: <BiPhoneCall className="text-green-600 text-3xl" />,
      title: "+8801618232323",
      subtitle: "Have a Question?",
    },
  ];

  return (
    <section className="mt-12 px-4">
      <Container className="bg-green-50 py-10 px-6 sm:px-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-6 py-8">
          {items.map(({ icon, title, subtitle }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
            >
              <div className="flex justify-center mb-3">{icon}</div>
              <h4 className="text-base font-bold text-green-700">{title}</h4>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BannerHighlights;
