"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/types";
import React, { useState } from "react";

interface BlogProps {
  articles: Article[] | null;
}

const Blog = ({ articles }: BlogProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles?.filter((article) =>
        article.category.category.includes(
          selectedCategory,
        ),
      );

  return (
    <div
      className={cn(
        "my-44 space-y-28 text-xl w-full",
        "md:text-left md:text-2xl",
        "xl:text-4xl",
      )}
    >
      <div
        className={cn(
          "lg:flex lg:flex-row lg:justify-between lg:gap-32 lg:items-center",
        )}
      >
        <h3
          className={cn(
            "font-audio font-bold text-5xl text-center",
            "sm:text-6xl",
            "md:text-left",
            "lg:text-5xl",
            "xl:text-[150px]",
          )}
        >
          Articles
        </h3>
        <div className={cn("hidden", "lg:block")}>
          <Select
            value={selectedCategory}
            onValueChange={(e) => setSelectedCategory(e)}
          >
            <SelectTrigger
              className={cn("w-full", "lg:w-72")}
            >
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Development">
                Development
              </SelectItem>
              <SelectItem value="Psychology">
                Psychology
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className={cn(
          "space-y-8",
          "md:grid md:grid-cols-2 md:space-y-0 md:gap-6",
          "xl:grid xl:grid-cols-3",
        )}
      >
        <div className={cn("lg:hidden")}>
          <Select
            value={selectedCategory}
            onValueChange={(e) => setSelectedCategory(e)}
          >
            <SelectTrigger
              className={cn("w-full", "lg:w-72")}
            >
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Development">
                Development
              </SelectItem>
              <SelectItem value="Psychology">
                Psychology
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {filteredArticles?.map((article, index) => (
          <div key={index}>
            <ArticleCard
              date={article.date}
              title={article.title}
              readingTime={article.ReadingTime}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
