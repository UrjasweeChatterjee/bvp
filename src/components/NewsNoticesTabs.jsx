import { useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { newsBoard } from "../data/mockData";

const TABS = [
  { id: "news", label: "News & Updates", icon: "announce" },
  { id: "notices", label: "Notices", icon: "rti" },
  { id: "tenders", label: "Tenders & EOIs", icon: "tender" },
  { id: "circulars", label: "Circulars", icon: "scheme" },
];

export default function NewsNoticesTabs() {
  const [active, setActive] = useState("news");
  const items = newsBoard[active] || [];

  return (
    <section id="notices" className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading
            eyebrow="Information Centre"
            title="News, notices & tenders"
            description="Authoritative communications from the organisation, refreshed daily."
          />
          <a
            href="#"
            className="mb-10 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            View archive
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>

        <div className="rounded-xl ring-1 ring-ink-100 overflow-hidden bg-white">
          <div
            role="tablist"
            aria-label="Information categories"
            className="flex flex-wrap gap-0 border-b border-ink-100 bg-ink-50"
          >
            {TABS.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${t.id}`}
                  id={`tab-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ink-900 bg-white"
                      : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  <Icon name={t.icon} className="w-4 h-4" />
                  <span>{t.label}</span>
                  <span
                    className={`absolute left-3 right-3 bottom-0 h-0.5 rounded-t-full transition-all ${
                      isActive ? "bg-brand-500" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`tabpanel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="divide-y divide-ink-100"
          >
            {items.map((item) => (
              <a
                key={item.id}
                href="#"
                className="group flex items-start sm:items-center gap-4 px-5 sm:px-6 py-4 hover:bg-brand-50/60 transition-colors"
              >
                <span className="shrink-0 inline-flex flex-col items-center justify-center w-16 sm:w-20 rounded-md bg-ink-50 ring-1 ring-ink-100 px-2 py-1.5 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-ink-500">
                    {item.date.split(" ")[1]}
                  </span>
                  <span className="text-base font-semibold text-ink-900 leading-none">
                    {item.date.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-ink-500">
                    {item.date.split(" ")[2]}
                  </span>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-[15px] text-ink-800 leading-snug group-hover:text-ink-900">
                    {item.text}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2">
                    {item.isNew && (
                      <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-india-green-500 text-white">
                        New
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-brand-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more
                      <Icon name="arrowRight" className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
                <Icon
                  name="external"
                  className="hidden sm:inline w-4 h-4 text-ink-300 group-hover:text-brand-600 shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
