"use client";
import { Work } from '@/types/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

interface WorksProps {
    works: Work[] | null
}

const Works = ({works}: WorksProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={cn('my-44 space-y-28 text-xl w-full text-center', "md:text-left lg:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio font-bold text-5xl', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>Selected Works</h3>
      <div>
        {works?.map((work, index) => (
          <Link key={index} href={`/work/cases/${work.slug}`}>
            <div             
              className={cn('border-b flex items-center justify-between py-6 w-full cursor-pointer', 'duration-500 delay-75', 'hover:text-background hover:bg-primary hover:px-6 hover:rounded-tl-3xl hover:rounded-br-3xl hover:md:px-8 hover:border-transparent hover:xl:px-10', 'xl:py-8', 
                {
                  "border-transparent": index === hoveredIndex! - 1
                }           
              )}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <div className={cn('space-y-1 text-left', 'xl:space-y-4')}>
                <p className={cn('font-sync text-2xl uppercase', 'xl:text-6xl')}>{work.title}</p>
                <p className={cn('font-sync text-sm', 'xl:text-xl')}>{work.category}</p>
              </div>
              <div className={cn('font-sync text-xl', 'xl:text-4xl')}>{work.date.slice(2)}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;