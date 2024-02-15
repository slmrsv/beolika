import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { SiteConfig } from "@/lib/config";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Providers } from "./Providers";
import Navbar from "@/components/Navbar";
import LayoutClient from "@/components/LayoutClient";

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
    <LayoutClient>
      <Providers>
        <div className="relative min-h-[94vh] flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </Providers>
    </LayoutClient>
  );
}
