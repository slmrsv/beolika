import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SkeletonProfil() {
  return (
    <div
      className={cn(
        "flex flex-col mt-6 h-screen",
        "md:mt-10",
        "lg:mt-14",
        "xl:mt-20 xl:h-[85vh]",
      )}
    >
      <Skeleton
        className={cn(
          "h-8 w-full text-center",
          "md:h-20",
          "xl:h-44",
          "2xl:h-64",
        )}
      />
      <div
        className={cn(
          "flex justify-between w-full pt-4 border-t mt-4",
          "md:mt-6 md:pt-6",
          "xl:pt-10 xl:mt-10",
        )}
      >
        <Skeleton
          className={cn(
            "hidden",
            "xl:block xl:h-4 xl:w-[300px]",
          )}
        />
        <Skeleton
          className={cn(
            "h-4 w-36",
            "md:w-44",
            "xl:w-[300px]",
          )}
        />
        <Skeleton
          className={cn(
            "h-4 w-32",
            "md:w-44",
            "xl:w-[300px]",
          )}
        />
      </div>
      <div
        className={cn(
          "flex items-end justify-end h-[75vh]",
        )}
      >
        <div
          className={cn(
            "space-y-4 flex flex-col items-end",
            "xl:space-y-6",
          )}
        >
          <Skeleton
            className={cn(
              "h-4 w-[180px]",
              "md:w-[460px]",
              "xl:w-[750px]",
            )}
          />
          <Skeleton
            className={cn(
              "h-4 w-60",
              "md:w-[360px]",
              "xl:w-[600px]",
            )}
          />
          <Skeleton
            className={cn("h-4 w-60", "md:hidden")}
          />
          <Skeleton
            className={cn("h-4 w-32", "md:hidden")}
          />
        </div>
      </div>
    </div>
  );
}
