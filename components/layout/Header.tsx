import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./components/SearchBar";
import Container from "../shared/Container";
import NavLinks from "./components/NavLinks";
import CartIcon from "./components/CartIcon";

const Header = () => {
  return (
    <header className="bg-white py-2.5 sticky top-0 shadow-2xl z-50">
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
          <Link href="/cart">
            <CartIcon count={12} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
