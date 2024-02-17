import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
 
export function SkeletonProfil() {
  return (
    <div className={cn('flex flex-col justify-center items-center mb-2 mt-32', "sm:mt-[150px]", 'xl:mt-36')}>
      <Skeleton className={cn("h-40 w-40 rounded-full mb-4", 'md:mb-6', 'xl:w-48 xl:h-48 xl:mb-8')} />
      <div className={cn("space-y-6 mt-6", "xl:mt-8")}>
        <Skeleton className={cn("h-4 w-[180px] mx-auto")} />
        <Skeleton className={cn("h-4 mx-auto w-64", "xl:w-[300px]")} />
      </div>
      <div className={cn("space-y-14 mt-6", "sm:mt-10","xl:mt-12")}>
        <Skeleton className={cn("h-4 w-[180px] mx-auto", "sm:w-52")} />
        <Skeleton className={cn("h-4 w-60 mx-auto", "sm:w-72", "xl:w-[300px]")} />
      </div>
    </div>
  );
}