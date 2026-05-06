import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { membershipInclusions } from "../data/mockData";

export default function MembershipInclusions() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-ink-50 via-white to-brand-50/30 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(255,179,71,0.07) 0%, transparent 60%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What's Included"
              title="Everything you need in one membership"
              description="One annual fee, eight tangible inclusions — and a complimentary BVP branch membership on top."
            />

            <div className="mt-2 inline-flex items-baseline gap-2 rounded-2xl bg-white ring-1 ring-ink-100 px-5 py-4 shadow-sm">
              <span className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
                ₹5,000
              </span>
              <span className="text-sm text-ink-500">/ year</span>
              <span className="ml-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                BVP Branch Included
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {membershipInclusions.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-ink-100 hover:ring-brand-300/60 hover:shadow-md hover:shadow-brand-500/8 transition-all duration-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex-none inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-ink-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
