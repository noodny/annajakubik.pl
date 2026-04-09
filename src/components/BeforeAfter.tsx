"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { BeforeAfter as BeforeAfterType } from "@/lib/services";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BeforeAfter({
  data,
  label,
}: {
  data: BeforeAfterType;
  label: string;
}) {
  const t = useTranslations("BeforeAfter");
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e: MouseEvent) => updatePos(e.clientX);
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, updatePos]);

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!isDragging) return;
    updatePos(e.touches[0].clientX);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
      className="relative pbe-24 lg:pbe-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-4">
          {t("sectionLabel")}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-fg mb-4">
          {label}
        </h2>
        <p className="text-fg/40 text-base mb-12 max-w-xl">
          {t("sliderHint")}
        </p>

        <div
          className="relative w-full max-w-3xl mx-auto aspect-video select-none overflow-hidden rounded-lg cursor-col-resize touch-none"
          ref={containerRef}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After (full background) */}
          <img
            src={data.after}
            alt={t("after")}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Before (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={data.before}
              alt={t("before")}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-ink"
              >
                <path
                  d="M4 8L1 5.5M4 8L1 10.5M4 8H12M12 8L15 5.5M12 8L15 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs tracking-wider uppercase px-3 py-1.5 rounded pointer-events-none">
            {t("before")}
          </div>
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs tracking-wider uppercase px-3 py-1.5 rounded pointer-events-none">
            {t("after")}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
