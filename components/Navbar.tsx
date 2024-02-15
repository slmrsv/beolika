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

const Navbar = () => {
  const pathname = usePathname(); 
  const isArtMode = modeStore((state) => state.isArtMode);
  const setIsArtMode = modeStore((state) => state.setIsArtMode);
  const isMenuOpen = menuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = menuStore((state) => state.setIsMenuOpen);

  return (
    <>
      <div className={cn('absolute top-0 z-50 w-full font-audio flex justify-between items-center', !isArtMode && "border-b pb-6", pathname !== "/" && "border-b pb-6")}>
        {pathname !== "/" ? (
          <>
            <Link href="/" className='text-xl'>
              Beolika
            </Link>
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
          </>
        ) : (
          <>
            <div className='flex gap-4 items-center'>
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
    </>
  );
};

export default Navbar;