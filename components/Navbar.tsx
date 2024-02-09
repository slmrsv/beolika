"use client";
import React from 'react';
import { TbMenu } from "react-icons/tb";
import { ThemeToggle } from './ThemeToggle';
import { Switch } from "@/components/ui/switch";
import { modeStore } from '@/store/modeStore';

const Navbar = ({home}: {home?: boolean}) => {
  const artMode = modeStore((state) => state.artMode);
  const changeMode = modeStore((state) => state.changeMode);

  const handleSwitchToggle = () => {
    changeMode();
  };

  return (
    <div className='absolute top-0 z-50 w-full font-audio flex justify-between items-center border-b pb-6'>
      <div className='flex gap-4 items-center'>
        <Switch onCheckedChange={handleSwitchToggle} checked={artMode} />
        <h3 className="text-xl">{artMode ? "Art Mode" : "Profil Mode" }</h3>
      </div>
      {!home ? (
        <div className='flex gap-4 items-center text-xl'>
            menu
          <TbMenu className='text-2xl' />
        </div>
      ) : <ThemeToggle />}
    </div>
  );
};

export default Navbar;