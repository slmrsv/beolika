"use client";
import ArtMode from "@/components/ArtMode";
import Copyright from "@/components/Copyright";
import ProfilMode from "@/components/ProfilMode";
import { modeStore } from "@/stores";
import { Suspense } from "react";
import Loading from "./loading"; 

export default function Home() {
  const artMode = modeStore((state) => state.isArtMode);

  return (
    <Suspense fallback={<Loading />}>
      {artMode ? <ArtMode /> : <ProfilMode />}
      <Copyright />
    </Suspense>
  );
}
