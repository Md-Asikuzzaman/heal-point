"use client";

import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";

import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const Providers: NextPage<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <Toaster />
      <SonnerToaster />
      {children}
    </SessionProvider>
  );
};

export default Providers;
