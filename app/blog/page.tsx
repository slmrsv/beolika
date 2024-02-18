import { getArticles } from "@/data/articles";
import { Suspense } from "react";
import Loading from "./loading";
import Blog from "@/components/client/Blog";


export default async function BlogPage () {
  const articles = await getArticles();

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Blog articles={articles} />
      </Suspense>
    </main>
  );
}
