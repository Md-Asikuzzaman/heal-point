"use client";

import { navLinks } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul>
      <li className="flex items-center gap-12 font-semibold">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={cn(
              "hover:text-amber-500",
              pathname === link.href && "text-primary"
            )}
          >
            {link.title}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default NavLinks;
