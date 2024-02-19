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
      className={cn("group min-h-80 flex flex-col rounded-3xl h-full text-primary hover:bg-primary hover:text-background font-audio p-2 space-y-4", "md:space-y-8", "lg:space-y-10 lg:min-h-96", "xl:space-y-14 xl:min-h-[400px]")}>
      <CardHeader className={cn("text-xs", "lg:text-base")}>
        {date}
      </CardHeader>
      <CardContent className={cn("text-xl flex-grow", "lg:w-[350px]", "xl:text-2xl xl:w-[400px]", "2xl:w-[450px]")}>
        <h6>{title}</h6>
      </CardContent>
      <CardFooter className={cn("font-glacial text-sm flex items-center justify-between text-subtitle", "lg:text-lg")}>
        {readingTime}
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <IoIosArrowDropright className={cn('text-2xl text-primary group-hover:text-background', 'text-4xl')} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;