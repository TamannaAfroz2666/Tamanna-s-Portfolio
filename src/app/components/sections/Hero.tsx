import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Card } from "../ui/Card";
import { hero } from "../data/portfolioData";

export default function Hero() {
  return (
    <Card className="relative overflow-hidden  " id="home">
      <div className="absolute inset-0">
        <Image
          src="/white.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
      </div>

      <div className="relative grid gap-8 p-6 md:grid-cols-[1.2fr_.8fr] md:p-10">
        <div className="min-w-0">
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {hero.titleA}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            {hero.subtitle}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:w-[300px]">
            <a
              href='https://github.com/TamannaAfroz2666'
              className="inline-flex items-center justify-center rounded-xl bg-[#1b5051] text-zinc-300 px-6 py-3 text-sm font-semibold hover:opacity-90  "
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

        <div className="relative">
          <div
            className="
          relative mx-auto
          h-[280px] w-[240px]
          sm:h-[320px] sm:w-[280px]
          lg:absolute lg:-right-4 lg:-top-4 lg:h-[200px] lg:w-[180px]   
           xl:-right-8 xl:-top-6 xl:h-[380px] xl:w-[320px]          
             overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl
        "
          >
            <Image
              src={hero.personImage}
              alt="Hero"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 320px, 280px"
            />
          </div>
        </div>
      </div>
    </Card>

  );
}
