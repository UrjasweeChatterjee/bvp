import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { businessBenefits } from "../data/mockData";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,153,51,0.06) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(19,136,8,0.04) 0%, transparent 50%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Member Benefits"
          title="Why elite members choose us"
          description="Less than ₹420/month for a membership that can generate lakhs in new business — backed by national institutional credibility."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {businessBenefits.map((b, i) => (
            <article
              key={b.id}
              className="group relative flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-ink-100 hover:ring-brand-300/60 hover:shadow-xl hover:shadow-brand-500/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 rounded-t-2xl"
              />

              <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl bg-ink-50 text-brand-700 ring-1 ring-ink-100 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300 mb-5">
                <Icon name={b.icon} className="w-6 h-6" />
              </span>

              <h3 className="text-base font-bold text-ink-900 tracking-tight">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">
                {b.description}
              </p>
              <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
