import { stats } from "@/data/site";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function StatsSection() {
  return (
    <section className="relative pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="surface-dark relative overflow-hidden rounded-[34px] p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(148,163,220,0.14),_transparent_34%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div className="max-w-md">
                <span className="eyebrow-chip border-white/10 bg-white/[0.06] text-slate-300">
                  Trusted outcomes
                </span>
                <h2 className="section-title mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Infrastructure that feels steady under pressure.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Slate is built for teams shipping AI into real products where uptime, speed, and
                  policy confidence matter.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <Reveal key={stat.label} delay={0.08 + index * 0.05}>
                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                      <p className="mt-3 text-sm font-medium text-slate-200">{stat.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{stat.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
