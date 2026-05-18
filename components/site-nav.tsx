"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/data/site";

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;

    if (isOpen) {
      body.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="surface-dark relative rounded-[28px] px-4 py-3 sm:rounded-full sm:px-5"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="#top"
              className="flex items-center"
              aria-label="Slate home"
            >
              <BrandLogo className="h-9 sm:h-10" priority tone="light" />
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ButtonLink href="#cta" className="hidden sm:inline-flex">
                Get Started
              </ButtonLink>

              <button
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/10 md:hidden"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
              >
                {isOpen ? (
                  <CloseIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="surface-dark absolute inset-x-0 top-[calc(100%+12px)] rounded-[28px] p-4 md:hidden"
              >
                <nav className="flex flex-col gap-3">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <ButtonLink href="#cta" className="mt-2" variant="primary">
                    Get Started
                  </ButtonLink>
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Container>
    </header>
  );
}
