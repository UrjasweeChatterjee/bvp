import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { businessServices } from "../data/mockData";

export default function WhatWeDo() {
  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-brand-50/30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(255,179,71,0.07) 0%, transparent 60%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="What We Do"
          title="Four pillars of structured networking"
          description="A purposeful framework that turns relationships into measurable, repeatable business growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessServices.map((s, i) => (
            <article
              key={s.id}
              className="group relative flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-ink-100 hover:ring-brand-300/60 hover:shadow-xl hover:shadow-brand-500/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 rounded-t-2xl"
              />

              <div className="flex items-start justify-between mb-5">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl bg-ink-50 text-brand-700 ring-1 ring-ink-100 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <span className="text-3xl font-bold text-ink-100 group-hover:text-brand-100 transition-colors tracking-tight">
                  {s.number}
                </span>
              </div>

              <h3 className="text-base font-bold text-ink-900 tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
