import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "../shared/Container";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 mt-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Unani Store</h2>
            <p className="text-sm text-gray-300">
              100% authentic natural and Unani products for your healthy life.
              Trusted by thousands.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition transform hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition transform hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition transform hover:scale-110"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition transform hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright Block */}
      <div className="bg-green-950 text-center py-4 text-sm text-gray-300 border-t border-green-800">
        &copy; {new Date().getFullYear()} Unani Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
