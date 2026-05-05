import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { leadership } from "../data/mockData";

export default function LeadershipSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,153,51,0.06) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(19,136,8,0.04) 0%, transparent 50%)" }} />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Leadership"
          title="Office bearers & dignitaries"
          description="Stewards of the organisation, accountable to the citizens we serve."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((p, i) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl ring-1 ring-ink-100 hover:ring-brand-200 hover:shadow-2xl hover:shadow-ink-900/8 transition-all duration-400 overflow-hidden flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] bg-ink-100 overflow-hidden">
                <img
                  src={p.image}
                  alt={`Portrait of ${p.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Stronger gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />

                {/* Role badge */}
                <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-ink-800 ring-1 ring-ink-100 shadow-sm backdrop-blur-sm">
                  {p.role}
                </span>

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm leading-tight">{p.name}</p>
                  <p className="font-devnagari text-white/70 text-xs mt-0.5">{p.nameHi}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-5 flex-1 flex flex-col relative">
                {/* Decorative quote mark */}
                <span className="absolute top-3 right-4 text-5xl text-brand-100 font-serif leading-none select-none">"</span>
                <p className="text-sm text-ink-600 italic leading-relaxed flex-1 relative">
                  &ldquo;{p.quote}&rdquo;
                </p>
                {/* Bottom accent */}
                <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
