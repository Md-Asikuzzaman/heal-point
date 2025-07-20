// constants/footerData.ts

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const footerSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/products" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

export const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/vitaledgepharmacybd",
  },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Twitter", icon: FaTwitter, href: "#" },
  { label: "Youtube", icon: FaYoutube, href: "#" },
];

export const contactInfo = {
  address: "Khulna, Bangladesh",
  phone: "+8801920643310",
  whatsapp: "+8801732936482",
  email: "vitaledgepharmacybd@gmail.com",
};
