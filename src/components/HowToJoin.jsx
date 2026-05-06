import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { joinSteps } from "../data/mockData";

export default function HowToJoin() {
  return (
    <section id="join" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 20%, rgba(255,153,51,0.07) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(19,136,8,0.05) 0%, transparent 55%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="How to Join"
          title="From enquiry to active member in five steps"
          description="A guided onboarding designed to be transparent, no-pressure and respectful of your time."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-13 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-brand-200 to-transparent"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {joinSteps.map((step, i) => (
              <li
                key={step.id}
                className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink-100 hover:ring-brand-300/60 hover:shadow-xl hover:shadow-brand-500/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 rounded-t-2xl"
                />

                <span className="relative inline-flex h-13 w-13 items-center justify-center rounded-full bg-white text-brand-700 ring-2 ring-brand-200 font-bold text-base group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
                  {step.number}
                </span>

                <h3 className="mt-5 text-base font-bold text-ink-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">
                  {step.description}
                </p>
                <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300"
          >
            Start Your Enquiry
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
