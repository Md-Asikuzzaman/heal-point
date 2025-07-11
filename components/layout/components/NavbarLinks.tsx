"use client";

import { navLinks } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul>
      <li className="flex flex-col md:flex-row lg:items-center gap-3 md:gap-10 font-semibold text-gray-700">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                "relative px-2 py-1 text-base transition-colors duration-300",
                "hover:text-green-600",
                isActive
                  ? "text-green-700 font-medium"
                  : "text-gray-600 font-normal",
                "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-green-600 after:origin-bottom-left after:transition-transform after:duration-300",
                isActive && "after:scale-x-100",
                !isActive && "hover:after:scale-x-100"
              )}
            >
              {link.title}
            </Link>
          );
        })}
      </li>
    </ul>
  );
};

export default NavbarLinks;
