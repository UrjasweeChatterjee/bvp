import Container from "./Container";
import Emblem from "./Emblem";
import Icon from "./Icon";
import { footer, navLinks, org } from "../data/mockData";

const formatCount = (n) => n.toLocaleString("en-IN");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink-900 text-ink-200">
      <div className="tricolor-bar" aria-hidden="true" />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-brand-300">
                <Emblem className="w-9 h-9" />
              </span>
              <div className="leading-tight">
                <p className="font-devnagari text-xs text-ink-300">
                  {org.nameHi}
                </p>
                <p className="text-white font-semibold">{org.nameEn}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-ink-300">
                  Est. {org.estYear} • {org.motto}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-300">
              {footer.about}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-ink-200 ring-1 ring-white/10 hover:bg-brand-500 hover:text-ink-900 hover:ring-brand-500 transition-colors"
                  >
                    <Icon name={s.icon} className="w-[18px] h-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="w-5 h-5 mt-0.5 text-brand-300 shrink-0" />
                <span className="text-ink-300">{footer.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" className="w-5 h-5 mt-0.5 text-brand-300 shrink-0" />
                <div className="text-ink-300">
                  <a
                    href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors block"
                  >
                    {footer.contact.phone}
                  </a>
                  <span className="text-xs text-ink-400">
                    Helpline (24×7):{" "}
                    <a
                      href={`tel:${footer.contact.helpline.replace(/[^\d]/g, "")}`}
                      className="text-brand-300 hover:text-brand-200"
                    >
                      {footer.contact.helpline}
                    </a>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="w-5 h-5 mt-0.5 text-brand-300 shrink-0" />
                <div className="text-ink-300">
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="hover:text-white transition-colors break-all block"
                  >
                    {footer.contact.email}
                  </a>
                  <span className="text-xs text-ink-400 block">
                    RTI:{" "}
                    <a
                      href={`mailto:${footer.contact.rti}`}
                      className="hover:text-white"
                    >
                      {footer.contact.rti}
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Stay Informed
            </h4>
            <p className="mt-4 text-sm text-ink-300">
              Subscribe to our newsletter for monthly updates on schemes,
              programmes and impact reports.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex flex-col gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@email.com"
                className="rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder-ink-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
              <button
                type="submit"
                className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-ink-900 hover:bg-brand-400 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-white/5 ring-1 ring-white/10 p-3">
                <p className="text-[10px] uppercase tracking-wider text-ink-400">
                  Visitors
                </p>
                <p className="mt-1 font-mono text-base text-white tabular-nums">
                  {formatCount(footer.visitorCount)}
                </p>
              </div>
              <div className="rounded-md bg-white/5 ring-1 ring-white/10 p-3">
                <p className="text-[10px] uppercase tracking-wider text-ink-400">
                  Last updated
                </p>
                <p className="mt-1 text-xs text-white">{org.lastUpdated}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-ink-950/30">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>
            &copy; {year}{" "}
            <span className="text-ink-200 font-medium">{org.nameEn}</span>. All
            rights reserved. | Designed &amp; maintained by IT Cell, BVP.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Hyperlink Policy</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
