import type { ReactNode } from "react";

interface CarouselItemProps {
  isSnapPoint: boolean;
  children: ReactNode;
}

export function CarouselItem({ isSnapPoint, children }: CarouselItemProps) {
  return (
    <li
      className="shrink-0 basis-full min-w-0 pr-6 max-w-[100vw]"
      style={{ scrollSnapAlign: isSnapPoint ? "start" : "none" }}
    >
      {children}
    </li>
  );
}
