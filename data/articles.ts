import { db } from "@/lib/db";
import { Article } from "@/types/types";

export const getArticles = async () => {
  try {
    const articles: Article[] = await db.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  
    return articles;
  } catch {
    return null;
  }
};