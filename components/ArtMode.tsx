"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaInstagram, FaDiscord, FaFacebook  } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Social from '@/components/Social';

import Link from 'next/link';
import { SiteConfig } from "@/lib/config";

const ArtMode = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {link: "https://www.facebook.com/beolika/" , icon: FaFacebook},
    {link: "https://instagram.com/beolika" , icon: FaInstagram},
    {link: "https://github.com/beolika" , icon: FaGithub},
    {link: "https://discordapp.com/users/849428669180542976" , icon:FaDiscord},
  ];

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setWidth(ref.current.clientWidth);
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className={cn('flex flex-col justify-center items-center mb-2 mt-14', "xs:mt-10", "md:mt-20", "lg:mt-6", "xl:mt-2")} ref={ref}>
      <h1 className={cn("font-audio text-center my-6 leading-[90%]", "xs:my-4", "sm:my-2", "md:hidden")} style={{ fontSize: width / 2.3 + "px"}}>Beo<br />lika</h1>
      <h1 className={cn("font-audio text-center hidden leading-[100%]", "md:block md:my-6", "xl:my-4")} style={{ fontSize: width / 4 + "px"}}>{SiteConfig.title.default}</h1>
      <p className={cn("font-glacial border-t border-b py-4 w-full text-center", "sm:text-lg", 'md:text-xl')}>{SiteConfig.description}</p>
      <div className={cn("pt-5", "md:pt-8")}>
        <Social socialLink={socialLinks} />
      </div>
      <div className={cn('pt-12 w-full')}>
        <Button variant="outline" className={cn('font-audio rounded-full w-full py-5', 'xs:w-72 xs:flex xs:mx-auto', "md:w-80", "xl:py-6 xl:w-96")} asChild>
          <Link href="mailto:hello@beolika.com" className={cn('xl:text-lg')}>Get in touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default ArtMode;