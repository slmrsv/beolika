"use client";
import React from "react";
import Link from 'next/link';
import Social from './Social';
import { cn } from '@/lib/utils';
import { FaGithub, FaInstagram, FaDiscord, FaFacebook  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Button } from './ui/button';

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
    <div className='bg-background h-screen w-full flex flex-col items-center justify-center'>
      <div className={cn('flex flex-col uppercase gap-2 font-audio', "lg:gap-4", "xl:py-14")}>
        {navLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="lg"
            className={cn("py-6 w-full text-4xl", "sm:text-5xl sm:py-8", "md:text-5xl md:gap-6", "lg:text-6xl", "xl:text-7xl xl:py-9")}
            asChild
          >
            <Link href={link.href} onClick={handleClose} className="text-4xl py-2">
              {link.title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Menu;