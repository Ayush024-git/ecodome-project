import {
  BoltIcon,
  CodeIcon,
  GridIcon,
  ScaleIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/data/site";

const iconMap = {
  shield: ShieldIcon,
  spark: SparkIcon,
  code: CodeIcon,
  bolt: BoltIcon,
  scale: ScaleIcon,
  grid: GridIcon,
};

export function WhySlateSection() {
  return (
    <section id="features" className="relative scroll-mt-28 py-10 sm:py-14">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Slate"
            title="A product system designed to feel calm, modern, and deeply capable."
            description="Everything from the APIs to the operating surfaces is intentionally composed for teams that want reliability without visual or technical clutter."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Reveal key={feature.title} delay={index * 0.05}>
                <article className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-panel">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slateBlue-300/80 to-transparent" />
                  <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slateBlue-700 transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
