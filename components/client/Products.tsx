"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/types";
import { cn } from "@/lib/utils";
import Copyright from "@/components/Copyright";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

interface ProductsProps {
  products: Product[] | null
}

const Products = ({products}: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products?.filter(product => product.category.category.includes(selectedCategory));

  return (
    <div className={cn('my-44 space-y-28 text-xl w-full', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <div className={cn("lg:flex lg:flex-row lg:justify-between lg:gap-32 lg:items-center")}>
        <h3 className={cn('font-audio text-4xl uppercase text-center', 'sm:text-5xl', "md:text-5xl", "xl:text-left xl:text-7xl")}>Products</h3>
        <div className={cn("hidden", "lg:block")}>
          <Select value={selectedCategory} onValueChange={(e) => setSelectedCategory(e)}>
            <SelectTrigger className={cn("w-full", "lg:w-72")}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem onClick={e => e.stopPropagation()} value="All">All</SelectItem>
              <SelectItem onClick={e => e.stopPropagation()} value="Shopify">Shopify</SelectItem>
              <SelectItem onClick={e => e.stopPropagation()} value="NextJs">NextJs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className={cn("space-y-8", "md:grid md:grid-cols-2 md:space-y-0 md:gap-6", "xl:grid-cols-3 xl:gap-6 xl:space-y-0")}>
        <div className={cn("lg:hidden")}>
          <Select value={selectedCategory} onValueChange={(e) => setSelectedCategory(e)}>
            <SelectTrigger className={cn("w-full", "lg:w-72")}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem onClick={e => e.stopPropagation()} value="All">All</SelectItem>
              <SelectItem onClick={e => e.stopPropagation()} value="Shopify">Shopify</SelectItem>
              <SelectItem onClick={e => e.stopPropagation()} value="NextJs">NextJs</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {filteredProducts?.map((product, index) => (
          <ProductCard 
            key={index} 
            picture={product.image} 
            alt={product.alt} 
            name={product.name} 
            category={product.category.category}  
            price={product.price}  
            liveUrl={product.liveUrl} 
            detailUrl={product.detailUrl} />
        ))}
      </div>
      <Copyright />
    </div>

  );
};

export default Products;