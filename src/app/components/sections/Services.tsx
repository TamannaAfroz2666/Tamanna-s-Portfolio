"use client";

import { Card } from "../ui/Card";
import { services } from "../data/portfolioData";

export default function Services() {
  return (
    <section id="services">
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((srv) => {
          const Icon = srv.icon; // ✅ LucideIcon component

          return (
            <Card key={srv.title} className="p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-yellow-400">
                  <Icon className="h-5 w-5" /> {/* ✅ correct */}
                </div>
                <p className="font-semibold">{srv.title}</p>
              </div>

              <p className="mt-3 text-sm text-zinc-300">{srv.desc}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
