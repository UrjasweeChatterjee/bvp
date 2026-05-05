import Container from "./Container";
import Icon from "./Icon";
import heroImg from "../assets/hero.jpeg";
import { org, stats } from "../data/mockData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden text-white"
      aria-label="Welcome"
    >
      {/* Background image with layered overlays for depth */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover scale-105"
          loading="eager"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Rich multi-layer overlay for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-ink-900/20" />
        {/* Subtle color accent glows */}
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 10% 60%, rgba(255,153,51,0.35) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(19,136,8,0.2) 0%, transparent 45%)" }} />
      </div>

      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left — Content */}
          <div className="lg:col-span-7 xl:col-span-8 animate-fade-in-up">
            {/* Pill badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/8 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-widest uppercase ring-1 ring-white/20 text-white/90 mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400" />
              </span>
              {org.motto} • Serving Bharat since {org.estYear}
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="font-devnagari block text-2xl sm:text-3xl text-brand-300 font-medium mb-3 tracking-normal leading-snug">
                {org.taglineHi}
              </span>
              <span className="text-white">Empowering citizens.</span>
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #ffb347 0%, #ff9933 60%, #f99a25 100%)" }}>
                Building Bharat.
              </span>
            </h1>

            {/* Body text */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed font-light">
              {org.nameEn} works hand-in-hand with citizens, the Government of India and state governments to deliver
              education, healthcare and sustainable livelihoods to those who need it most.
            </p>

            {/* CTA row */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-ink-900 hover:bg-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/30 hover:shadow-brand-400/40 hover:-translate-y-0.5"
              >
                Explore Schemes
                <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#notices"
                className="inline-flex items-center gap-2 rounded-xl bg-white/8 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15 hover:ring-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                Latest Notices
              </a>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-3.5 text-sm font-medium text-white/70 hover:text-brand-300 transition-colors"
              >
                File a Grievance
                <Icon name="arrowRight" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Hero image + Stats card stacked */}
          <div className="lg:col-span-5 xl:col-span-4 animate-fade-in flex flex-col gap-4">

            {/* Hero image */}
            <img
              src={heroImg}
              alt="BVP community outreach"
              className="w-full h-48 sm:h-56 rounded-2xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/15"
              loading="eager"
            />

            {/* Glass stats card */}
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-white/6 backdrop-blur-xl" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(255,179,71,0.08) 0%, rgba(255,255,255,0.03) 100%)" }} />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />

              <div className="relative p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mb-5">
                  Our Impact, At a Glance
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="group rounded-xl bg-white/5 ring-1 ring-white/8 p-4 hover:bg-white/10 hover:ring-brand-400/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
                          <Icon name={s.icon} className="w-4 h-4" />
                        </span>
                        <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {s.value}
                        </p>
                      </div>
                      <p className="text-[11px] text-white/55 leading-snug font-medium">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#about"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200 transition-colors group"
                >
                  Annual Report 2025-26
                  <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom tricolor accent bar */}
      <div className="absolute inset-x-0 bottom-0 h-1 tricolor-bar opacity-80" />
    </section>
  );
}