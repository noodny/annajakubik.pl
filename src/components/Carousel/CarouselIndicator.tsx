interface CarouselIndicatorProps {
  activePageIndex: number;
  pagesCount: number;
}

export function CarouselIndicator({
  activePageIndex,
  pagesCount,
}: CarouselIndicatorProps) {
  return (
    <div className="flex items-center gap-2 mt-10">
      {Array.from({ length: pagesCount }, (_, i) => (
        <div
          key={i}
          className={`h-px transition-all duration-500 ${
            i === activePageIndex
              ? "w-8 bg-gold/60"
              : "w-4 bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}
