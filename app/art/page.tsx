import { getArts } from "@/data/art";
import { Suspense } from "react";
import Loading from "./loading";
import Arts from "@/components/client/Arts";

export default async function ArtPage () {
  const arts = await getArts();
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Arts arts={arts} />
      </Suspense>
    </main>
  );
}
