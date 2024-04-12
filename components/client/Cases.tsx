"use client";
import { GoArrowLeft ,GoArrowRight } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Case, Work } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface CasesProps {
    cases: Case;
    previousProjectSlug?: Work;
    nextProjectSlug?: Work;
}
const Cases = ({cases, previousProjectSlug, nextProjectSlug}: CasesProps) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    const circle = document.querySelector(".circle") as HTMLElement;
  
    circle.style.setProperty("scale", "0");
    circle.style.setProperty("opacity", "0");
    circle.style.setProperty("top", "0");
    circle.style.setProperty("left", "0");
  }, []);
  
  useEffect(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    const handleMouseMove = () => {
      if (circle) {
        circle.style.setProperty("scale", "1");
        circle.style.setProperty("opacity", "1");
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={cn('font-montserrat my-10 space-y-28 text-xl w-full text-center h-full', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <div className={cn("border-t pt-8 space-y-14 text-left", "xl:pb-28 xl:space-y-24")}>
        <div className={cn("flex flex-col space-y-14", "md:flex-row md:justify-between md:space-y-0")}>
          <div className={cn("space-y-2", "xl:space-y-2")}>
            <p className={cn('text-4xl', 'xl:text-6xl')}>{cases?.title}</p>
            <p className={cn('text-2xl font-light', 'xl:text-3xl')}>{cases?.company}</p>
          </div>
          <div className={cn("text-right text-2xl", "xl:text-4xl font-light xl:space-y-2")}>
            <p>{cases?.role}</p>
            <p>{cases?.construction}</p>
            <p>{cases?.date}</p>
          </div>
        </div>
        <p className={cn("text-base leading-8 font-light", "xs:leading-9 xs:text-lg", "md:text-center", "xl:w-[1200px] xl:mx-auto xl:text-2xl xl:leading-10")}>{cases?.content}</p>
        <div className={cn("space-y-4", "xl:grid xl:grid-cols-2 xl:items-center xl:gap-6 xl:space-y-0")}>
          {cases?.pictures.map((image, index) => (
            <Image key={index} src={image.image} alt={image.alt} width={1200} height={750} className={cn("w-full bg-gray-300 rounded-3xl")} />
          ))}
        </div>
        <div className={cn("flex items-center", 
          {
            "justify-start": previousProjectSlug && !nextProjectSlug,
            "justify-between": previousProjectSlug && nextProjectSlug,
            "justify-end": !previousProjectSlug && nextProjectSlug
          }
        )}>
          <div className={cn("gap-2 flex items-center hover:gap-4 cursor-pointer",
            {
              "hidden": !previousProjectSlug?.slug
            })}>    	
            <GoArrowLeft className={cn("text-2xl", "lg:text-4xl")}/>
            <Link href={`/cases/${previousProjectSlug?.slug}`} className={cn("mailCursor text-xs", "xs:text-sm", "md:text-lg", "xl:text-xl")}>Previous projet</Link>
          </div>
          <div className={cn("gap-2 flex items-center hover:gap-4 cursor-pointer", 
            {
              "hidden": !nextProjectSlug?.slug
            })}>    	
            <Link href={`/cases/${nextProjectSlug?.slug}`} className={cn("mailCursor text-xs", "xs:text-sm", "md:text-lg", "xl:text-xl")}>Next project</Link>
            <GoArrowRight className={cn("text-2xl", "lg:text-4xl")}/>
          </div>
        </div>
        {cases?.siteUrl && (
          <div className={cn('w-full')}>
            <Button variant="outline" className={cn('rounded-full py-5 text-base w-32 h-32 flex mx-auto', 'xs:w-36 h-36', "md:w-80", "xl:py-6 xl:w-52 xl:h-52")} asChild>
              <Link href={cases?.siteUrl} className={cn("text-xs", "xs:text-sm", "md:text-lg", "xl:text-xl", 'duration-500 delay-75')} target="_blank" rel="noopener noreferrer">View Project</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cases;