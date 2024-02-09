import React from 'react';
import { TbMenu } from "react-icons/tb";
import { Separator } from '@/components/ui/separator';

const Navbar = ({home}: {home?: boolean}) => {
  return (
    <div>
      <div className='font-audio flex justify-between items-center'>
        <h3 className="text-xl">Profil Mode</h3>
        {!home && (
          <div className='flex gap-4 items-center text-xl'>
            menu
            <TbMenu className='text-2xl' />
          </div>
        )}
      </div>
      <Separator className="mt-6" />
    </div>
  );
};

export default Navbar;