"use client";

import { useCallback, useState } from "react";

import { logNormalizedError } from "@/lib/error-utils";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export function BrandLogo({
  className,
  priority = false,
  tone = "dark",
}: BrandLogoProps) {
  const [src, setSrc] = useState("/slate-logo-transparent.png");

  const handleError = useCallback((error: unknown) => {
    logNormalizedError(error, "BrandLogo failed to load");

    setSrc((currentSrc) =>
      currentSrc === "/slate-logo-transparent.png"
        ? "/slate-logo-cropped.png"
        : currentSrc,
    );
  }, []);

  return (
    <img
      src={src}
      alt="Slate logo"
      width={577}
      height={338}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={handleError}
      className={cn("h-10 w-auto", tone === "light" && "invert", className)}
    />
  );
}
