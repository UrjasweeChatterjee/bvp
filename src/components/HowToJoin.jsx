import Container from "./Container";
import { joinSteps, membershipInclusions, joinPageIntro } from "../data/mockData";

export default function HowToJoin() {
  return (
    <section id="join" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 20%, rgba(255,153,51,0.07) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(19,136,8,0.05) 0%, transparent 55%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

          {/* ── LEFT — Steps ── */}
          <div>
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-600 mb-4">
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
              How to Join
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-ink-900 tracking-tight leading-tight mb-2">
              Your Path to{" "}
              <em className="font-bold text-ink-600" style={{ fontStyle: "italic" }}>
                Elite Membership
              </em>
            </h2>

            {/* Gold accent bar */}
            <span aria-hidden="true" className="block h-0.5 w-10 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full mb-5" />

            {/* Sub-description */}
            <p className="text-ink-500 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
              {joinPageIntro?.subtext ?? "Joining BVP Business Network is transparent and straightforward — designed to ensure every member is serious, committed, and aligned with our values of mutual growth."}
            </p>

            {/* Vertical step list */}
            <ol className="relative" aria-label="Membership steps">
              {/* Connecting vertical line behind the steps */}
              <li aria-hidden="true" className="sr-only" />
              <div
                aria-hidden="true"
                className="absolute top-5 left-[19px] bottom-5 w-[2px] bg-gradient-to-b from-brand-200 via-brand-100 to-transparent"
              />

              {joinSteps.map((step, i) => (
                <li
                  key={step.id}
                  className="relative flex gap-5 pb-9 last:pb-0"
                >
                  {/* Number circle */}
                  <span
                    className={`relative z-10 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold tracking-tight ring-2 transition-colors duration-200
                      ${i === joinSteps.length - 1
                        ? "bg-brand-500 text-white ring-brand-400 shadow-md shadow-brand-500/30"
                        : "bg-white text-ink-700 ring-ink-200"
                      }`}
                  >
                    {step.number}
                  </span>

                  {/* Content */}
                  <div className="pt-1.5 flex-1">
                    <h3 className="text-base font-bold text-ink-900 tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── RIGHT — Membership card ── */}
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-2xl border border-ink-100 bg-white shadow-2xl shadow-ink-900/8 overflow-hidden">
              {/* Top gold accent */}
              <span aria-hidden="true" className="block h-[3px] bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

              <div className="p-7">
                {/* Card eyebrow */}
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-ink-400 mb-3 text-center">
                  Elite Membership
                </p>

                {/* Price */}
                <p className="text-center text-5xl font-bold text-brand-600 tracking-tight mb-1">
                  ₹5,000
                </p>
                <p className="text-center text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-400 mb-6">
                  Per Year · Annual Renewal
                </p>

                {/* Inclusions */}
                <ul className="space-y-3 mb-7" role="list">
                  {(membershipInclusions ?? [
                    "Monthly chapter meeting access",
                    "Exclusive business category protection",
                    "Free membership of any BVP Branch",
                    "Member directory & referral network",
                    "Business presentation platform",
                    "Referral tracking & accountability",
                    "Skill development sessions",
                    "National BVP community access",
                  ]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-ink-700 leading-snug">
                      <span className="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/15 text-brand-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {/* Highlight "Free" in the BVP branch line */}
                      {item.includes("Free") || item.includes("free") ? (
                        <span>
                          <span className="text-brand-600 font-semibold">Free</span>
                          {item.replace(/free/i, "").replace(/^[\s,]+/, " ")}
                        </span>
                      ) : item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <a
                    href="#contact"
                    className="block w-full text-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 rounded-lg shadow-md"
                  >
                    Apply for Membership
                  </a>
                  <a
                    href="#contact"
                    className="block w-full text-center px-6 py-3 border border-ink-200 hover:border-ink-400 text-ink-700 hover:text-ink-900 text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 rounded-lg"
                  >
                    Visit as Guest First
                  </a>
                </div>

                {/* Trust badge */}
                <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-ink-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                    <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
                  </svg>
                  Backed by BVP's national credibility
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
