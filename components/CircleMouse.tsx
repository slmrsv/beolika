import { cn } from '@/lib/utils';
import React from 'react';
import { workCursorStore } from '@/stores';
import { GoArrowDownRight } from "react-icons/go";

interface CircleMouseProps {
    FrameSelectorName?: string
}
const CircleMouse = ({ FrameSelectorName = "circle" }: CircleMouseProps) => {
  const isWorkCursor = workCursorStore(state => state.isWorkCursor); 

  return (
    <div className={cn("hidden z-10 size-2 rounded-full bg-white absolute mix-blend-exclusion translate-x-[50%] translate-y-[50%] top-0 left-0 pointer-events-none", "md:block", FrameSelectorName)}>
      {isWorkCursor && <GoArrowDownRight className="text-black-white h-full w-full rotate-[-90deg]" style={{fontSize: 5}} />} {/* Affichez l'icône en fonction de l'état global */}
    </div>
  );
};

export default CircleMouse;
