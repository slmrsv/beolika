import { db } from "@/lib/db";
import { Art } from "@/lib/types";

export const getArts = async () => {
  try {
    const arts: Art[] = await db.art.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return arts;
  } catch {
    return null;
  }
};