"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search products..."
        className="pr-10" // space for icon
      />
      <Search className="absolute top-2 right-2 w-5 h-5 text-muted-foreground pointer-events-none" />
    </div>
  );
}
