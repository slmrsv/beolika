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
import {
  isDragCursorStore,
  isWorkCursorStore,
} from "@/stores";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({ works, articles }: WorksProps) => {
  const setIsDragCursor = isDragCursorStore(
    (state) => state.setIsDragCursor,
  );
  const setIsWorkCursor = isWorkCursorStore(
    (state) => state.setIsWorkCursor,
  );
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  let selector: gsap.utils.SelectorFunc =
    gsap.utils.selector(ref);
    
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

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
