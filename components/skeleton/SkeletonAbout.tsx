import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
 
export function SkeletonAbout() {
  return (
    <div className={cn("mt-44 space-y-44 w-full", "sm:mt-52")}>
      <div className={cn("space-y-6")}>
        <Skeleton className={cn("mx-auto h-4 w-44", "md:w-96", "xl:w-24")} />
        <Skeleton className={cn("mx-auto h-4 w-64", "md:hidden")} />
      </div>
      <div className={cn("space-y-4")}>
        <Skeleton className={cn("h-4 w-44", "sm:w-80", "md:w-[650px]", "lg:mx-auto")} />
        <Skeleton className={cn("h-4 w-64", "sm:w-96", "md:w-[650px]", "lg:mx-auto")} />
        <Skeleton className={cn("h-4 w-32", "sm:w-[350px]", "md:w-[550px]", "lg:mx-auto")} />
        <Skeleton className={cn("h-4 w-60", "sm:w-[400px]", "md:w-[600px]", "lg:mx-auto")} />
        <Skeleton className={cn("h-4 w-72", "sm:w-80", "md:hidden")} />
        <Skeleton className={cn("h-4 w-60", "sm:w-[380px]", "md:hidden")} />
        <Skeleton className={cn("h-4 w-48", "sm:w-72", "md:hidden")} />
        <Skeleton className={cn("h-4 w-64", "sm:w-32", "md:hidden")} />
      </div>
      <div className='space-y-14'>
        <Skeleton className={cn("h-4 w-44", "sm:w-80", "md:w-52")} />
        <div className={cn('space-y-10 w-full', 'lg:hidden')}>
          <Skeleton className={cn("w-full h-1")} />
          <Skeleton className={cn("h-4 w-36", "sm:w-80", "md:w-36")} />
          <Skeleton className={cn("w-full h-1")} />
          <Skeleton className={cn("h-4 w-32", "sm:w-80", "md:w-56")} />
          <Skeleton className={cn("w-full h-1")} />
          <Skeleton className={cn("h-4 w-40", "sm:w-80", "md:w-48")} />
          <Skeleton className={cn("w-full h-1")} />
          <Skeleton className={cn("h-4 w-10", "sm:w-80", "md:w-24")} />
          <Skeleton className={cn("w-full h-1")} />
          <Skeleton className={cn("h-4 w-44", "sm:w-80", "md:w-24")} />
          <Skeleton className={cn("w-full h-1")} />
        </div>

        <div className={cn('space-y-10 hidden', "lg:block")}>
          <Skeleton className={cn("w-full h-1 text-left")} />
          <div className={cn("lg:flex lg:justify-between")}>
            <Skeleton className={cn("h-4 w-80")} />
            <Skeleton className={cn("h-4 w-48")} />
          </div>
          <Skeleton className={cn("w-full h-1")} />
          <div className={cn("lg:flex lg:justify-between")}>
            <Skeleton className={cn("h-4 w-72")} />
            <Skeleton className={cn("h-4 w-40")} />
          </div>
          <Skeleton className={cn("w-full h-1")} />
          <div className={cn("lg:flex lg:justify-between")}>
            <Skeleton className={cn("h-4 w-40")} />
            <Skeleton className={cn("h-4 w-32")} />
          </div>
          <Skeleton className={cn("w-full h-1")} />
          <div className={cn("lg:flex lg:justify-between")}>
            <Skeleton className={cn("h-4 w-32")} />
            <Skeleton className={cn("h-4 w-20")} />
          </div>
          <Skeleton className={cn("w-full h-1")} />
          <div className={cn("lg:flex lg:justify-between")}>
            <Skeleton className={cn("h-4 w-14")} />
            <Skeleton className={cn("h-4 w-14")} />
          </div>
          <Skeleton className={cn("w-full h-1")} />
          <div className={cn("lg:flex lg:justify-between")}>
            <Skeleton className={cn("h-4 w-60")} />
            <Skeleton className={cn("h-4 w-28")} />
          </div>
        </div>
      </div>
    </div>
  );
}