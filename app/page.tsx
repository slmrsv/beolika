"use client";
import ArtMode from "@/components/ArtMode";
import ProfilMode from "@/components/ProfilMode";
import { modeStore } from "@/stores";
/* import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link"; */

export default function Home() {
  const artMode = modeStore((state) => state.artMode);

  /* const navLinks = [
    { title: "About", href: "/about"},
    { title: "Work", href: "/work"},
    { title: "Art", href: "/art"},
    { title: "Products", href: "/products"},
    { title: "Blog", href: "/blog"},
  ]; */

  return (
    <>
      {artMode ? <ArtMode /> : <ProfilMode />}
      {/* <div className="absolute bottom-0 mx-auto w-full">
        <div className={cn('flex justify-center font-audio w-full items-end', 'sm:gap-2', 'lg:gap-4')}>
          {navLinks.map((link, index) => (
            <Button
              key={index}
              variant={artMode ? "ghostArt" : "ghost"}
              size="icon"
              className={cn("w-auto px-[6px]", "md:px-4")}
              asChild
            >
              <Link href={link.href} className={cn("text-sm", "xs:text-base", "md:text-lg", "lg:text-xl", "xl:text-2xl")}>
                {link.title}
              </Link>
            </Button>
          ))}
        </div>
      </div> */}
    </>
  );
}
