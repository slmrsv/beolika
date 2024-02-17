import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonArt () {
  return (
    <div className={cn("mt-44 space-y-28 w-full", "sm:mt-52")}>
      <Skeleton className={cn("mx-auto h-4 w-36", "md:w-44", "xl:w-52")} />
      <div className={cn("pt-8 space-y-14", "xl:pb-28 xl:space-y-24", "xl:flex xl:items-center xl:space-y-0 xl:space-x-6")}>
        <div className={cn("space-y-6 w-full")}>
          <Skeleton className={cn("h-80 rounded-3xl", "xs:h-[400px]", "sm:h-[450px]", "md:h-[850px]", "lg:h-[1050px]", "xl:h-[450px]", "2xl:h-[1050px]")} />
          <Skeleton className={cn("h-2 w-36", "sm:w-40", "md:w-44", "xl:w-48")} />
        </div>
        <div className={cn("space-y-6 w-full")}>
          <Skeleton className={cn("h-80 rounded-3xl", "xs:h-[400px]", "sm:h-[450px]", "md:h-[850px]", "lg:h-[1050px]", "xl:h-[450px]", "2xl:h-[1050px]")} />
          <Skeleton className={cn("h-2 w-36", "sm:w-40", "md:w-44", "xl:w-48")} />
        </div>
        <div className={cn("space-y-6 w-full")}>
          <Skeleton className={cn("h-80 rounded-3xl", "xs:h-[400px]", "sm:h-[450px]", "md:h-[850px]", "lg:h-[1050px]", "xl:h-[450px]", "2xl:h-[1050px]")} />
          <Skeleton className={cn("h-2 w-36", "sm:w-40", "md:w-44", "xl:w-48")} />
        </div>
      </div>
    </div>
  );
}
