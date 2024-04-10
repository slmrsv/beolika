"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from '@/lib/utils';
import { Work, Art, Article } from '@/types/types';
import Header from "../home/Header";
import About from "../home/About";
import Works from "../home/Works";
import News from "../home/News";
import Footer from "../Footer";
import useMouseFollower from '@/animations/useMouseFollower';

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({works, articles}: WorksProps) => {
  useMouseFollower();
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

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