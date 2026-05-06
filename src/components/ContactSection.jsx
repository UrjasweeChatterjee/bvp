import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { businessContact } from "../data/mockData";

const inputClass =
  "w-full rounded-lg bg-white px-4 py-3 text-sm text-ink-900 ring-1 ring-ink-200 focus:ring-2 focus:ring-brand-400 focus:outline-none transition-all placeholder:text-ink-400";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-ink-50 via-white to-brand-50/30 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(255,179,71,0.07) 0%, transparent 60%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Start a conversation with our team"
          description="Tell us about your business — we'll guide you to the right chapter and answer any questions about membership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-ink-100 shadow-sm">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex-none inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon name="pin" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-600 mb-1">
                      Address
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {businessContact.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon name="phone" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-600 mb-1">
                      Phone
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {businessContact.phone}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon name="mail" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-600 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${businessContact.email}`}
                      className="text-sm text-ink-700 hover:text-brand-700 leading-relaxed"
                    >
                      {businessContact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon name="programme" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-600 mb-1">
                      Meeting Schedule
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {businessContact.meeting}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-ink-900 p-6 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, rgba(255,153,51,0.2) 0%, transparent 55%)",
                }}
              />
              <p className="relative text-[11px] font-bold tracking-[0.22em] uppercase text-brand-300 mb-2">
                Membership
              </p>
              <p className="relative text-2xl font-bold tracking-tight">
                ₹5,000 <span className="text-sm font-normal text-white/70">/ year</span>
              </p>
              <p className="relative mt-2 text-sm text-white/70 leading-relaxed">
                Includes complimentary BVP Branch membership. Guests welcome at any monthly meeting at no cost.
              </p>
            </div>
          </aside>

          <form
            className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-ink-100 shadow-sm space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-ink-700 mb-1.5" htmlFor="contact-name">
                  Full Name
                </label>
                <input id="contact-name" type="text" className={inputClass} placeholder="Your full name" required />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-ink-700 mb-1.5" htmlFor="contact-phone">
                  Phone Number
                </label>
                <input id="contact-phone" type="tel" className={inputClass} placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-ink-700 mb-1.5" htmlFor="contact-email">
                  Email Address
                </label>
                <input id="contact-email" type="email" className={inputClass} placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-ink-700 mb-1.5" htmlFor="contact-business">
                  Business / Profession
                </label>
                <input id="contact-business" type="text" className={inputClass} placeholder="What do you do?" required />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-ink-700 mb-1.5" htmlFor="contact-city">
                City / Location
              </label>
              <input id="contact-city" type="text" className={inputClass} placeholder="Your city" required />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-ink-700 mb-1.5" htmlFor="contact-message">
                Your Message
              </label>
              <textarea id="contact-message" rows={4} className={`${inputClass} resize-none`} placeholder="Tell us a bit about why you're interested in joining…" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <p className="text-xs text-ink-500">
                We respect your privacy. Your details will only be used to respond to this enquiry.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300"
              >
                Submit Enquiry
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
