"use client";
import ArtMode from "@/components/ArtMode";
import ProfilMode from "@/components/ProfilMode";
import { modeStore } from "@/store/modeStore";

export default function Home() {
  const artMode = modeStore((state) => state.artMode);
  return (
    <>
      {artMode ? <ArtMode /> : <ProfilMode />}
    </>
  );
}
