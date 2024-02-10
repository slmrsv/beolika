import React from 'react';
import Link from 'next/link';
import Social from './Social';
import { cn } from '@/lib/utils';
import { FaGithub, FaInstagram, FaDiscord, FaPinterest  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const navLinks = [
  { title: "Home", href: "/"},
  { title: "About", href: "/about"},
  { title: "Work", href: "/work"},
  { title: "Art", href: "/art"},
  { title: "Products", href: "/products"},
  { title: "Blog", href: "/blog"},
];

const socialLinks = [
  {link: "https://github.com/beolika" , icon: FaGithub},
  {link: "https://instagram.com/beolika" , icon: FaInstagram},
  {link: "https://discordapp.com/users/849428669180542976" , icon:FaDiscord},
  {link: "https://www.pinterest.fr/beolika/" , icon: FaPinterest},
  {link: "mailto:hello@beolika.com" , icon: IoIosMail},
];
  
interface MenuProps {
  handleClose: () => void;
}

const Menu = ({handleClose}: MenuProps) => {
  return (
    <div className='absolute top-0 bg-background h-full w-full'>
      <div className='mt-36 flex flex-col gap-6 font-audio'>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} onClick={handleClose} className="text-4xl border-b py-2">
            {link.title}
          </Link>
        ))}
      </div>
      <div className={cn("mt-6 py-2 flex justify-start", "xs:pt-4", "md:pt-8")}>
        <Social socialLink={socialLinks} />
      </div>
    </div>
  );
};

export default Menu;