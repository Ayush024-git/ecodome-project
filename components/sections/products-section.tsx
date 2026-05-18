import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/site";

function SentinelVisual() {
  return (
    <div className="surface-muted relative overflow-hidden rounded-[28px] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(116,142,245,0.12),_transparent_42%)]" />
      <div className="relative rounded-[24px] border border-slate-200 bg-slate-950 p-4 text-white shadow-halo">
        <div className="flex flex-col items-start gap-2 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium">Moderation Request</p>
          <span className="font-mono text-xs text-slate-500">POST /v1/inspect</span>
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-xs leading-6 text-slate-300">
          <p>{`const verdict = await slate.sentinel.inspect({`}</p>
          <p className="pl-4">{`output,`}</p>
          <p className="pl-4">{`policy: ["toxicity", "jailbreak", "nsfw"],`}</p>
          <p>{`});`}</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { title: "toxicity", score: "0.02" },
            { title: "nsfw", score: "0.00" },
            { title: "jailbreak", score: "0.93" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.title}</p>
              <p className="mt-2 text-lg font-semibold text-white">{item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SentraVisual() {
  return (
    <div className="surface-muted relative overflow-hidden rounded-[28px] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(116,142,245,0.1),_transparent_44%)]" />
      <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft">
          <div className="flex flex-col items-start gap-2 border-b border-slate-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-900">Sentra Conversation</p>
            <span className="text-xs text-slate-500">Customer Support</span>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-slate-700">
              My workspace access disappeared after billing changed.
            </div>
            <div className="ml-auto max-w-[84%] rounded-2xl rounded-br-md bg-slateBlue-500 px-4 py-3 text-white">
              I’ve verified the account and can restore access now. Want me to sync billing at the
              same time?
            </div>
            <div className="max-w-[76%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-slate-700">
              Yes, and notify our admin when it’s done.
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-4 text-white shadow-halo">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Automation Status</p>
            <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">
              Live
            </span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { label: "Resolution rate", value: "82%" },
              { label: "Average response", value: "11s" },
              { label: "Escalation quality", value: "94%" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-slate-300">{item.label}</span>
                <span className="text-sm font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Two focused systems. One clear operating standard."
            description="Slate combines dependable AI infrastructure with premium product surfaces, so teams can ship safer experiences without sacrificing speed or design."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <article className="group section-title relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white/[0.72] p-6 shadow-soft backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slateBlue-300/80 to-transparent" />
                <span className="eyebrow-chip border-slate-200 bg-slate-100 text-slate-600">
                  {product.eyebrow}
                </span>

                <div className="mt-5 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2rem]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-slate-700">{product.title}</p>
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    {product.description}
                  </p>

                  <div className="grid gap-3">
                    {product.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-slateBlue-100 p-1 text-slateBlue-700">
                          <CheckIcon className="h-4 w-4" />
                        </div>
                        <p className="text-sm text-slate-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">{index === 0 ? <SentinelVisual /> : <SentraVisual />}</div>

                <div className="mt-6">
                  <ButtonLink href="#cta" variant="ghost" className="group/button">
                    <span className="inline-flex items-center gap-2">
                      {product.cta}
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </span>
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
