import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { SiteConfig } from "@/lib/config";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { cn } from "@/lib/utils";
import { Providers } from "./Providers";
import Navbar from "@/components/Navbar";

const audioWide = Audiowide({ weight: ["400"], subsets: ["latin"], variable: "--font-audio" });
const glacial = localFont({
  src: [
    {
      path: "../public/fonts/glacialRegular.otf",
    },
  ],
  variable: "--font-glacial",
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn(
        'min-w-screen bg-background font-sans antialiased py-6 px-5',
        'md:px-10', 
        'lg:px-20',
        glacial.variable,
        audioWide.variable
      )} >
        <Providers>
          <div className="relative flex flex-col">
            <Navbar home />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
