import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CTASection() {
  return (
    <section id="cta" className="relative scroll-mt-28 pb-24 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0a121d] p-8 shadow-halo sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,220,0.18),_transparent_36%)]" />
            <div className="absolute inset-0 noise-overlay opacity-30" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow-chip border-white/[0.12] bg-white/[0.06] text-slate-300">
                  Start building
                </span>
                <h2 className="section-title mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Build Smarter AI Products with Slate.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Launch moderation, conversation, and AI operations on infrastructure that feels
                  refined from the first request to the last escalation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="mailto:slate.so.ai@gmail.com?subject=Start%20Building%20with%20Slate">
                  Start Building
                </ButtonLink>
                <ButtonLink
                  href="mailto:slate.so.ai@gmail.com?subject=Contact%20Sales%20for%20Slate"
                  variant="secondary"
                >
                  Contact Sales
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
