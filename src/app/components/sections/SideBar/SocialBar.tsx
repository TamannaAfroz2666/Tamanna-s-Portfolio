'use client'
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
export default function SocialBar() {

    return (
        < div className = "relative" >
            {/* strip background like screenshot */ }
            < div className = "absolute inset-0  bg-black-600 " />
                <div className="relative flex items-center  px-6">
                    {socials.map((s) => (
                        <SocialIcon key={s.name} aria={s.name} href={s.href}>
                            {s.icon}
                        </SocialIcon>
                    ))}

                </div>
            </div >
  );
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