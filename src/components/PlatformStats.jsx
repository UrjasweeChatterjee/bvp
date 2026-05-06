import Container from "./Container";
import { platformOverview } from "../data/mockData";

export default function PlatformStats() {
  return (
    <section className="py-12 sm:py-16 bg-ink-900 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, rgba(255,153,51,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 70%, rgba(19,136,8,0.12) 0%, transparent 45%)",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <Container className="relative">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-300 mb-3">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-400 to-brand-300 rounded-full" />
            Platform Overview
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-300 to-brand-400 rounded-full" />
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Built for high, measurable ROI
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {platformOverview.map((s) => (
            <div
              key={s.id}
              className="group relative rounded-xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur-sm hover:bg-white/8 hover:ring-brand-400/40 transition-all duration-300"
            >
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-300 mb-2">
                {s.label}
              </p>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-white/50">{s.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
