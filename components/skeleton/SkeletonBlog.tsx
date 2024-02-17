import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonBlog () {
  return (
    <div className={cn("mt-44 space-y-28 w-full", "sm:mt-52")}>
      <Skeleton className={cn("mx-auto h-4 w-36", "md:w-44", "xl:w-52")} />
      <div className={cn("pt-8 space-y-10", "md:grid md:grid-cols-2 md:space-y-0 md:gap-6 md:items-center", "xl:grid-cols-3")}>
        <Skeleton className={cn("h-80 w-full rounded-3xl", "sm:h-[300px]", "md:h-72", "lg:h-[370px]", "xl:h-[400px]")} />
        <Skeleton className={cn("h-80 w-full rounded-3xl", "sm:h-[300px]", "md:h-72", "lg:h-[370px]", "xl:h-[400px]")} />
        <Skeleton className={cn("h-80 w-full rounded-3xl", "sm:h-[300px]", "md:h-72", "lg:h-[370px]", "xl:h-[400px]")} />
        <Skeleton className={cn("h-80 w-full rounded-3xl", "sm:h-[300px]", "md:h-72", "lg:h-[370px]", "xl:h-[400px]")} />
        <Skeleton className={cn("h-80 w-full rounded-3xl", "sm:h-[300px]", "md:h-72", "lg:h-[370px]", "xl:h-[400px]")} />
        <Skeleton className={cn("h-80 w-full rounded-3xl", "sm:h-[300px]", "md:h-72", "lg:h-[370px]", "xl:h-[400px]")} />
      </div>
    </div>
  );
}
