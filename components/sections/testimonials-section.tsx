import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(148,163,220,0.18),_transparent_42%)]" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by teams building the next generation of AI products."
            description="Founders, engineers, and operators choose Slate when reliability needs to look and feel as thoughtful as the product itself."
            tone="light"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <blockquote
                className={`surface-dark fine-gradient h-full rounded-[30px] p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7 ${
                  index === 1 ? "lg:-translate-y-4" : ""
                }`}
              >
                <p className="text-base leading-8 text-slate-200 sm:text-lg">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
