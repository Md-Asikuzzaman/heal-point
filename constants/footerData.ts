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
    href: "/#",
  },
  { label: "Instagram", icon: FaInstagram, href: "/#" },
  { label: "Twitter", icon: FaTwitter, href: "/#" },
  { label: "Youtube", icon: FaYoutube, href: "/#" },
];

export const contactInfo = {
  address: "Dhaka, Bangladesh",
  phone: "+8801XXXXXXXXX",
  whatsapp: "+8801XXXXXXXX",
  email: "healpoint@support.com",
};
