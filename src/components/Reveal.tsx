import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Vertical offset (px) the element animates up from. */
  y?: number;
  /** Animation delay in seconds. */
  delay?: number;
  /** Animation duration in seconds. */
  duration?: number;
  as?: ElementType;
}

/**
 * Scroll-reveal wrapper.
 *
 * Renders its content *visible* in the server HTML so the page is never blank
 * if JavaScript is slow, blocked, or disabled. The entrance animation is a
 * pure CSS + progressive-enhancement layer: a tiny inline script (see the root
 * layout) adds the `js` class before first paint and reveals each element via
 * an IntersectionObserver. Because that observer is inline, the reveal does not
 * wait on the main React/framer-motion bundle or on image loading.
 */
export default function Reveal({
  children,
  className,
  y = 40,
  delay = 0,
  duration = 0.8,
  as: Tag = "div",
}: RevealProps) {
  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-duration": `${duration}s`,
    ...(delay ? { transitionDelay: `${delay}s` } : {}),
  } as CSSProperties;

  return (
    <Tag data-reveal className={className} style={style}>
      {children}
    </Tag>
  );
}
