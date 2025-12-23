'use client'
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { hero, profile } from "../data/portfolioData";

export default function MobileTopbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10">

                        <Image src="/profilePic.png"
                            alt="Avatar"
                            fill className="object-cover"

                            sizes="36px" />

                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-semibold">{profile.name} </p>
                        <p className="text-xs text-zinc-400">{profile.role}</p>
                    </div>
                </div>

                <details className="group relative">
                    <summary className="list-none rounded-xl border border-white/10 bg-white/5 p-2">
                        <Menu className="h-5 w-5" />
                    </summary>

                    <div className="absolute right-0 mt-3 w-[88vw] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur">
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                            <p className="text-sm font-semibold">Menu</p>
                            <span className="rounded-lg border border-white/10 bg-white/5 p-1.5">
                                <X className="h-4 w-4 opacity-70" />
                            </span>
                        </div>

                        <nav className="p-4 space-y-3">
                            {[
                                ["Home", "#home"],
                                ["Services", "#services"],
                                ["Projects", "#projects"],
                                ["Contact", "#contact"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                                    href={href}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </details>
            </div>
        </header>
    );
}
