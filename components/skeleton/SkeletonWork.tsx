import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SkeletonWork()  {
  return (
    <div className={cn("mt-44 space-y-44 w-full", "sm:mt-52")}>
      <div className={cn("space-y-6")}>
        <Skeleton className={cn("mx-auto h-4 w-64", "md:w-96 md:mx-0")} />
        <Skeleton className={cn("mx-auto h-4 w-44", "md:hidden")} />
      </div>  
      <div className={cn('space-y-10 w-full')}>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("flex justify-between")}>
          <Skeleton className={cn("h-4 w-36", "sm:w-80", "md:w-36")} />
          <Skeleton className={cn("h-4 w-8", "md:w-14")} />
        </div>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("flex justify-between")}>
          <Skeleton className={cn("h-4 w-48", "sm:w-80", "md:w-56")} />
          <Skeleton className={cn("h-4 w-8", "md:w-14")} />
        </div>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("flex justify-between")}>
          <Skeleton className={cn("h-4 w-52", "sm:w-80", "md:w-48")} />
          <Skeleton className={cn("h-4 w-8", "md:w-14")} />
        </div>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("flex justify-between")}>
          <Skeleton className={cn("h-4 w-44", "sm:w-80", "md:w-24")} />
          <Skeleton className={cn("h-4 w-8", "md:w-14")} />
        </div>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("flex justify-between")}>
          <Skeleton className={cn("h-4 w-32", "sm:w-80", "md:w-24")} />
          <Skeleton className={cn("h-4 w-8", "md:w-14")} />
        </div>
        <Skeleton className={cn("w-full h-1")} />
        <div className={cn("flex justify-between")}>
          <Skeleton className={cn("h-4 w-52", "sm:w-80", "md:w-24")} />
          <Skeleton className={cn("h-4 w-8", "md:w-14")} />
        </div>
        <Skeleton className={cn("w-full h-1")} />
      </div>
    </div>
  );
}
