import { db } from "@/lib/db";

export const getArts = async () => {
  try {
    const arts = await db.art.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return arts;
  } catch {
    return null;
  }
};