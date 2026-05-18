import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        !isCenter && "text-left",
        className,
      )}
    >
      <span
        className={cn(
          "eyebrow-chip",
          isLight
            ? "border-white/[0.12] bg-white/[0.06] text-slate-300"
            : "border-slate-300/80 bg-white/70 text-slate-600",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "section-title mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl",
          isLight ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 max-w-2xl text-base leading-7 sm:text-lg",
          isCenter && "mx-auto",
          isLight ? "text-slate-300" : "text-slate-600",
        )}
      >
        {description}
      </p>
    </div>
  );
}
