import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export function CarouselControls({
  hasPrevPage,
  hasNextPage,
  onPrevClick,
  onNextClick,
}: CarouselControlsProps) {
  return (
    <div className="hidden sm:flex items-center gap-3 mt-8">
      <button
        onClick={onPrevClick}
        disabled={!hasPrevPage}
        className="w-10 h-10 border border-fg/10 flex items-center cursor-pointer justify-center text-fg/40 hover:text-gold hover:border-gold/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
        aria-label="Poprzednia opinia"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={onNextClick}
        disabled={!hasNextPage}
        className="w-10 h-10 border border-fg/10 flex items-center cursor-pointer justify-center text-fg/40 hover:text-gold hover:border-gold/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
        aria-label="Następna opinia"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
