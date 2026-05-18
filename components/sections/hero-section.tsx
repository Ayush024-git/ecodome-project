"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.68]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative mx-auto w-full max-w-[560px]">
      <motion.div
        className="absolute -left-12 -top-14 h-56 w-56 rounded-full bg-slateBlue-300/20 blur-3xl"
        animate={{ opacity: [0.28, 0.42, 0.28], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-10 bottom-6 h-48 w-48 rounded-full bg-white/10 blur-3xl"
        animate={{ opacity: [0.18, 0.28, 0.18], scale: [1.02, 1, 1.02] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="surface-dark fine-gradient relative overflow-hidden rounded-[34px] p-5 sm:p-7">
        <div className="noise-overlay absolute inset-0 opacity-30" />
        <div className="relative flex flex-col items-start gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Slate Control Plane</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Live AI Operations</h3>
          </div>
          <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            All systems healthy
          </div>
        </div>

        <div className="relative mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Protected Requests", value: "48.2M" },
              { label: "Median Latency", value: "74ms" },
              { label: "Interventions", value: "0.21%" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/45 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-200">Risk Streams</p>
                <p className="ml-3 text-right font-mono text-xs text-slate-500">sentinel.inspect()</p>
              </div>
            <div className="mt-4 space-y-3">
              {[
                { label: "Toxicity", value: "0.02", width: "w-[18%]", tone: "bg-emerald-300" },
                { label: "NSFW", value: "0.00", width: "w-[8%]", tone: "bg-sky-300" },
                { label: "Jailbreak", value: "0.93", width: "w-[88%]", tone: "bg-amber-300" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-slate-500">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06]">
                    <div className={`h-2 rounded-full ${item.width} ${item.tone}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-200">Live Policies</p>
                <span className="text-xs text-slate-500">6 rulesets</span>
              </div>
              <div className="mt-4 space-y-3">
                {["Unsafe Content", "Brand Compliance", "Escalation Routing"].map((policy) => (
                  <div
                    key={policy}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm"
                  >
                    <span className="text-slate-200">{policy}</span>
                    <span className="rounded-full bg-white/[0.08] px-2 py-1 text-xs text-slate-400">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-200">Recent Events</p>
                <span className="text-xs text-slate-500">last 5m</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { event: "Blocked jailbreak attempt", meta: "Policy 03 • 220ms ago" },
                  { event: "Sentra escalated billing thread", meta: "Operator sync • 1m ago" },
                  { event: "Release gate approved", meta: "Safe rollout • 3m ago" },
                ].map((item) => (
                  <div key={item.event} className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                    <p className="text-sm text-slate-200">{item.event}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-12 hidden w-52 rounded-[26px] border border-white/[0.12] bg-slate-950/70 p-4 shadow-halo backdrop-blur-xl md:block"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Sentinel</p>
        <p className="mt-2 text-sm font-medium text-white">Moderation pipeline synced</p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-3 font-mono text-xs text-slate-300">
          <p>policy.violation</p>
          <p className="mt-2 text-slate-500">route: review_queue</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-5 bottom-10 hidden w-56 rounded-[26px] border border-white/[0.12] bg-white/10 p-4 shadow-halo backdrop-blur-xl md:block"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Sentra</p>
        <p className="mt-2 text-sm font-medium text-white">Support handoff resolved</p>
        <div className="mt-4 space-y-2">
          <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-slateBlue-200/[0.18] px-3 py-2 text-sm text-slate-100">
            I can reset your workspace access now.
          </div>
          <div className="max-w-[76%] rounded-2xl rounded-bl-md bg-white/10 px-3 py-2 text-sm text-slate-300">
            Perfect. Please sync it with billing too.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-28 overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_top,_rgba(132,152,219,0.22),_transparent_32%)]" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-[0.04]" />

      <Container className="relative pb-20 sm:pb-24 lg:pb-28">
        <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
          <div className="max-w-[620px]">
            <Reveal>
              <span className="eyebrow-chip border-white/[0.12] bg-white/[0.06] text-slate-300">
                Calm infrastructure for ambitious AI products
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="section-title mt-6 text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[4.5rem] lg:text-[5.5rem]">
                AI Infrastructure,
                <span className="block text-slate-300">Refined.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Powerful AI systems designed for modern businesses, products, and developers.
                Slate brings safety, conversation, and operational clarity into one premium layer.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#cta">Get Started</ButtonLink>
                <ButtonLink
                  href="mailto:slate.so.ai@gmail.com?subject=Book%20a%20Demo%20with%20Slate"
                  variant="secondary"
                >
                  Book Demo
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Products", value: "Sentinel + Sentra" },
                  { label: "Built for", value: "Apps, agents, platforms" },
                  { label: "Positioning", value: "Premium, reliable, modern" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-medium text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:justify-self-end">
            <HeroScene />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
