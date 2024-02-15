export type Art = { 
    id: number; 
    image: string; 
    alt: string; 
    title: string; 
    createdAt: Date; 
}

export type Article = {
    id: number;
    date: string;
    title: string;
    ReadingTime: string;
    link: string;
    createdAt: Date;
}

export type Product = {
    id: number;
    image: string;
    alt: string;
    name: string;
    price: string;
    category: string;
    detailUrl: string;
    liveUrl: string;
    createdAt: Date;
}

export type Work = {
    title: string;
    category: string;
    date: string;
    slug: string;
}

export type Case = {
    title: string;
    category: string;
    date: string;
    company: string | null;
    role: string | null;
    construction: string | null;
    content: string | null;
    slug: string;
    pictures: {
        id: number;
        workId: number;
        image: string;
        alt: string;
        createdAt: Date;
    }[];
} | null;

export type Picture = {
    id: number;
    workId: number;
    image: string;
    alt: string;
    createdAt: Date;
}