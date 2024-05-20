"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Work, Art, Article } from "@/types/types";
import Header from "../home/Header";
import Works from "../home/Works";
import News from "../home/News";
import Footer from "../Footer";
import useHomeAnimation from "@/animations/useHomeAnimation";
import About from "../home/About";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({ works, articles }: WorksProps) => {
  
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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
  
  useHomeAnimation(ref);

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
