import { db } from "@/lib/db";
import { Work, Case } from "@/types/types";

export const getWorks = async () => {
  try {
    const products: Work[] = await db.work.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        title: true,
        category: true,
        date: true,
        slug: true
      }
    });
  
    return products;
  } catch {
    return null;
  }
};

export const getWorkBySlug = async (slug: string) => {
  try {
    const work: Case = await db.work.findFirst({ 
      where: { 
        slug: slug 
      }, 
      select: {
        title: true,
        category: true,
        date: true,
        company: true,
        role: true,
        construction: true,
        content: true,
        slug: true,
        siteUrl: true,
        pictures: true
      }
    });
    
    return work;
  } catch {
    return null;
  }
};