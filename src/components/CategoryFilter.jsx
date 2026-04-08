import { useRef, useState, useEffect, useCallback } from "react";
import { JOB_CATEGORIES } from "../constants/constant";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CategoryFilter = ({ active, onSelect }) => {
  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    canLeft: false,
    canRight: false,
  });

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      canLeft: el.scrollLeft > 4,
      canRight: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center gap-1 w-full mb-8">
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className={`
          shrink-0 flex items-center justify-center w-8 h-8 rounded-full
          bg-white border border-slate-200 text-slate-500 shadow-sm
          hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300
          transition-all duration-200
          ${scrollState.canLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <MdChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1"
      >
        {JOB_CATEGORIES.map((cat) => {
          const isActive = active === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onSelect(cat.value)}
              className={`
                whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold border-2
                transition-all duration-200
                ${
                  isActive
                    ? "bg-slate-900 border-slate-900 text-white shadow-md scale-105"
                    : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className={`
          shrink-0 flex items-center justify-center w-8 h-8 rounded-full
          bg-white border border-slate-200 text-slate-500 shadow-sm
          hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300
          transition-all duration-200
          ${scrollState.canRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <MdChevronRight size={20} />
      </button>
    </div>
  );
};

export default CategoryFilter;
