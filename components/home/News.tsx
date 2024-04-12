import { cn } from "@/lib/utils";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import ArticleCard from "../ArticleCard";
import { Article } from "@/types/types";

interface NewsProps {
  articles: Article[] | null;
}

const News = ({ articles }: NewsProps) => {
  return (
    <section
      className={cn(
        "py-4 border-t space-y-24",
        "xl:space-y-36",
      )}
    >
      <div className="flex items-center gap-2">
        <h3
          className={cn(
            "uppercase font-semibold text-base",
            "lg:text-4xl",
            "xl:text-2xl",
          )}
        >
          News
        </h3>
        <GoArrowDownRight
          className={cn("text-lg", "xl:text-2xl")}
        />
      </div>
      <div
        className={cn(
          "text-2xl",
          "xl:text-5xl xl:leading-[60px]",
        )}
      >
        <p className={cn("xl:indent-52")}>
          Apart from projects, I write web content{" "}
          <span className="opacity-50">
            on development & psychology
          </span>{" "}
          for the Medium platform.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full drag"
      >
        <CarouselContent>
          {articles?.map((article, index) => (
            <CarouselItem
              className="md:basis-1/2 xl:basis-1/3 drag"
              key={index}
            >
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArticleCard
                  date={article.date}
                  title={article.title}
                  readingTime={article.ReadingTime}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default News;
