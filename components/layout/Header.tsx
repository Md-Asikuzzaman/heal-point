import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./components/SearchBar";
import Container from "../shared/Container";
import NavLinks from "./components/NavLinks";
import ViaCartIcon from "./components/ViaCartIcon";
import ProfileDropdown from "./components/ProfileDropdown";
import { auth } from "@/lib/auth";



const Header = async () => {
  const session = await auth();

  return (
    <header className="bg-white py-2.5 sticky top-0 shadow-lg z-50">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="VitalEdge Pharmacy"
            height={75}
            width={75}
            className="rounded-full shadow-2xl border-2 border-green-500"
          />
        </Link>
        <NavLinks />
        <div className="w-full max-w-md flex items-center gap-4">
          <SearchBar />
          <ViaCartIcon />
          <ProfileDropdown session={session} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
