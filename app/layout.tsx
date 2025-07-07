import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { Toaster as Toast } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "VitalEdge Pharmacy",
    template: "%s - VitalEdge Pharmacy",
  },
  description: "VitalEdge Pharmacy",
  keywords: "VitalEdge Pharmacy, VitalEdge Pharmacy, VitalEdge Pharmacy",
  robots: "index, follow",
  // Open-Graph for social site
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    locale: "en_US",
    siteName: "VitalEdge Pharmacy",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.jpg`,
        width: 1200,
        height: 630,
        alt: "VitalEdge Pharmacy",
      },
    ],
  },
  // Open-Graph for twitter
  twitter: {
    card: "summary_large_image",
  },

  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.jpg`,
    },
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  authors: [
    {
      name: "VitalEdge Pharmacy",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased bg-gray-100`}
        suppressHydrationWarning
      >
        {children}

        <Toaster />
        <Toast />
      </body>
    </html>
  );
}
