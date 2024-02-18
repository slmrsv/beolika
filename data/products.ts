import { db } from "@/lib/db";
import { Product } from "@/types/types";

export const getProducts = async () => {
  try {
    const products : Product[] = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        image: true,
        alt: true,
        name: true,
        price: true,
        categoryId: true,
        category: true,
        detailUrl: true,
        liveUrl: true,
        createdAt: true,
      }
    });
  
    return products;
  } catch {
    return null;
  }
};