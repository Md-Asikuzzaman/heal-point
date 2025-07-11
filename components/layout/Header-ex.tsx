// export const dynamic = "force-dynamic";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import SearchBar from "./components/NavbarSearch";
// import Container from "../shared/Container";
// import NavLinks from "./components/NavbarLinks";
// import ViaCartIcon from "./components/NavbarCartButtonWrapper";
// import ProfileDropdown from "./components/NavbarProfileDropdown";
// import { auth } from "@/lib/auth";

// const Header = async () => {
//   const session = await auth();

//   return (
//     <header className="bg-white py-2.5 sticky top-0 shadow-lg z-50">
//       <Container className="flex items-center justify-between">

//         {/* Desktop Menu */}
//         <NavLinks />
//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="w-6 h-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-[250px]">
//               <div className="mt-4 flex flex-col gap-4">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-lg text-gray-800 hover:underline"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//         <div className="w-full max-w-md flex items-center gap-4">
//           <SearchBar />
//           <ViaCartIcon />
//           <ProfileDropdown session={session} />
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;
