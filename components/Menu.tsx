"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "Art", href: "/art" },
  { title: "Products", href: "/products" },
  { title: "Blog", href: "/blog" },
];

interface MenuProps {
  handleClose: () => void;
}

const Menu = ({ handleClose }: MenuProps) => {
  return (
    <div className="bg-background h-screen w-full flex flex-col items-center justify-center">
      <div
        className={cn("flex flex-col uppercase font-audio")}
      >
        {navLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="lg"
            className={cn(
              "py-8 w-full text-4xl",
              "sm:text-5xl sm:py-10",
              "md:text-5xl md:gap-6",
              "lg:text-6xl",
              "xl:text-7xl xl:py-12",
            )}
            asChild
          >
            <Link
              href={link.href}
              onClick={handleClose}
              className="text-4xl py-2"
            >
              {link.title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
