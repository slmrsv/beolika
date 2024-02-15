"use client";
import ArtMode from "@/components/ArtMode";
import Copyright from "@/components/Copyright";
import ProfilMode from "@/components/ProfilMode";
import { modeStore } from "@/stores";

export default function Home() {
  const artMode = modeStore((state) => state.isArtMode);

  return (
    <>
      {artMode ? <ArtMode /> : <ProfilMode />}
      <Copyright />
    </>
  );
}
