import { Suspense } from "react";
import Loading from "./loading";
import Home from "@/components/client/Home";
import { getWorks } from "@/data/work";
import { getArts } from "@/data/art";
import { getArticles } from "@/data/articles";

export default async function HomePage() {
  const works = await getWorks();
  const arts = await getArts();
  const articles = await getArticles();

  return (
    <Suspense fallback={<Loading />}>
      <Home works={works} arts={arts} articles={articles} />
    </Suspense>
  );
}
