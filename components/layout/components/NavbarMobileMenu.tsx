import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarSearch from "./NavbarSearch";
import { DialogTitle } from "@radix-ui/react-dialog";

const NavbarMobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6 text-gray-700" />
      </SheetTrigger>
      <SheetContent side="left" className="pt-10 px-5">
        <DialogTitle>Mobile Menu</DialogTitle>
        <div className="flex flex-col gap-6">
          <NavbarSearch />
          <NavbarLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobileMenu;
