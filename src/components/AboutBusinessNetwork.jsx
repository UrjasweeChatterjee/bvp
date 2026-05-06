import Container from "./Container";
import { businessAbout } from "../data/mockData";

/* ── Inline SVG icons matching the screenshot's minimal style ── */
function CardIcon({ id }) {
  const icons = {
    ba1: (
      /* globe / national presence */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14.5 14.5 0 0 1 0 18M3 12h18" />
        <path d="M12 3C9.5 6.5 8 9 8 12s1.5 5.5 4 9" />
        <path d="M12 3c2.5 3.5 4 6 4 9s-1.5 5.5-4 9" />
      </svg>
    ),
    ba2: (
      /* people / community */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <circle cx="8" cy="7" r="3" />
        <circle cx="16" cy="7" r="3" />
        <path d="M1 20v-1a7 7 0 0 1 14 0v1" />
        <path d="M17 13a7 7 0 0 1 6 6.93V20" />
      </svg>
    ),
    ba3: (
      /* check / structured */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="m8 12 3 3 5-5" />
      </svg>
    ),
    ba4: (
      /* rupee / value */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M6 4h12M6 9h12M12 9l-6 11M12 9c3 0 6-1 6-4s-3-5-6-5" />
      </svg>
    ),
  };
  return icons[id] ?? null;
}

export default function AboutBusinessNetwork() {
  const { attributes } = businessAbout;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,153,51,0.07) 0%, transparent 55%), radial-gradient(circle at 90% 80%, rgba(19,136,8,0.05) 0%, transparent 55%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-600">
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
              Introduction
            </p>

            {/* Heading — matches screenshot: plain + italic coloured word */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-ink-900 tracking-tight leading-tight">
              Where Business Meets{" "}
              <em className="not-italic font-bold text-brand-600 italic" style={{ fontStyle: "italic" }}>
                Purpose
              </em>
            </h2>

            {/* Tricolor accent bar */}
            <span aria-hidden="true" className="block h-0.5 w-10 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />

            {/* Body paragraphs */}
            <p className="text-ink-500 leading-relaxed text-sm sm:text-base">
              Bharat Vikas Parishad (BVP) has long been a pillar of social upliftment and national
              development across India. The BVP Vyapar Manch extends this legacy into the
              commercial arena — a structured, value-driven platform where entrepreneurs,
              professionals, and business owners grow together.
            </p>
            <p className="text-ink-500 leading-relaxed text-sm sm:text-base">
              Unlike conventional networking groups, we combine the discipline of structured referral
              systems with the warmth of community belonging — rooted in BVP's trusted national
              presence.
            </p>

            {/* CTA */}
            <div className="mt-2">
              <a
                href="#join"
                className="inline-block px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 rounded-sm shadow-md hover:shadow-lg"
              >
                Start Your Journey
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — 2×2 grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {attributes.map((attr, i) => {
              /* Top-right card gets the navy accent (ink), others get brand */
              const isNavy = i === 1;
              return (
                <article
                  key={attr.id}
                  className={`group relative rounded-xl bg-white p-6 flex flex-col gap-3 border overflow-hidden transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                    ${isNavy
                      ? "border-ink-200 hover:border-ink-400/60 hover:shadow-ink-200/40"
                      : "border-ink-100 hover:border-brand-300/60 hover:shadow-brand-500/10"
                    }`}
                >
                  {/* Top border accent on hover */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-xl scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400
                      ${isNavy
                        ? "bg-gradient-to-r from-ink-500 to-ink-700"
                        : "bg-gradient-to-r from-brand-400 to-brand-600"
                      }`}
                  />

                  {/* Icon */}
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg
                      ${isNavy
                        ? "text-ink-600 bg-ink-50"
                        : "text-ink-500 bg-ink-50"
                      }`}
                  >
                    <CardIcon id={attr.id} />
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-ink-900 tracking-tight">
                    {attr.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-ink-500 leading-relaxed">{attr.body}</p>
                </article>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
