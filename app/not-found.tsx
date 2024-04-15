import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export default async function NotFound() {
  return (
    <div className="h-[90vh] w-full text-center font-montserrat flex flex-col justify-center items-center">
      <div>
        <h2 className={cn("text-[30vw] font-medium leading-[100%]")}>4O4</h2>
        <p className={cn("pb-10 font-light")}>The page you're looking for doesn't exist or has been moved</p>
        <Link
          href="/"
          className={cn(
            "text-xs w-full uppercase font-medium gap-2 flex justify-center items-center hover:gap-4",
            "xl:text-2xl",
          )}
        >
          <GoArrowLeft
            className={cn("text-xs", "lg:text-lg")}
          />
        Back to home
        </Link>
      </div>
    </div>
  );
}
