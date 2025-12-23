'use client'
import { Card } from "../ui/Card";
import { projects } from "../data/portfolioData";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="my-6">
      <div className="mb-3 flex items-center justify-between ">
        <h2 className="text-lg font-semibold mt-4">Featured Projects</h2>

      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p: any) => (
          <Card
            key={p.title}
            className="relative overflow-hidden p-5"
          >
            <div className="absolute inset-0">
              <Image

                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/90 " />
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="w-full">
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="mt-2 text-sm text-zinc-300 lg:w-[200px] text-pretty xl:w-[300px]">{p.desc}</p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-300 lg:right-20 relative xl:right-0 relative">
                  {p.tags[0]}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                {p.tags.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                  >
                    Live
                  </a>
                )}
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                  >
                    Code
                  </a>
                )}
              </div>

            </div>

          </Card>
        ))}
      </div>
    </section>
  );
}
