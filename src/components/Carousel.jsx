import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const AUTO_INTERVAL = 5000;

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(() => slides.map(() => false));
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = slides.length;

  const goTo = useCallback(
    (next) => setIndex(((next % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, total]);

  const markLoaded = (i) =>
    setLoaded((prev) => {
      if (prev[i]) return prev;
      const copy = prev.slice();
      copy[i] = true;
      return copy;
    });

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-ink-100 bg-ink-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      <div className="relative aspect-16/7 sm:aspect-16/6 w-full">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            {!loaded[i] && <div className="absolute inset-0 skeleton" />}
            <img
              src={slide.image}
              alt={slide.title}
              loading={i === 0 ? "eager" : "lazy"}
              onLoad={() => markLoaded(i)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-brand-500 text-ink-900 mb-3">
                Featured
              </span>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                {slide.title}
              </h3>
              <p className="mt-1.5 text-white/85 text-sm sm:text-base max-w-2xl">
                {slide.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-800 shadow ring-1 ring-ink-100 hover:bg-brand-400 hover:text-ink-900 transition-colors"
      >
        <Icon name="chevronLeft" className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-800 shadow ring-1 ring-ink-100 hover:bg-brand-400 hover:text-ink-900 transition-colors"
      >
        <Icon name="chevronRight" className="w-5 h-5" />
      </button>

      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
        role="tablist"
        aria-label="Choose slide"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-brand-400" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
