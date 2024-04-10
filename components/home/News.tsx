import { cn } from '@/lib/utils';
import React from 'react';
import { GoArrowDownRight } from "react-icons/go";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from 'next/link';
import ArticleCard from '../ArticleCard';
import { Article } from '@/types/types';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { isDragCursorStore } from "@/stores";

interface NewsProps {
    articles: Article[] | null;
}

const News = ({articles}: NewsProps) => {
  const setIsDragCursor = isDragCursorStore(state => state.setIsDragCursor);
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    // eslint-disable-next-line no-undef
    const dragMouse = document.querySelectorAll(".drag") as NodeListOf<HTMLElement>;

    const handleMouseMove = (event: MouseEvent) => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
        duration: 0.3,
        ease: 'expo.out',
      });
    };

    const handleFrameMouseMove = () => {
      gsap.to(circle, {
        scale: 13,
      });

      setIsDragCursor(true);
    };

    const handleFrameMouseLeave = () => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        scale: 1,
      });

      setIsDragCursor(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    dragMouse.forEach((drag) => {
      drag.addEventListener('mousemove', handleFrameMouseMove);
      drag.addEventListener('mouseleave', handleFrameMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      dragMouse.forEach((drag) => {
        drag.removeEventListener('mousemove', handleFrameMouseMove);
        drag.removeEventListener('mouseleave', handleFrameMouseLeave);
      });
    };
  }, []);
  
  return (
    <section className={cn("py-4 border-t space-y-24", "xl:space-y-36")}>
      <div className="flex items-center gap-2">
        <h3 className={cn('uppercase font-semibold text-base', "lg:text-4xl", "xl:text-2xl")}>News</h3>
        <GoArrowDownRight className={cn("text-lg", "xl:text-2xl")} />
      </div>
      <div className={cn("text-2xl", "xl:text-5xl xl:leading-[60px]")}>
        <p className={cn("xl:indent-52")}>Apart from projects, I write web content <span className="opacity-50">on development & psychology</span> for the Medium platform.</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full drag"
      >
        <CarouselContent>
          {articles?.map((article, index) => (
            <CarouselItem className="md:basis-1/2 xl:basis-1/3 drag" key={index}>
              <Link href={article.link} target="_blank" rel="noopener noreferrer">
                <ArticleCard date={article.date} title={article.title} readingTime={article.ReadingTime} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default News;