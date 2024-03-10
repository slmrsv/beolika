import { cn } from "@/lib/utils";
import Link from "next/link";
import React from 'react';

interface FrameLinkProps {
    circleMouseSelectorName?: string;
    links: {
        href: string;
        title: string;
    }[]
}

const FrameLink = ({
  circleMouseSelectorName = "frame",
  links,
}: FrameLinkProps) => {
  return (
    <nav className="sticky top-4 w-full mix-blend-exclusion text-white z-50">
      <ul className="flex justify-center items-center gap-x-10 py-4 text-xl font-extralight text-white">
        {links.map((link, index) => (
          <li
            key={index}
            className={cn(
              'h-[2vw] overflow-hidden z-20 relative', 
              '*:flex *:flex-col *:justify-center *:items-center *:text-center *:px-5 *:h-[2vw] *:cursor-pointer',
              circleMouseSelectorName
            )}
          >
            <Link href={link.href} className="text-white">
              {link.title}
            </Link>
            <Link href={link.href} className="text-white">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FrameLink;
