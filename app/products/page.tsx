import { getProducts } from "@/data/products";
import Loading from "./loading";
import { Suspense } from "react";
import Products from "@/components/client/Products";

export default async function ProductsPage () {
  const products = await getProducts();
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Products products={products} />
      </Suspense>
    </main>
  );
}
