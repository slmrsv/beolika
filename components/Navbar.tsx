"use client";
import React, { useState, useEffect } from 'react';
import { TbMenu } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { ThemeToggle } from './ThemeToggle';
import { Switch } from "@/components/ui/switch";
import { modeStore } from '@/stores';
import { cn } from '@/lib/utils';
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import Menu from './Menu';

const Navbar = () => {
  const pathname = usePathname(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const artMode = modeStore((state) => state.artMode);
  const changeMode = modeStore((state) => state.changeMode);

  const handleSwitchToggle = () => {
    changeMode();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={cn('absolute top-0 z-50 w-full font-audio flex justify-between items-center', !artMode && "border-b pb-6")}>
        {pathname !== "/" ? (
          <>
            <h3 className="text-xl">Beolika</h3>
            <div className='flex gap-4 items-center text-xl'>
              menu
              <Button
                variant={artMode ? "ghostArt" : "ghost"}
                size="icon"
                asChild
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <IoCloseOutline className='text-2xl cursor-pointer' /> : <TbMenu className='text-2xl cursor-pointer' />}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className='flex gap-4 items-center'>
              <Switch onCheckedChange={handleSwitchToggle} checked={artMode} />
              <h3 className="text-xl">{artMode ? "Art Mode" : "Profil Mode" }</h3>
            </div>
            <ThemeToggle />
          </>)}
      </div>
      {isMenuOpen && <Menu handleClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Navbar;