"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/sections/Header";

const Why = dynamic(() => import("@/sections/Why"));
const How = dynamic(() => import("@/sections/How"));
const Faq = dynamic(() => import("@/sections/Faq"));
const Waitlist = dynamic(() => import("@/sections/Waitlist"));
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });

export default function HomePage() {
  const [modalState, setModalState] = useState({ isOpen: false });

  return (
    <>
      <main className="relative h-full w-full overflow-hidden">
        <Header setModalState={setModalState} />
        <Why />
        <How />
        <Faq />
        <Waitlist />
      </main>
      <Modal modalState={modalState} setModalState={setModalState} />
    </>
  );
}
