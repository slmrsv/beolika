"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from '@/lib/utils';
import { Work, Art, Article } from '@/types/types';
import useTextOpacityOnScroll from "@/animations/useTextOpacityOnScroll";
import useMarqueeTextScroll from "@/animations/useMarqueeTextScroll";
import Header from "../home/Header";
import About from "../home/About";
import Works from "../home/Works";
import News from "../home/News";
import Footer from "../Footer";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({works, articles}: WorksProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useTextOpacityOnScroll(".textScroll", ".textOpacity");
  useMarqueeTextScroll();

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setWidth(ref.current.clientWidth);
      }
    };
  
    handleResize(); 
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div ref={ref} className={cn("font-montserrat space-y-20", "md:space-y-44")}>
      <Header width={width} />
      <About />
      <Works works={works} />
      <News articles={articles} />
      <Footer />
    </div>
  );  
};

export default Home;