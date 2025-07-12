"use client";

import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";

import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: NextPage<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <SonnerToaster />
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
