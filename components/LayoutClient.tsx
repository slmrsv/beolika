"use client";
import { cn } from '@/lib/utils';
import React from 'react';
import localFont from "next/font/local";
import { Audiowide } from "next/font/google";
import { menuStore } from "@/stores";

const audioWide = Audiowide({ weight: ["400"], subsets: ["latin"], variable: "--font-audio" });
const glacial = localFont({
  src: [
    {
      path: "../public/fonts/glacialRegular.otf",
    },
  ],
  variable: "--font-glacial",
});

const LayoutClient = ({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) => {
  const isMenuOpen = menuStore((state) => state.isMenuOpen);

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn(
        'min-w-screen bg-background font-sans antialiased py-6 px-5',
        'md:px-10', 
        'lg:px-20',
        {
          "overflow-hidden": isMenuOpen
        },
        glacial.variable,
        audioWide.variable
      )}>
        {children}
      </body>
    </html>
  );
};

export default LayoutClient;