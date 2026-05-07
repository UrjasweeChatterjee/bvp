import Container from "./Container";
import Icon from "./Icon";
import { businessBenefits, membershipHeadline } from "../data/mockData";

/* Icon names to show alongside each benefit */
const iconMap = {
  bb1: "handshake",
  bb2: "directory",
  bb3: "scheme",
  bb4: "programme",
  bb5: "people",
  bb6: "service",
};

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b132e 0%, #1a2550 60%, #243262 100%)" }}
    >
      {/* Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 10%, rgba(255,179,71,0.10) 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(255,179,71,0.06) 0%, transparent 50%)",
        }}
      />
      {/* Subtle dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT — Benefits List ── */}
          <div>
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-400 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
              Member Benefits
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
              Why elite members{" "}
              <span className="text-brand-400">choose us</span>
            </h2>
            <p className="text-ink-300 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
              Less than ₹420/month for a membership that can generate lakhs in new business — backed by national institutional credibility.
            </p>

            {/* Feature rows */}
            <ul className="space-y-6" role="list">
              {businessBenefits.map((b, i) => (
                <li
                  key={b.id}
                  className="group flex gap-4 items-start"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {/* Icon badge */}
                  <span className="mt-0.5 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300">
                    <Icon name={iconMap[b.id] ?? "handshake"} className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight mb-0.5">
                      {b.title}
                    </h3>
                    <p className="text-sm text-ink-300 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT — Value Proposition Panel ── */}
          <div className="flex flex-col gap-6">
            {/* Price card */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-500/30 bg-white/[0.03] backdrop-blur-sm p-8">
              {/* Gold top accent */}
              <span aria-hidden="true" className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-400 mb-3">
                Investment
              </p>
              <p className="text-5xl font-bold text-white tracking-tight mb-1">
                ₹5,000
                <span className="text-xl font-medium text-ink-300"> / year</span>
              </p>
              <p className="text-ink-300 text-sm mt-2 mb-6 leading-relaxed">
                {membershipHeadline?.subtext ?? "Less than ₹420/month for a network that can generate lakhs in new business."}
              </p>

              {/* Inclusions checklist */}
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "1 mandatory monthly chapter meeting",
                  "Exclusive category seat — yours alone",
                  "Free BVP Branch membership of your choice",
                  "Access to full member directory",
                  "Referral tracking & accountability tools",
                  "National BVP ecosystem access",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink-200">
                    <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className="block w-full text-center px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 rounded-lg shadow-lg shadow-brand-900/40"
              >
                Apply for Membership
              </a>
            </div>

            {/* Credibility pill */}
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
                <Icon name="globe" className="w-5 h-5" />
              </span>
              <p className="text-sm text-ink-200 leading-snug">
                Backed by <strong className="text-white font-semibold">Bharat Vikas Parishad</strong> — a national institution with thousands of branches and decades of trust.
              </p>
            </div>

            {/* Stat pills row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "1×", label: "Meeting/mo" },
                { val: "100%", label: "Category exclusive" },
                { val: "Pan India", label: "BVP Network" },
              ].map(({ val, label }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <p className="text-xl font-bold text-brand-400 tracking-tight">{val}</p>
                  <p className="text-[11px] text-ink-300 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
