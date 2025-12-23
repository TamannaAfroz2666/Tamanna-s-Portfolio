
"use client";
import { Check, Download, Linkedin, Dribbble, Github, Twitter } from "lucide-react";

export default function SideBarBottom() {
    const items = [
        "Redux,Context API,Tailwind",
        "Antd, Material UI",
        "Unit test knowledge,Postman",
        "GIT knowledge",
    ];
    return (
        <div>
            <ul className="space-y-2.5 px-6 py-4 text-sm">
                {items.map((t: any) => (
                    <li key={t} className="flex items-center gap-3 text-white/55">
                        <span className="grid h-5 w-5 place-items-center rounded-full">
                            <Check className="h-4 w-4 text-yellow-500" />
                        </span>
                        <span>{t}</span>
                    </li>
                ))}
            </ul>

            <div className="border-t border-white/10" />
            <a
                href="/resume.pdf"
                download="Tamanna_Afroz_CV.pdf"
                className="group flex w-full items-center gap-1 px-6 py-4 text-xs font-semibold tracking-[0.18em] text-white/55 hover:text-white"
            >
                <span>DOWNLOAD CV</span>
                <Download className="h-4 w-4 text-white/45 transition group-hover:text-yellow-400" />
            </a>

          
        </div>
    )
}

