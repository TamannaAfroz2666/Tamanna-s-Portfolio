"use client";

import { useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

type NavItem = { label: string; href: string; hasArrow?: boolean };

const NAV: NavItem[] = [
  { label: "HOME", href: "#home" },
  // { label: "HISTORY", href: "#history" },
  // { label: "PROJECTS", href: "#projects", hasArrow: true },
  // { label: "BLOG", href: "#blog", hasArrow: true },
  // { label: "CONTACT", href: "#contact" },
  // { label: "OTHER", href: "#other", hasArrow: true },
];

export default function MenuDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // ESC close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={open ? "fixed inset-0 z-[60]" : "pointer-events-none fixed inset-0 z-[60]"}>
      {/* overlay */}
      <div
        onClick={onClose}
        className={[
          "absolute inset-0 bg-black/55 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* drawer */}
      <aside
        className={[
          "absolute right-0 top-12 h-full w-[350px]  ",
          "border-l border-white/10 bg-gradient-to-b from-[#1a1b22] to-[#0f1016]",
          "shadow-[-40px_0_80px_-40px_rgba(0,0,0,0.85)]",
          "transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* top bar */}
        <div className="relative h-16 border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-xl text-white/60 hover:bg-white/5 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* menu items */}
        <nav className="px-10 pt-10">
          <ul className="space-y-5">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between text-sm font-semibold tracking-[0.22em] text-white/65 hover:text-white"
                >
                  <span>{item.label}</span>
                  {item.hasArrow ? (
                    <ChevronRight className="h-4 w-4 text-white/25 group-hover:text-yellow-400" />
                  ) : (
                    <span className="h-4 w-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* bottom language pills */}
        <div className="absolute bottom-8 left-0 w-full px-10">
          <div className="flex flex-col items-start gap-3">
            {/* <LangPill active={false} label="BN" /> */}
            <LangPill active={true} label="EN" />
          </div>
        </div>
      </aside>
    </div>
  );
}

function LangPill({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={[
        "grid h-9 w-9 place-items-center rounded-full text-[11px] font-semibold",
        active ? "bg-[#1b7e80] text-black" : "border border-white/10 bg-white/5 text-white/60",
      ].join(" ")}
    >
      {label}
    </span>
  );
}
