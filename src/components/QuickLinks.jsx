import Container from "./Container";
import QuickLinkCard from "./QuickLinkCard";
import SectionHeading from "./SectionHeading";
import { quickLinks } from "../data/mockData";

export default function QuickLinks() {
  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-brand-50/30" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,179,71,0.07) 0%, transparent 60%)" }} />

      <Container className="relative">
        <SectionHeading
          eyebrow="Quick Access"
          title="What would you like to do today?"
          description="Find services, schemes and announcements organized for citizens, partners and beneficiaries."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickLinks.map((link, i) => (
            <div
              key={link.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              <QuickLinkCard {...link} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
