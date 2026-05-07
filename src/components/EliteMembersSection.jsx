import { useRef, useState, useEffect, useCallback } from "react";
import Container from "./Container";
import { eliteMembers } from "../data/mockData";

/* ── helpers ─────────────────────────────────────── */
function getInitials(name) {
  const cleaned = name.replace(/^(Mr\.|Mrs\.|Ms\.|Smt\.|Shri|Dr\.)\s+/i, "").trim();
  const parts = cleaned.split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

/* ── MemberCard ───────────────────────────────────── */
function MemberCard({ member }) {
  return (
    <article className="group relative flex-shrink-0 w-[260px] sm:w-[240px] rounded-2xl overflow-hidden bg-white ring-1 ring-ink-100 hover:ring-brand-200 hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-400 select-none">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-brand-50 via-ink-50 to-ink-100">
        {member.image ? (
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            draggable="false"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-5xl font-bold tracking-tight text-brand-600/70 select-none">
              {getInitials(member.name)}
            </span>
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />

        {/* Badge */}
        <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-ink-800 ring-1 ring-ink-100 shadow-sm backdrop-blur-sm">
          Elite Member
        </span>

        {/* Name overlay */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">{member.name}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-600">
          Company / Role
        </p>
        <p className="text-sm text-ink-700 leading-snug">{member.company}</p>
        <div className="mt-3 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
      </div>
    </article>
  );
}

/* ── Main section ─────────────────────────────────── */
export default function EliteMembersSection() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragOffset = useRef(0);
  const autoTimer = useRef(null);

  const total = eliteMembers.length;
  const CARD_W = 268; // card width + gap (260px card + 8px gap)

  /* Advance by +1 or -1, wrapping */
  const go = useCallback((dir) => {
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  /* Auto-play */
  const resetAuto = useCallback(() => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => go(1), 4000);
  }, [go]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoTimer.current);
  }, [resetAuto]);

  /* Smooth scroll the track to `current` */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${current * CARD_W}px)`;
  }, [current, CARD_W]);

  /* Drag / touch handlers */
  const onPointerDown = (e) => {
    setIsDragging(false);
    dragStart.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragOffset.current = 0;
    clearInterval(autoTimer.current);
  };

  const onPointerMove = (e) => {
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragOffset.current = x - dragStart.current;
    if (Math.abs(dragOffset.current) > 5) setIsDragging(true);
  };

  const onPointerUp = () => {
    if (Math.abs(dragOffset.current) > 60) {
      go(dragOffset.current < 0 ? 1 : -1);
    }
    setIsDragging(false);
    dragOffset.current = 0;
    resetAuto();
  };

  return (
    <section
      id="elite-members"
      className="py-16 sm:py-24 relative overflow-hidden border-t border-ink-100"
      style={{
        background: "linear-gradient(160deg, #f8f9fd 0%, #ffffff 50%, #f3f5fb 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,153,51,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(19,136,8,0.06) 0%, transparent 50%)",
        }}
      />

      <Container className="relative">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-600 mb-3">
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
              Our Elite Members
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 tracking-tight leading-tight">
              Distinguished members of{" "}
              <span className="text-brand-600">our community</span>
            </h2>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              A circle of accomplished leaders, entrepreneurs and public servants who guide and support our mission.
            </p>
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => { go(-1); resetAuto(); }}
              aria-label="Previous member"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 hover:border-brand-400 hover:text-brand-600 hover:shadow-md transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => { go(1); resetAuto(); }}
              aria-label="Next member"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 hover:border-brand-400 hover:text-brand-600 hover:shadow-md transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel viewport — overflow hidden */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
          onTouchStart={(e) => onPointerDown(e.touches[0])}
          onTouchMove={(e) => onPointerMove(e.touches[0])}
          onTouchEnd={onPointerUp}
        >
          <div
            ref={trackRef}
            className="flex gap-2"
            style={{ transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.4,0,0.2,1)" }}
          >
            {/* Render members twice for infinite-feel when wrapping */}
            {[...eliteMembers, ...eliteMembers].map((m, i) => (
              <MemberCard key={`${m.id}-${i}`} member={m} />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Member slides">
          {eliteMembers.map((m, i) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to ${m.name}`}
              onClick={() => { setCurrent(i); resetAuto(); }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-brand-500"
                  : "w-2 h-2 bg-ink-200 hover:bg-brand-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
