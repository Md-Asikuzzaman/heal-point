import { auth } from "@/lib/auth";
import NavbarCartButtonWrapper from "./components/NavbarCartButtonWrapper";
import NavbarLinks from "./components/NavbarLinks";
import NavbarLogo from "./components/NavbarLogo";
import NavbarMobileMenu from "./components/NavbarMobileMenu";
import NavbarProfileDropdown from "./components/NavbarProfileDropdown";
import NavbarSearch from "./components/NavbarSearch";

const Header = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center px-4 py-3 md:px-6">
        {/* Left: Logo + Links */}
        <div className="flex items-center md:gap-8 lg:gap-14">
          <NavbarLogo />
          <div className="hidden md:block">
            <NavbarLinks />
          </div>
        </div>

        {/* Right: Search, Cart, Profile, Mobile Menu */}
        <div className="flex items-center gap-3 grow justify-end">
          <div className="hidden md:block max-w-[400px] grow">
            <NavbarSearch />
          </div>
          <NavbarCartButtonWrapper />
          <NavbarProfileDropdown session={session} />
          <div className="flex items-center md:hidden">
            <NavbarMobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
