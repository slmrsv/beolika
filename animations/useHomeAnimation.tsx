import React from 'react';
import { useGSAP } from "@gsap/react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import {
  isDragCursorStore,
  isWorkCursorStore,
} from "@/stores"; 

const useHomeAnimation = (ref: React.RefObject<HTMLDivElement>) => {
  let selector: gsap.utils.SelectorFunc =
    gsap.utils.selector(ref);
  const setIsDragCursor = isDragCursorStore(
    (state) => state.setIsDragCursor,
  );
  const setIsWorkCursor = isWorkCursorStore(
    (state) => state.setIsWorkCursor,
  );
    
    
  useGSAP(() => {
    const circle = document.querySelector(
      ".circle",
    ) as HTMLElement;
    const titleCursorMouse = selector(".title");
    const dragCursorMouse = selector(".drag");
    const linkCursorMouse = selector(".linkCursor");
    const workCursorMouse = selector(".works");
        
    if (!circle) {
      return;
    }
    
    titleCursorMouse.forEach((title) => {
      title.onmousemove = () => {
        gsap.to(circle, {
          scale: 40,
        });
      };
      title.onmouseleave = () => {
        gsap.to(circle, {
          scale: 1,
        });
      };
    });
    
    dragCursorMouse.forEach((drag) => {
      drag.onmousemove = () => {
        gsap.to(circle, {
          scale: 13,
        });
    
        setIsDragCursor(true);
      };
      drag.onmouseleave = () => {
        gsap.to(circle, {
          scale: 1,
        });
    
        setIsDragCursor(false);
      };
    });
    
    linkCursorMouse.forEach((linkCursor) => {
      linkCursor.onmousemove = () => {
        gsap.to(circle, {
          scale: 15,
        });
      };
      linkCursor.onmouseleave = () => {
        gsap.to(circle, {
          scale: 1,
        });
      };
    });
    
    workCursorMouse.forEach((work) => {
      work.onmousemove = () => {
        gsap.to(circle, {
          scale: 25,
        });
    
        setIsWorkCursor(true);
      };
      work.onmouseleave = () => {
        gsap.to(circle, {
          scale: 1,
        });
    
        setIsWorkCursor(false);
      };
    });
    
    return () => {
      window.onmousemove = null;
      if (titleCursorMouse) {
        titleCursorMouse.forEach((title) => {
          title.onmousemove = null;
          title.onmouseleave = null;
        });
      }
      if (dragCursorMouse) {
        dragCursorMouse.forEach((drag) => {
          drag.onmousemove = null;
          drag.onmouseleave = null;
        });
      }
      if (linkCursorMouse) {
        linkCursorMouse.forEach((linkCursor) => {
          linkCursor.onmousemove = null;
          linkCursor.onmouseleave = null;
        });
      }
      if (workCursorMouse) {
        workCursorMouse.forEach((work) => {
          work.onmousemove = null;
          work.onmouseleave = null;
        });
      }
    };
  }, []);
  return (
    <div>
            
    </div>
  );
};

export default useHomeAnimation;