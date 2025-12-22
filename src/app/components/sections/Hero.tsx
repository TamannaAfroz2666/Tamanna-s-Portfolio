import Image from "next/image";
import { Sparkles } from "lucide-react";
import {Card} from "../ui/Card";
import { hero } from "../data/portfolioData";

export default function Hero() {
  return (
    <Card className="relative overflow-hidden" id="home" >
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
      </div>

      <div className="relative grid gap-8 p-6 md:grid-cols-[1.2fr_.8fr] md:p-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            {hero.badge}
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {hero.titleA} <span className="text-yellow-400">{hero.titleB}</span>{" "}
            {hero.titleC}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-yellow-300">
              {"<code>"}
            </span>{" "}
            {hero.subtitle}{" "}
            <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-yellow-300">
              {"</code>"}
            </span>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.ctas.primary.href}
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              {hero.ctas.secondary.label}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-300">
            {hero.tags.map((t: any) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -right-10 -top-6 h-[380px] w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src={hero.personImage}
              alt="Hero"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
