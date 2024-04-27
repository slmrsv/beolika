import "./globals.css";
import React from "react";
import { SiteConfig } from "@/lib/config";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Providers } from "./Providers";
import LayoutClient from "@/components/LayoutClient";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: SiteConfig.metadataBase,
  title: {
    default: SiteConfig.title.default,
    template: SiteConfig.title.template,
  },
  description: SiteConfig.description,
  generator: SiteConfig.generator,
  applicationName: SiteConfig.applicationName,
  referrer: SiteConfig.referrer,
  keywords: [
    "Next.js",
    "NextJS",
    "Next",
    "React.js",
    "React Js",
    "ReactJs",
    "Typescript",
    "Tailwindcss",
    "JavaScript",
    "Shadnc",
    "ShadncUi",
    "shadncui",
    "Prisma",
    "Zustand",
    "Freelance",
    "Web Developer",
    "FullStack",
    "Developer",
    "Vercel",
    "3D",
    "Designer",
    "3D Designer",
    "Product",
    "Products",
    "Blog",
    "Articles",
  ],
  authors: [
    {
      name: SiteConfig.authors.name,
      url: SiteConfig.authors.url,
    },
  ],
  creator: SiteConfig.creator,
  publisher: SiteConfig.publisher,
};

export default function RootLayout({
  children,
}) {
  return (
    <LayoutClient>
      <Providers>
        <SpeedInsights/>
        <div className="min-h-[94vh] flex flex-col">
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </Providers>
    </LayoutClient>
  );
}
