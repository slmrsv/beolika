import { db } from "@/lib/db";
import { Article } from "@/types/types";

export const getArticles = async () => {
  try {
    const articles: Article[] = await db.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        title: true,
        link: true,
        date: true,
        ReadingTime: true,
        categoryId: true,
        category: true,
        createdAt: true
      }
    });
  
    return articles;
  } catch {
    return null;
  }
};