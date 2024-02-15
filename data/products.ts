import { db } from "@/lib/db";
import { Product } from "@/types/types";

export const getProducts = async () => {
  try {
    const products : Product[] = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  
    return products;
  } catch {
    return null;
  }
};