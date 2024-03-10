import { cn } from '@/lib/utils';
import React from 'react';

const Copyright = () => {
  return <p className={cn('w-full text-center font-sync text-[10px] absolute bottom-2', "md:text-xs")}>©2024 - Beolika. All Rights Reserved.</p>;
};

export default Copyright;