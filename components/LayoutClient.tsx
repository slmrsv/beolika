"use client";
import { cn } from '@/lib/utils';
import React from 'react';
import localFont from "next/font/local";
import { Montserrat, Audiowide, Syncopate } from "next/font/google";
/* import { menuStore } from "@/stores"; */
import useLenis from '@/animations/useLenis';
import CircleMouse from './CircleMouse';
import useMouseFollower from '@/animations/useMouseFollower';

const audioWide = Audiowide({ weight: ["400"], subsets: ["latin"], variable: "--font-audio" });
const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-ms" });
const sync = Syncopate({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-sync" });
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
  /* const isMenuOpen = menuStore((state) => state.isMenuOpen); */
  
  useLenis();
  useMouseFollower();
  
  /* useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = 'static';
    }

    return () => {
      document.body.style.position = 'static';
    };
  }, [isMenuOpen]); */

  
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn(
        'min-w-screen relative bg-background font-sans antialiased py-6 px-5',
        'md:px-10', 
        'lg:px-20',
        glacial.variable,
        audioWide.variable,
        sync.variable,
        montserrat.variable
      )}>
        <CircleMouse />
        {children}
      </body>
    </html>
  );
};

export default LayoutClient;