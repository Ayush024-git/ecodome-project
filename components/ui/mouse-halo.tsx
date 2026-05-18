"use client";

import { useCallback, useEffect, useRef } from "react";

import { useReducedMotion } from "framer-motion";

import { logNormalizedError } from "@/lib/error-utils";

const HALO_SIZE = 520;
const HALO_OFFSET = HALO_SIZE / 2;

export function MouseHalo() {
  const haloRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const applyPosition = useCallback(() => {
    frameRef.current = null;

    const node = haloRef.current;

    if (!node) {
      return;
    }

    const { x, y } = positionRef.current;
    node.style.transform = `translate3d(${x - HALO_OFFSET}px, ${y - HALO_OFFSET}px, 0)`;
  }, []);

  const scheduleRender = useCallback(() => {
    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(applyPosition);
  }, [applyPosition]);

  const updatePointer = useCallback(
    (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      scheduleRender();
    },
    [scheduleRender],
  );

  useEffect(() => {
    try {
      if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) {
        return;
      }

      positionRef.current = {
        x: window.innerWidth * 0.72,
        y: window.innerHeight * 0.1,
      };
      scheduleRender();

      window.addEventListener("pointermove", updatePointer, { passive: true });

      return () => {
        window.removeEventListener("pointermove", updatePointer);
        if (frameRef.current !== null) {
          window.cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
      };
    } catch (error) {
      logNormalizedError(error, "MouseHalo failed to initialize");
      return;
    }
  }, [reduceMotion, scheduleRender, updatePointer]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        ref={haloRef}
        className="absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(147,163,220,0.2)_0%,_rgba(147,163,220,0.09)_34%,_transparent_72%)] blur-3xl"
      />
    </div>
  );
}
