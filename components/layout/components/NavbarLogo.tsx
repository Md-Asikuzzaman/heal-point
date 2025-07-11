import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarLogo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <Image
          src="/images/logo.jpg"
          alt="VitalEdge Pharmacy"
          fill
          className="rounded-full object-cover shadow-2xl border-2 border-green-500"
          sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
          priority
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
