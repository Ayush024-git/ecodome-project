import { CTASection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductsSection } from "@/components/sections/products-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhySlateSection } from "@/components/sections/why-slate-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { MouseHalo } from "@/components/ui/mouse-halo";

export default function HomePage() {
  return (
    <>
      <MouseHalo />
      <div className="relative isolate">
        <SiteNav />

        <main className="relative z-10">
          <div className="relative overflow-hidden">
            <HeroSection />
            <StatsSection />
          </div>

          <div className="relative overflow-hidden text-slate-950">
            <ProductsSection />
            <WhySlateSection />
            <ShowcaseSection />
          </div>

          <div className="relative overflow-hidden">
            <TestimonialsSection />
            <CTASection />
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
