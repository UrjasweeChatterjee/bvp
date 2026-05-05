import Container from "./Container";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { importantLinks } from "../data/mockData";

export default function ImportantLinks() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-ink-100">
      <Container>
        <SectionHeading
          eyebrow="External Resources"
          title="Important Government links"
          description="Frequently used citizen portals, ministries and national platforms."
        />
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {importantLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-lg bg-ink-50 ring-1 ring-ink-100 hover:bg-brand-50 hover:ring-brand-300 px-4 py-3 transition-colors h-full"
              >
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-ink-900 truncate">
                    {l.label}
                  </span>
                  <span className="block text-xs text-ink-500 truncate">
                    {l.description}
                  </span>
                </span>
                <Icon
                  name="external"
                  className="w-4 h-4 text-ink-400 group-hover:text-brand-600 shrink-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
