import React from 'react';
import { TbMenu } from "react-icons/tb";
import { ThemeToggle } from './ThemeToggle';

const Navbar = ({home}: {home?: boolean}) => {
  return (
    <div className='absolute top-0 z-50 w-full font-audio flex justify-between items-center border-b pb-6'>
      <h3 className="text-xl">Profil Mode</h3>
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