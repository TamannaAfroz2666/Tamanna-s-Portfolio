
"use client";
import { Check, Download, Linkedin, Dribbble, Github, Twitter } from "lucide-react";
const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tamanna-afroz-19488a222/",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/TamannaAfroz2666",
    icon: <Github className="h-4 w-4" />,
  },
];
export default function SideBarBottomPhase() {
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
                            <Check className="h-4 w-4 text-yellow-400" />
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

            {/* bottom social strip */}
            <div className="relative">
                {/* strip background like screenshot */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                <div className="relative flex items-center  px-6 py-4">
                    {socials.map((s) => (
                        <SocialIcon key={s.name} aria={s.name} href={s.href}>
                            {s.icon}
                        </SocialIcon>
                    ))}

                </div>
            </div>
        </div>
    )
}

function SocialIcon({
  children,
  href,
  aria,
}: {
  children: React.ReactNode;
  href: string;
  aria: string;
}) {
  return (
  <a
      href={href}
      aria-label={aria}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full text-white/55 transition hover:text-yellow-400"
    >
      {children}
    </a>
  );
}