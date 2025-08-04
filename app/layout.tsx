import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Heal point",
    template: "%s - Heal point",
  },
  description: "Heal point",
  keywords: "Heal point, Online Pharma, Heal point pharmacy",
  robots: "index, follow",

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
      name: "Heal point",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
