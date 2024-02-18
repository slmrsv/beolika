"use client";
import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { ThemeToggle } from './ThemeToggle';
import { Switch } from "@/components/ui/switch";
import { menuStore, modeStore } from '@/stores';
import { cn } from '@/lib/utils';
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import Menu from './Menu';
import Link from 'next/link';
import { IoIosArrowDropleft } from "react-icons/io";
import { Suspense } from "react";
import { SkeletonNavBar } from "./skeleton/SkeletonNavBar";

const Navbar = () => {
  const pathname = usePathname(); 
  const isArtMode = modeStore((state) => state.isArtMode);
  const setIsArtMode = modeStore((state) => state.setIsArtMode);
  const isMenuOpen = menuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = menuStore((state) => state.setIsMenuOpen);
  return (
    <Suspense fallback={<SkeletonNavBar />}>
      <div className={cn('absolute top-0 z-50 w-full font-audio flex justify-between items-center', 
        {
          "justify-end": isMenuOpen && pathname === "/",
          "border-b pb-6": !isArtMode || pathname !== "/",
          "border-none": isMenuOpen
        })}>
        {pathname !== "/" ? (
          <>
            {pathname.includes("cases") && !isMenuOpen ? (
              <div className={cn("gap-2 flex items-center hover:gap-4 cursor-pointer")}>    	
                <IoIosArrowDropleft className="text-2xl"/>
                <Link href="/work" className="text-xl">Back</Link>
              </div>
            ) : !isMenuOpen && <Link href="/" className='text-xl'>Beolika</Link>}
            
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
              <Switch onCheckedChange={setIsArtMode} checked={isArtMode} />
              <h3 className="text-xl">{isArtMode ? "Art Mode" : "Profil Mode" }</h3>
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
      {isMenuOpen && <Menu handleClose={setIsMenuOpen} />}
    </Suspense>
  );
};

export default Navbar;