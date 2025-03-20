"use client";
import { Toaster } from "sonner";
import Background from "./components/Background";
import StickyHeader from "./components/StickyHeader";
import Torus from "./components/Torus/App";
import Socials from "./components/Socials";
import { CustomLoader } from "./components/CustomLoader";

export default function Home() {
  return (
    <>
      <Background />
      <StickyHeader />
      <Torus />
      <Toaster position="bottom-left" richColors />
      <Socials />
      {/* weird issues with loader it doesn't hide automatically */}
      <CustomLoader />
    </>
  );
}
