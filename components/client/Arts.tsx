"use client";
import { Art } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ArtProps {
    arts: Art[] | null;
}

const Arts = ({arts}: ArtProps) => {
  return (
    <div className={cn('my-44 space-y-28 text-xl w-full', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio font-bold text-5xl text-center', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>Play<br className="md:hidden"/>Ground</h3>
      <div className={cn("space-y-8 pt-8", "xl:grid xl:grid-cols-3 xl:gap-6 xl:space-y-0")}>
        {arts?.map((art, index) => (
          <div key={index} className={cn("space-y-4")}>
            <Image src={art.image} alt={art.alt} width={1080} height={1920} className={cn("w-full bg-gray-300 rounded-tl-3xl rounded-br-3xl")} />
            <p className={cn("text-lg font-sync", "xl:text-2xl")}>{art.title}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arts;