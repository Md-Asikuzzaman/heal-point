"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Search products..."
        className="pr-12 rounded-xl border border-gray-300 shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-300 transition"
      />
      <Search className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-green-500 pointer-events-none transition-colors" />
    </div>
  );
}
