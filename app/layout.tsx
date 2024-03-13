import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { SiteConfig } from "@/lib/config";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Providers } from "./Providers";
import Navbar from "@/components/Navbar";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  metadataBase: SiteConfig.metadataBase,
  title: {
    default: SiteConfig.title.default,
    template: SiteConfig.title.template,
  },
  description: SiteConfig.description,
  generator: SiteConfig.generator,
  applicationName: SiteConfig.applicationName,
  referrer: SiteConfig.referrer,
  keywords: ['Next.js', 'NextJS', 'Next', 'React.js', 'React Js', 'ReactJs', 'Typescript', 'Tailwindcss', 'JavaScript', 'Shadnc', 'ShadncUi', 'shadncui', 'Prisma', 'Zustand', 'Freelance', 'Web Developer', 'FullStack', 'Developer', 'Vercel', '3D', 'Designer', '3D Designer', 'Product', 'Products', 'Blog', 'Articles'],
  authors: [{ name: SiteConfig.authors.name, url: SiteConfig.authors.url }],
  creator: SiteConfig.creator,
  publisher: SiteConfig.publisher,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutClient>
      <Providers>
        <div className="min-h-[94vh] flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </Providers>
    </LayoutClient>
  );
}
