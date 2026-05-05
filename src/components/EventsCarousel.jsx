import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import EventCard from "./EventCard";
import Icon from "./Icon";
import { events } from "../data/mockData";

export default function EventsCarousel() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll by roughly one viewport width, or exactly one card if smaller
    const step = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="events" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,153,51,0.06) 0%, transparent 50%)" }} />

      <Container className="relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What's Happening"
            title="Upcoming events & programs"
            description="Join us across cities for camps, workshops, drives and meets."
          />
          <div className="flex items-center gap-3 mb-2 sm:mb-10">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Scroll events left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-700 ring-1 ring-ink-100 shadow-md hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              <Icon name="chevronLeft" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Scroll events right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-700 ring-1 ring-ink-100 shadow-md hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              <Icon name="chevronRight" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      <div className="relative">
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-8 pt-2"
          aria-label="Events carousel"
          tabIndex={0}
        >
          {events.map((e, i) => (
            <div
              key={e.id}
              data-event-card
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <EventCard {...e} />
            </div>
          ))}
          <div className="shrink-0 w-4 sm:w-8" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
