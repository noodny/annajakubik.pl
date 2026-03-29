import type { ReactNode } from "react";

interface CarouselItemProps {
  isSnapPoint: boolean;
  children: ReactNode;
}

export function CarouselItem({ isSnapPoint, children }: CarouselItemProps) {
  return (
    <li
      className="shrink-0 w-full pr-6"
      style={{ scrollSnapAlign: isSnapPoint ? "start" : "none" }}
    >
      {children}
    </li>
  );
}
