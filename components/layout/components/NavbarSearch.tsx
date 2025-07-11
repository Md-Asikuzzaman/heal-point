"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { products } from "@/constants";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import slugify from "slugify";

const fuse = new Fuse(products, {
  keys: ["title", "brand", "medicineType"],
  threshold: 0.3,
});

const NavbarSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    const matched = fuse.search(query).map((res) => res.item);
    setResults(matched);
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll into view when activeIndex changes
  useEffect(() => {
    const activeEl = itemRefs.current[activeIndex];
    if (activeEl) {
      activeEl.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev === results.length - 1 ? 0 : prev + 1));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      const selected = results[activeIndex] || results[0];
      if (selected) {
        const slug = slugify(selected.title, { lower: true, strict: true });
        router.push(`/products/${slug}`);
        setShowDropdown(false);
        setQuery("");
      }
    }
  };

  return (
    <div className="relative w-full">
      <Input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => {
          if (results.length > 0) setShowDropdown(true);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
        className="pr-12 rounded-xl border !border-gray-300 shadow-sm focus:!border-green-600 focus:ring-2 focus:!ring-green-300 transition"
      />
      <Search className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-green-500 pointer-events-none" />

      {showDropdown && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md max-h-60 overflow-y-auto"
        >
          {results.map((item, index) => {
            const slug = slugify(item.title, { lower: true, strict: true });

            return (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => {
                  router.push(`/products/${slug}`);
                  setShowDropdown(false);
                  setQuery("");
                }}
                className={`px-4 py-2 cursor-pointer text-sm transition-all ${
                  index === activeIndex
                    ? "bg-green-200 text-green-800"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.title} - ৳{item.price}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
