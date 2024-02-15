import { db } from "@/lib/db";

export const getProducts = async () => {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  
    return products;
  } catch {
    return null;
  }
};