import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

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
  return (
    <div className='flex justify-center gap-8'>
      {socialLink.map((social, index) => (
        <Link key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          {<social.icon className={cn("text-2xl hover:text-accent", "md:text-3xl")} />}
        </Link>
      ))}
    </div>
  );
};

export default Social;