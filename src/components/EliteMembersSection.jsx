import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { eliteMembers } from "../data/mockData";

function getInitials(name) {
  const cleaned = name.replace(/^(Mr\.|Mrs\.|Ms\.|Smt\.|Shri|Dr\.)\s+/i, "").trim();
  const parts = cleaned.split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function EliteMembersSection() {
  return (
    <section id="elite-members" className="py-16 sm:py-24 bg-ink-50/40 relative overflow-hidden border-t border-ink-100">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,153,51,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(19,136,8,0.06) 0%, transparent 50%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Elite Members"
          title="Distinguished members of our community"
          description="A circle of accomplished leaders, entrepreneurs and public servants who guide and support our mission."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eliteMembers.map((m) => (
            <article
              key={m.id}
              className="group bg-white rounded-2xl ring-1 ring-ink-100 hover:ring-brand-200 hover:shadow-2xl hover:shadow-ink-900/8 transition-all duration-400 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-brand-50 via-ink-50 to-ink-100">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-bold tracking-tight text-brand-600/70 select-none">
                      {getInitials(m.name)}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />

                <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-ink-800 ring-1 ring-ink-100 shadow-sm backdrop-blur-sm">
                  Elite Member
                </span>

                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-white font-bold text-sm leading-tight drop-shadow">
                    {m.name}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-600 mb-1.5">
                  Company / Role
                </p>
                <p className="text-sm text-ink-700 leading-relaxed flex-1">
                  {m.company}
                </p>
                <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
