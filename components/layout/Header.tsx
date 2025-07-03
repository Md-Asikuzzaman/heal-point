import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./components/SearchBar";
import Container from "../shared/Container";
import NavLinks from "./components/NavLinks";
import CartIcon from "./components/CartIcon";

const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Image src="/next.svg" alt="img" height={100} width={100} />
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
