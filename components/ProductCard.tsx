import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FaUnlockAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    name: string;
    price: string;
    category: string;
    detailUrl: string;
    liveUrl: string;
    picture: string;
    alt: string;
}
const ProductCard = ({
  name,
  price,
  category,
  detailUrl,
  liveUrl,
  picture,
  alt
}: ProductCardProps) => {
  return (
    <Card className="rounded-3xl text-primary">
      <CardHeader>
        <Image src={picture} alt={alt} width={1080} height={1080} className={cn("w-full bg-gray-300 rounded-3xl h-auto")} />
      </CardHeader>
      <CardContent className={cn("space-y-2", "md:pt-2")}>
        <div className={cn("flex justify-between font-audio text-lg", "sm:text-2xl")}>
          <h6 className={cn("uppercase")}>{name}</h6>
          <p>{price !== "Free" ? `${price} €` : price}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className={cn("font-glacial text-base", "sm:text-xl")}>{category}</p>
          <div className={cn("flex items-center gap-4 sm:text-2xl",
            {
              "hidden": category !== "Shopify"
            }
          )}>
            <p className={cn("text-base", "sm:text-xl")}>beolika</p>
            <FaUnlockAlt className={cn("text-base")} />
          </div>
        </div>
      </CardContent>
      <CardFooter className={cn("flex flex-col space-y-2 mt-6", "sm:space-y-4", "md:flex-row md:items-center md:space-y-0 md:gap-4")}>
        <Button variant="outline" className={cn('font-audio rounded-full w-full', 'sm:text-xl sm:py-6')} asChild>
          <Link href={liveUrl} className={cn('xl:text-lg')} target="_blank" rel="noopener noreferrer">View Live</Link>
        </Button>
        <Button variant="outline" className={cn('font-audio rounded-full w-full', 'sm:text-xl sm:py-6')} asChild>
          <Link href={detailUrl} className={cn('xl:text-lg')} target="_blank" rel="noopener noreferrer">Buy Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;