import { FaGithub, FaInstagram, FaDiscord, FaFacebook  } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Profil from '@/public/profil.jpg';
import Social from '@/components/Social';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteConfig } from "@/lib/config";

const ProfilMode = () => {

  const socialLinks = [
    {link: "https://www.facebook.com/beolika/" , icon: FaFacebook},
    {link: "https://instagram.com/beolika" , icon: FaInstagram},
    {link: "https://github.com/beolika" , icon: FaGithub},
    {link: "https://discordapp.com/users/849428669180542976" , icon:FaDiscord},
  ];

  return (
    <div className={cn('flex flex-col justify-center items-center mb-2 mt-32', "sm:mt-[150px]", 'xl:mt-36')}>
      <Image src={Profil} alt="Profil" className={cn('rounded-full mb-4', 'md:mb-6', 'xl:w-48 xl:mb-8')} width={160} height={160} />
      <h1 className={cn("font-audio text-[40px]")}>{SiteConfig.title.default}</h1>
      <p className={cn("text-subtitle font-glacial", "sm:text-lg", 'md:text-xl')}>{SiteConfig.description}</p>
      <div className={cn("pt-3", "xs:pt-6", "md:pt-8")}>
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

export default ProfilMode;