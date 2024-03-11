import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoIosArrowDropright } from "react-icons/io";

interface ArticleCardProps {
    title: string;
    readingTime: string;
    date: string;
    link: string;
}

const ArticleCard = ({
  title,
  readingTime,
  date,
  link
}: ArticleCardProps) => {

  return (
    <Card
      className={cn("min-h-80 flex flex-col h-full text-primary font-ms p-2 space-y-4", "md:space-y-8", "lg:space-y-10 lg:min-h-96", "xl:space-y-14 xl:min-h-[400px]")}>
      <CardHeader className={cn("text-base font-extralight text-ms", "md:text-lg")}>
        {date}
      </CardHeader>
      <CardContent className={cn("text-lg font-bold uppercase leading-8 flex-grow", "xs:leading-9 xs:text-xl", "sm:text-2xl", "lg:text-2xl lg:w-[350px]", "xl:w-[400px] xl:leading-10", "2xl:w-[450px]")}>
        <h6>{title}</h6>
      </CardContent>
      <CardFooter className={cn("font-ms text-base flex items-center justify-between text-primary/30", "md:text-lg")}>
        {readingTime}
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <IoIosArrowDropright className={cn('text-2xl hover:text-primary', 'text-4xl')} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;