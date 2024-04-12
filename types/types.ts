export type Art = {
  image: string;
  alt: string;
  title: string;
  createdAt: Date;
};

export type Article = {
  date: string;
  title: string;
  ReadingTime: string;
  link: string;
  categoryId: number;
  category: ItemCategory;
  createdAt: Date;
};

export type Product = {
  image: string;
  alt: string;
  name: string;
  price: string;
  categoryId: number;
  category: ProductCategory;
  detailUrl: string;
  liveUrl: string;
  createdAt: Date;
};

export type Work = {
  title: string;
  category: string;
  date: string;
  slug: string;
  pictures: Picture[];
};

export type Case = {
  title: string;
  category: string;
  date: string;
  company: string | null;
  role: string | null;
  construction: string | null;
  content: string | null;
  slug: string;
  siteUrl: string | null;
  pictures: Picture[];
} | null;

export type Picture = {
  image: string;
  alt: string;
};

export type ItemCategory = {
  id: number;
  category: string;
  createdAt: Date;
};

export type ProductCategory = {
  id: number;
  category: string;
  createdAt: Date;
};
