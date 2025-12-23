"use client";

import { Menu } from "lucide-react";

type Props = {
  onOpen?: () => void; // later drawer open করতে চাইলে use করবে
  activeLabel?: string; // default "HOME"
};

export default function HomeMenuBar({ onOpen, activeLabel = "HOME" }: Props) {
  return (
   <div className="fixed top-10 z-50 right-[max(1rem,calc((95vw-80rem)/2+1rem))] flex h-[calc(100vh-2.5rem)] w-[84px] flex-col items-center justify-between border-l border-t rounded-2xl border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md">
      {/* top */}
      <div className="w-full">
        <button
          type="button"
          onClick={onOpen}
          className="mx-auto mt-5 grid h-12 w-12 place-items-center rounded-2xl text-white/70 transition hover:bg-white/5 hover:text-white"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* vertical label */}
        <div className="mt-10 flex justify-center">
          <span className="select-none text-[11px] tracking-[0.35em] text-white/40 [writing-mode:vertical-rl] [text-orientation:mixed]">
            {activeLabel}
          </span>
        </div>
      </div>

      {/* bottom language pills */}
      <div className="mb-14 flex flex-col items-center gap-2">
        {/* <LangPill active={false} label="BN" /> */}
        <LangPill active={true} label="EN" />
      </div>
    </div>
  );
}

function LangPill({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={[
        "grid h-9 w-9 place-items-center rounded-full text-[11px] font-semibold",
        active
          ? "bg-[#1b7e80] text-black"
          : "border border-white/10 bg-white/5 text-white/60",
      ].join(" ")}
    >
      {label}
    </span>
  );
}
