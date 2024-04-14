import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonCases() {
  return (
    <div className={cn("h-full w-full")}>
      <Skeleton
        className={cn(
          "h-2 w-20",
          "md:w-48",
          "xl:w-52",
        )}
      />
      <div
        className={cn(
          "space-y-10",
          "xl:pb-28 xl:space-y-20",
        )}
      >
        <div
          className={cn(
            "xl:flex xl:flex-col xl:h-[80vh] xl:justify-end",
          )}
        >
          <div
            className={cn(
              "pt-20 text-left flex flex-col",
              "xl:flex-row xl:justify-between xl:items-end",
            )}
          >
            <Skeleton className={cn("h-3 w-64")} />
          </div>
          <div
            className={cn(
              "space-y-2 pt-5 flex flex-col justify-end w-full items-end",
            )}
          >
            <Skeleton className={cn("h-2 w-20")} />
            <Skeleton className={cn("h-2 w-14")} />
            <Skeleton className={cn("h-2 w-10")} />
            <Skeleton className={cn("h-2 w-10")} />
            <Skeleton className={cn("h-2 w-24")} />
          </div>
        </div>
        <div
          className={cn(
            "space-y-4",
            "sm:space-y-6",
            "xl:flex xl:justify-between xl:gap-4 xl:space-y-0 xl:items-center",
          )}
        >
          <Skeleton
            className={cn(
              "h-44 w-full rounded-3xl",
              "sm:h-56",
              "md:h-96",
              "lg:h-[500px]",
              "xl:h-[450px]",
            )}
          />
          <Skeleton
            className={cn(
              "h-44 w-full rounded-3xl",
              "sm:h-56",
              "md:h-96",
              "lg:h-[500px]",
              "xl:h-[450px]",
            )}
          />
        </div>
      </div>
    </div>
  );
}
