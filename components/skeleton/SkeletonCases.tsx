import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonCases () {
  return (
    <div className={cn("mt-44 space-y-28 w-full", "sm:mt-52")}>
      <Skeleton className={cn("mx-auto h-4 w-36", "md:w-44", "xl:w-52")} />
      <div className={cn("pt-8 space-y-14", "xl:pb-28 xl:space-y-24")}>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("space-y-14", "md:hidden")}>
          <div className={cn("space-y-7")}>
            <Skeleton className={cn("h-4 w-52", "md:w-48", "xl:w-24")} />
            <Skeleton className={cn("h-4 w-24")} />
          </div>
          <div className={cn("space-y-5 pt-5 flex flex-col justify-end w-full items-end")}>
            <Skeleton className={cn("h-2 w-52", "xl:w-24")} />
            <Skeleton className={cn("h-2 w-24")} />
            <Skeleton className={cn("h-2 w-10")} />
          </div>
        </div>
        <div className={cn("hidden", "md:flex md:justify-between md:items-center")}>
          <div className={cn("space-y-7")}>
            <Skeleton className={cn("h-4 w-52", "md:w-48", "xl:w-52")} />
            <Skeleton className={cn("h-4 w-24")} />
          </div>
          <div className={cn("space-y-5 pt-5 flex flex-col justify-end w-full items-end")}>
            <Skeleton className={cn("h-2 w-52")} />
            <Skeleton className={cn("h-2 w-24")} />
            <Skeleton className={cn("h-2 w-10")} />
          </div>
        </div>
        <div className={cn("space-y-5 pt-5 w-full")}>
          <Skeleton className={cn("h-2 w-72", "sm:w-80", "md:w-[550px] md:mx-auto", "xl:w-[850px]")} />
          <Skeleton className={cn("h-2 w-52", "sm:w-96",  "md:w-[600px] md:mx-auto", "xl:w-[800px]")} />
          <Skeleton className={cn("h-2 w-64", "sm:w-72",  "md:w-[650px] md:mx-auto", "xl:w-[820px]")} />
          <Skeleton className={cn("h-2 w-56", "sm:w-96",  "md:w-[550px] md:mx-auto", "xl:w-[750px]")} />
          <Skeleton className={cn("h-2 w-68", "sm:w-80",  "md:w-[500px] md:mx-auto", "xl:w-[600px]")} />
          <Skeleton className={cn("h-2 w-48", "sm:w-96",  "md:w-[600px] md:mx-auto", "xl:w-[700px]")} />
          <Skeleton className={cn("h-2 w-72", "sm:w-80",  "md:w-[450px] md:mx-auto", "xl:w-[650px]")} />
        </div>
        <div className={cn("space-y-4", "sm:space-y-6", "xl:flex xl:justify-between xl:gap-4 xl:space-y-0 xl:items-center")}>
          <Skeleton className={cn("h-44 w-full rounded-3xl", "sm:h-56", "md:h-96", "lg:h-[500px]", "xl:h-[450px]")} />
          <Skeleton className={cn("h-44 w-full rounded-3xl", "sm:h-56", "md:h-96", "lg:h-[500px]", "xl:h-[450px]")} />
        </div>
      </div>  
    </div>
  );
}
