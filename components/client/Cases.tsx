"use client";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Case, Work } from "@/types/types";
import { cn } from "@/lib/utils";
import Copyright from "@/components/Copyright";
import Image from "next/image";
import Link from "next/link";

interface CasesProps {
    cases: Case;
    previousProjectSlug?: Work;
    nextProjectSlug?: Work;
}
const Cases = ({cases, previousProjectSlug, nextProjectSlug}: CasesProps) => {
  return (
    <div className={cn('my-44 space-y-28 text-xl w-full text-center', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio text-4xl uppercase text-center', 'sm:text-5xl', "md:text-5xl", "xl:text-7xl")}>Cases</h3>
      <div className={cn("border-t pt-8 space-y-14 text-left", "xl:pb-28 xl:space-y-24")}>
        <div className={cn("flex flex-col space-y-14", "md:flex-row md:justify-between md:space-y-0")}>
          <div className={cn("space-y-2", "xl:space-y-4")}>
            <p className={cn('font-audio text-4xl', 'xl:text-5xl')}>{cases?.title}</p>
            <p className={cn('text-2xl', 'xl:text-3xl')}>{cases?.company}</p>
          </div>
          <div className={cn("text-right text-lg", "xl:text-xl xl:space-y-4")}>
            <p>{cases?.role}</p>
            <p>{cases?.construction}</p>
            <p>{cases?.date}</p>
          </div>
        </div>
        <p className={cn("text-lg", "md:text-center", "xl:w-[950px] xl:mx-auto")}>{cases?.content}</p>
        <div className={cn("space-y-4", "xl:grid xl:grid-cols-2 xl:items-center xl:gap-6 xl:space-y-0")}>
          {cases?.pictures.map((image, index) => (
            <Image key={index} src={image.image} alt={image.alt} width={1200} height={750} className={cn("w-full bg-gray-300 rounded-3xl")} />
          ))}
        </div>
        <div className={cn("font-audio flex items-center", 
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
            <IoIosArrowDropleft className="text-2xl"/>
            <Link href={`/work/cases/${previousProjectSlug?.slug}`} className={cn("text-xs", "xs:text-sm", "md:text-lg")}>Previous projet</Link>
          </div>
          <div className={cn("gap-2 flex items-center hover:gap-4 cursor-pointer", 
            {
              "hidden": !nextProjectSlug?.slug
            })}>    	
            <Link href={`/work/cases/${nextProjectSlug?.slug}`} className={cn("text-xs", "xs:text-sm", "md:text-lg")}>Next project</Link>
            <IoIosArrowDropright className="text-2xl"/>
          </div>
        </div>
        {cases?.siteUrl && (
          <div className={cn('w-full')}>
            <Button variant="outline" className={cn('font-audio rounded-full w-full py-5', 'xs:w-72 xs:flex xs:mx-auto', "md:w-80", "xl:py-6 xl:w-96")} asChild>
              <Link href={cases?.siteUrl} className={cn('xl:text-lg')} target="_blank" rel="noopener noreferrer">View Project</Link>
            </Button>
          </div>
        )}
      </div>
      <Copyright />
    </div>
  );
};

export default Cases;