import { cn } from '@/lib/utils';
import React from 'react';

interface CircleMouseProps {
    FrameSelectorName?: string
}
const CircleMouse = ({FrameSelectorName = "circle"}: CircleMouseProps) => {
  return (
    <div className={cn("hidden z-10 size-2 rounded-full bg-white absolute mix-blend-exclusion translate-x-[50%] translate-y-[50%] top-0 left-0 pointer-events-none", "md:block", FrameSelectorName)} />
  );
};

export default CircleMouse;