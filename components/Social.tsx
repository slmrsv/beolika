"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { modeStore } from '@/stores';

interface StyleProps {
    className?: string;
  }

interface SocialProps {
    socialLink: {
        icon: React.ComponentType<StyleProps>;
        link: string;
    }[];
}

const Social = ({socialLink}: SocialProps) => {
  const artMode = modeStore((state) => state.artMode);
  return (
    <div className='flex justify-center gap-5'>
      {socialLink.map((social, index) => (
        <Button
          key={index}
          variant={artMode ? "ghostArt" : "ghost"}
          size="icon"
          asChild
        >
          <Link  href={social.link} target="_blank" rel="noopener noreferrer">
            {<social.icon className={cn("text-[28px]", "md:text-3xl")} />}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Social;