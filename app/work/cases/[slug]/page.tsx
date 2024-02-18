import { getWorkBySlug, getWorks } from "@/data/work";
import { Suspense } from "react";
import Loading from "./loading";
import Cases from "@/components/client/Cases";

export default async function CasesPage ({ params }: { params: { slug: string } }) {
  const cases = await getWorkBySlug(params.slug);
  const works = await getWorks();
  const currentIndex = works?.map(work => work.slug).indexOf(params.slug);

  const previousProjectSlug = works?.[currentIndex! - 1];
  const nextProjectSlug = works?.[currentIndex! + 1];

  return (
    <main>     
      <Suspense fallback={<Loading />}>
        <Cases 
          cases={cases} 
          previousProjectSlug={previousProjectSlug} 
          nextProjectSlug={nextProjectSlug} 
        />
      </Suspense>
    </main>
  );
}