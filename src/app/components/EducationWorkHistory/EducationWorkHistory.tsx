"use client";

import { ChevronRight } from "lucide-react";
import type { TimelineItem } from "../data/portfolioData";
import { education, work } from "../data/portfolioData";
// education work
export default function EducationWorkHistory() {
  return (
    <section id="education" className="w-full">
      <div className="grid gap-10 lg:grid-cols-2">
        <TimelineColumn title="Education" items={education} />
        <TimelineColumn title="Work History" items={work} />
      </div>
    </section>
  );
}

function TimelineColumn({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div className="relative ">
      <h3 className="mb-6 text-lg font-semibold text-white ">{title}</h3>

      <div className="relative pl-6">
        <span className="absolute left-[10px] top-0 h-full w-px bg-white/10" />

        <div className="space-y-8">
          {items.map((it, idx) => (
            <TimelineCard key={idx} item={it} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="relative">
      <span className="absolute -left-[3px] top-8 h-2 w-2 rounded-full bg-[#ca9b4fda] shadow-[0_0_0_2px_rgba(250,204,21,0.12)]" />

      <div className="relative ml-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)] backdrop-blur-md">
        <span className="absolute right-0 top-10 h-10 w-3 rounded-l-xl bg-white/5 border-l border-t border-b border-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-3 ">
          <div>
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-sm  text-white/45">{item.role}</p>
          </div>

          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] tracking-wide text-white/55">
            {item.date}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/55">{item.desc}</p>

        {item.cta && (
          <a
            href= "#"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-yellow-400 hover:opacity-90"
          >
            {item.cta} <ChevronRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
