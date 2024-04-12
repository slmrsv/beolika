"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Work, Art, Article } from "@/types/types";
import Header from "../home/Header";
import About from "../home/About";
import Works from "../home/Works";
import News from "../home/News";
import Footer from "../Footer";
import { useGSAP } from "@gsap/react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { isDragCursorStore } from "@/stores";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({ works, articles }: WorksProps) => {
  const setIsDragCursor = isDragCursorStore(
    (state) => state.setIsDragCursor,
  );
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [stateRef, setStateRef] = useState<HTMLDivElement | null>(null);
  let selector: gsap.utils.SelectorFunc;

  useEffect(() => {
    if (ref.current) {
      setStateRef(ref.current);
    }
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (stateRef) {
        setWidth(stateRef.clientWidth);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [stateRef]);
  
  useGSAP(() => {
    if (!stateRef) return;
    
    selector = gsap.utils.selector(stateRef);
    const circle = document.querySelector(
      ".circle",
    ) as HTMLElement;
    const titleCursorMouse = selector(".title");
    const dragCursorMouse = selector(".drag");
    const linkCursorMouse = selector(".linkCursor");

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
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "font-montserrat space-y-20",
        "md:space-y-44",
      )}
    >
      <Header width={width} />
      <About />
      <Works works={works} />
      <News articles={articles} />
      <Footer />
    </div>
  );
};

export default Home;
