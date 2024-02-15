import { db } from "@/lib/db";
import { Product } from "@/lib/types";

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