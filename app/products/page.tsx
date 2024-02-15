import Copyright from "@/components/Copyright";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/products";
import { cn } from "@/lib/utils";

export default async function ProductsPage () {
  const products = await getProducts();
  return (
    <div className={cn('my-44 space-y-28 text-xl w-full', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio text-4xl uppercase text-center', 'sm:text-5xl', "md:text-5xl", "xl:text-left xl:text-7xl")}>Products</h3>
      <div className={cn("space-y-8", "md:grid md:grid-cols-2 md:space-y-0 md:gap-6", "xl:grid-cols-3 xl:gap-6 xl:space-y-0")}>
        {products?.map((product, index) => (
          <ProductCard 
            key={index} 
            picture={product.image} 
            alt={product.alt} 
            name={product.name} 
            category={product.category}  
            price={product.price}  
            liveUrl={product.liveUrl} 
            detailUrl={product.detailUrl} />
        ))}
      </div>
      <Copyright />
    </div>
  );
}
