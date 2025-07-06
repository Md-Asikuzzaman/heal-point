import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Md Asikuzzaman | Frontend & MERN Stack Developer",
    template: "%s - Md Asikuzzaman | Frontend & MERN Stack Developer",
  },
  description:
    "Md Asikuzzaman is a skilled frontend and MERN stack developer specializing in Next.js, React.js, TypeScript, Tailwind CSS, and accessibility engineering.",
  keywords:
    "Frontend Developer, Software Developer, MERN Stack, Next.js, React.js, TypeScript, Tailwind CSS, Web Development, Accessibility, GSAP, Framer Motion",
  robots: "index, follow",
  // Open-Graph for social site
  openGraph: {
    type: "website",
    url: "https://devasik.vercel.app",
    locale: "en_US",
    siteName: "Md Asikuzzaman",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/84761191?v=4",
        width: 1200,
        height: 630,
        alt: "Md Asikuzzaman - Frontend & MERN Stack Developer",
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
      sizes: "32x32",
      url: "https://avatars.githubusercontent.com/u/84761191?v=4",
    },
  ],
  metadataBase: new URL("https://devasik.vercel.app"),
  authors: [
    {
      name: "Md Asikuzzaman",
      url: "https://devasik.vercel.app",
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
      </body>
    </html>
  );
}
