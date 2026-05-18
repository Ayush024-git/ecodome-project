import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex touch-manipulation items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slateBlue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variant === "primary" &&
      "bg-slate-100 text-slate-950 shadow-soft hover:-translate-y-0.5 hover:bg-white",
    variant === "secondary" &&
      "border border-white/[0.14] bg-white/[0.08] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/[0.12]",
    variant === "ghost" &&
      "border border-slate-300/80 bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:bg-white",
    className,
  );

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
