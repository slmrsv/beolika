import { db } from "@/lib/db";

export const getArticles = async () => {
  try {
    const articles = await db.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  
    return articles;
  } catch {
    return null;
  }
};