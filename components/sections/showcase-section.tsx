import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function ControlPlaneCard() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#09111d] p-6 text-white shadow-halo sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(148,163,220,0.14),_transparent_34%)]" />
      <div className="relative">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Command Center</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              One surface for safety, orchestration, and growth.
            </h3>
          </div>
          <div className="self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 sm:self-auto">
            Global health 99.98%
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">Regional throughput</p>
                <p className="font-mono text-xs text-slate-500">req/s</p>
              </div>
              <div className="mt-5 flex h-40 items-end gap-3">
                {["58", "72", "61", "89", "104", "96", "112"].map((value, index) => (
                  <div key={value} className="flex flex-1 flex-col items-center gap-3">
                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-slateBlue-500/70 to-slateBlue-200"
                      style={{ height: `${28 + index * 12}px` }}
                    />
                    <span className="text-[11px] text-slate-500">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">System posture</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Moderation", value: "Nominal" },
                  { label: "Routing", value: "Balanced" },
                  { label: "Observability", value: "Online" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300">Operational timeline</p>
              <span className="text-xs text-slate-500">UTC +5:30</span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                {
                  title: "Sentinel policy revision deployed",
                  meta: "New retail safeguards went live across all regions.",
                },
                {
                  title: "Sentra handoff model refreshed",
                  meta: "Support escalation confidence improved by 12%.",
                },
                {
                  title: "Analytics threshold adjusted",
                  meta: "False positive review load reduced for operator teams.",
                },
                {
                  title: "SDK release published",
                  meta: "Streaming hooks added for client-side moderation telemetry.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="relative flex w-5 justify-center">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slateBlue-300" />
                    <span className="absolute left-1/2 top-5 h-full w-px -translate-x-1/2 bg-white/10" />
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,220,0.12),_transparent_36%)]" />
      <div className="relative">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Analytics</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-950">
              Behavior, quality, and operator signal.
            </h3>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            Weekly
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            { label: "Conversation quality", value: "92", tint: "bg-slateBlue-500" },
            { label: "Automation success", value: "81", tint: "bg-slate-900" },
            { label: "Escalation precision", value: "94", tint: "bg-slateBlue-300" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div className={`h-2 rounded-full ${item.tint}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowCard() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0c1420] p-6 text-white shadow-halo">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(148,163,220,0.18),_transparent_36%)]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Workflow Visuals</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
          Route every request with composure.
        </h3>
        <div className="mt-6 grid gap-3">
          {[
            "Input normalization",
            "Sentinel analysis",
            "Policy scoring",
            "Sentra action layer",
            "Audit and analytics",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="relative flex w-7 justify-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs text-slate-300">
                  {index + 1}
                </span>
                {index < 4 ? (
                  <span className="absolute top-7 h-6 w-px bg-gradient-to-b from-white/20 to-transparent" />
                ) : null}
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  return (
    <section id="about" className="relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Showcase"
            title="The control plane behind premium AI experiences."
            description="Slate gives product, engineering, and operations teams a single visual language for AI reliability, customer interaction, and system intelligence."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ControlPlaneCard />
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.08}>
              <AnalyticsCard />
            </Reveal>
            <Reveal delay={0.14}>
              <WorkflowCard />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
