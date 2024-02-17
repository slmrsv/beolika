import Copyright from "@/components/Copyright";
import { getArts } from "@/data/art";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default async function ArtPage () {
  const arts = await getArts();
  return (
    <Suspense fallback={<Loading />}>
      <div className={cn('my-44 space-y-28 text-xl w-full', "md:text-left md:text-2xl", "xl:text-4xl")}>
        <h3 className={cn('font-audio text-4xl uppercase text-center', 'sm:text-5xl', "md:text-5xl", "xl:text-left xl:text-7xl")}>3D Arts</h3>
        <div className={cn("space-y-8 pt-8", "xl:grid xl:grid-cols-3 xl:gap-6 xl:space-y-0")}>
          {arts?.map((art, index) => (
            <div key={index} className={cn("space-y-4")}>
              <Image src={art.image} alt={art.alt} width={1080} height={1920} className={cn("w-full bg-gray-300 rounded-3xl")} />
              <p className={cn("text-2xl font-audio")}>{art.title}</p> 
            </div>
          ))}
        </div>
        <Copyright />
      </div>
    </Suspense>
  );
}
