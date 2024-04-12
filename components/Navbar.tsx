"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { Suspense } from "react";
import { SkeletonNavBar } from "./skeleton/SkeletonNavBar";

const Navbar = () => {
  const pathname = usePathname();
  /*   const isMenuOpen = menuStore((state) => state.isMenuOpen); */
  /* const setIsMenuOpen = menuStore((state) => state.setIsMenuOpen); */
  return (
    <Suspense fallback={<SkeletonNavBar />}>
      {/* <div className={cn('absolute top-0 z-50 w-full font-audio flex justify-between items-center', 
        {
          "justify-end": isMenuOpen && pathname === "/",
          "border-none": isMenuOpen
        })}>
        {pathname !== "/" ? (
          <>
            {pathname.includes("cases") && !isMenuOpen ? (
              <div className={cn("gap-2 flex items-center hover:gap-4 cursor-pointer")}>    	
                <IoIosArrowDropleft className="text-2xl"/>
                <Link href="/work" className="text-xl font-montserrat font-bold uppercase">Back</Link>
              </div>
            ) : !isMenuOpen && <Link href="/" className='text-xl'>{SiteConfig.title.default}</Link>}
            
            <div className={cn('flex gap-2 items-center', 'lg:gap-4', 
              {
                "justify-end w-full": isMenuOpen
              })}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                onClick={setIsMenuOpen}
              >
                {isMenuOpen ? <IoCloseOutline className='cursor-pointer' /> : <TbMenu className='cursor-pointer' />}
              </Button>
              <ThemeToggle />
            </div>
          </>
        ) : (
          <>
            <div className={cn('flex gap-4 items-center', 
              {
                "hidden": isMenuOpen
              })}>
            </div>
            <div className={cn('flex gap-2 items-center', 'lg:gap-4')}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                onClick={setIsMenuOpen}
              >
                {isMenuOpen ? <IoCloseOutline className='cursor-pointer' /> : <TbMenu className='cursor-pointer' />}
              </Button>
              <ThemeToggle />
            </div>
          </>)}
      </div>
      {isMenuOpen && <Menu handleClose={setIsMenuOpen} />} */}
      {pathname.includes("cases") && (
        <Link
          href="/"
          className={cn(
            "text-xs gap-2 flex items-center hover:gap-4 cursor-pointer",
            "xs:text-sm",
            "md:text-lg",
            "xl:text-xl",
          )}
        >
          <GoArrowLeft
            className={cn("text-xs", "lg:text-4xl")}
          />
          Back
        </Link>
      )}
    </Suspense>
  );
};

export default Navbar;
