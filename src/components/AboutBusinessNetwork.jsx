import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { businessAbout } from "../data/mockData";

export default function AboutBusinessNetwork() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,153,51,0.07) 0%, transparent 55%), radial-gradient(circle at 90% 80%, rgba(19,136,8,0.05) 0%, transparent 55%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={businessAbout.eyebrow}
          title={businessAbout.title}
          description={businessAbout.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessAbout.attributes.map((a, i) => (
            <article
              key={a.id}
              className="group relative rounded-2xl bg-white p-6 ring-1 ring-ink-100 hover:ring-brand-300/60 hover:shadow-xl hover:shadow-brand-500/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 rounded-t-2xl"
              />
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-brand-600 mb-3">
                0{i + 1}
              </p>
              <h3 className="text-base font-bold text-ink-900 tracking-tight mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">{a.body}</p>
              <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
