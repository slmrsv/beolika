import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonProducts () {
  return (
    <div className={cn("mt-44 space-y-28 w-full", "sm:mt-52")}>
      <Skeleton className={cn("mx-auto h-4 w-36", "md:w-44", "xl:w-52")} />
      <div className={cn("pt-8 space-y-14", "md:grid md:grid-cols-2 md:space-y-0 md:gap-6 md:items-center", "xl:grid-cols-3")}>
        <Skeleton className={cn("h-96 w-full rounded-3xl", "sm:h-[550px]", "md:h-96", "lg:h-[550px]", "xl:h-[550px]")} />
        <Skeleton className={cn("h-96 w-full rounded-3xl", "sm:h-[550px]", "md:h-96", "lg:h-[550px]", "xl:h-[550px]")} />
        <Skeleton className={cn("h-96 w-full rounded-3xl", "sm:h-[550px]", "md:h-96", "lg:h-[550px]", "xl:h-[550px]")} />
        <Skeleton className={cn("h-96 w-full rounded-3xl", "sm:h-[550px]", "md:h-96", "lg:h-[550px]", "xl:h-[550px]")} />
      </div>
    </div>
  );
}
