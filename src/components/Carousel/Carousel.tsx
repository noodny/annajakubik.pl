"use client";

import { useRef, useEffect, type ComponentType } from "react";
import { useSnapCarousel } from "react-snap-carousel";

import { CarouselItem } from "./CarouselItem";
import { CarouselIndicator } from "./CarouselIndicator";
import { CarouselControls } from "./CarouselControls";

const AUTO_SCROLL_INTERVAL = 5000;

interface CarouselProps<T> {
  items: T[];
  ItemComponent: ComponentType<T>;
  autoScroll?: boolean;
  hasNavigation?: boolean;
}

export function Carousel<T extends object>({
  items,
  ItemComponent,
  autoScroll = false,
  hasNavigation = false,
}: CarouselProps<T>) {
  const {
    scrollRef,
    pages,
    activePageIndex,
    hasPrevPage,
    hasNextPage,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();

  const autoScrollInterval = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (autoScroll) {
      autoScrollInterval.current = setInterval(() => {
        hasNextPage ? next() : goTo(0);
      }, AUTO_SCROLL_INTERVAL);
    }

    return () => clearInterval(autoScrollInterval.current);
  }, [autoScroll, next, goTo, hasNextPage]);

  return (
    <div className="min-w-0 max-w-[calc(100vw-3rem)]">
      <ul
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, index) => (
          <CarouselItem isSnapPoint={snapPointIndexes.has(index)} key={index}>
            <ItemComponent {...item} />
          </CarouselItem>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <CarouselIndicator
          activePageIndex={activePageIndex}
          pagesCount={pages.length}
        />
        {hasNavigation && (
          <CarouselControls
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
            onPrevClick={prev}
            onNextClick={next}
          />
        )}
      </div>
    </div>
  );
}
