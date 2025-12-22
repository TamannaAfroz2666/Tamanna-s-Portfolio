import {Card} from "../ui/Card";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Featured Projects</h2>
        <span className="text-xs text-zinc-400">Add yours here</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p: any) => (
          <Card key={p.title} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                {p.tags[0]}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
              {p.tags.map((t: any) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  Live
                </a>
              )}
              {p.codeUrl && (
                <a
                  href={p.codeUrl}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  Code
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
