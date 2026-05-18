import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { GlobeIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { navLinks, socialLinks } from "@/data/site";

const socialIconMap = {
  mail: MailIcon,
  phone: PhoneIcon,
  globe: GlobeIcon,
};

export function SiteFooter() {
  return (
    <footer id="contact" className="relative z-10 scroll-mt-28 border-t border-white/10 bg-[#08101a]">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-md">
            <BrandLogo className="h-12 sm:h-14" tone="light" />
            <p className="mt-3 text-sm text-slate-400">Reliable AI systems for modern products.</p>

            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p>
                Email:{" "}
                <a className="text-slate-200 transition-colors hover:text-white" href="mailto:slate.so.ai@gmail.com">
                  slate.so.ai@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="text-slate-200 transition-colors hover:text-white" href="tel:+919263753881">
                  +91 92637 53881
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-white">Navigate</p>
              <div className="mt-4 flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-white">Connect</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                      aria-label={item.label}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Slate. All rights reserved.</p>
          <p>Built for the next generation of AI.</p>
        </div>
      </Container>
    </footer>
  );
}
