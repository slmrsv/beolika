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
        pictures: true,
        category: true,
        company: true,
        construction: true,
        content: true,
        date: true,
        role: true,
        slug: true,
        title: true
      }
    });
    
    return work;
  } catch {
    return null;
  }
};