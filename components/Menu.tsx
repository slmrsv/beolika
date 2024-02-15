"use client";
import React from "react";
import Link from 'next/link';
import Social from './Social';
import { cn } from '@/lib/utils';
import { FaGithub, FaInstagram, FaDiscord, FaFacebook  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Button } from './ui/button';
import Copyright from "./Copyright";

const navLinks = [
  { title: "Home", href: "/"},
  { title: "About", href: "/about"},
  { title: "Work", href: "/work"},
  { title: "Art", href: "/art"},
  { title: "Products", href: "/products"},
  { title: "Blog", href: "/blog"},
];

const socialLinks = [
  {link: "https://www.facebook.com/beolika/" , icon: FaFacebook},
  {link: "https://instagram.com/beolika" , icon: FaInstagram},
  {link: "https://github.com/beolika" , icon: FaGithub},
  {link: "https://discordapp.com/users/849428669180542976" , icon:FaDiscord},
  {link: "mailto:hello@beolika.com" , icon: IoIosMail},
];
  
interface MenuProps {
  handleClose: () => void;
}

const Menu = ({handleClose}: MenuProps) => {

  return (
    <div className='absolute top-0 bg-background h-screen w-full'>
      <div className={cn('flex flex-col uppercase gap-4 font-audio mt-52', "sm:mt-40", "md:gap-6 md:mt-36", "lg:flex-row lg:justify-between lg:gap-0 lg:mb-36 lg:mt-32", "xl:mb-20 xl:py-14")}>
        {navLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="lg"
            className={cn("py-6 w-full text-4xl", "sm:text-5xl sm:py-8", "md:text-6xl", "lg:w-auto lg:text-xl lg:py-6", "xl:text-4xl xl:py-6")}
            asChild
          >
            <Link href={link.href} onClick={handleClose} className="text-4xl py-2">
              {link.title}
            </Link>
          </Button>
        ))}
      </div>
      <div className={cn("absolute bottom-6 w-full flex justify-center border-t py-4", "lg:relative lg:mt-14 lg:flex lg:justify-center lg:border-y lg:py-4")}>
        <Social socialLink={socialLinks} />
      </div>
      <div className="absolute bottom-10 w-full">
        <Copyright />
      </div>
    </div>
  );
};

export default Menu;