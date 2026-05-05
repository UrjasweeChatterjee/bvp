import { useState } from "react";
import Container from "./Container";
import Emblem from "./Emblem";
import Icon from "./Icon";
import { org } from "../data/mockData";

export default function BrandingHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="bg-white">
      <Container className="flex items-center justify-between gap-6 py-4 sm:py-5">
        <a
          href="#home"
          className="flex items-center gap-3 sm:gap-4 group min-w-0"
        >
          <span className="inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-200 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_full-1024x911.jpg"
              alt="BVP Logo"
              className="w-full h-full object-contain"
            />
          </span>
          <span className="flex flex-col min-w-0 leading-tight">
            <span className="font-devnagari text-sm sm:text-base text-ink-700 truncate">
              {org.nameHi}
            </span>
            <span className="text-lg sm:text-2xl font-semibold text-ink-900 tracking-tight truncate">
              {org.nameEn}
            </span>
            <span className="hidden sm:inline text-xs text-ink-500">
              {org.taglineEn}
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3 pl-6 border-l border-ink-100">
            <Emblem className="w-10 h-10 text-brand-600" spinning />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                A unit affiliated to
              </p>
              <p className="text-sm font-semibold text-ink-800">
                Govt. of India
              </p>
              <p className="font-devnagari text-[11px] text-ink-500">
                भारत सरकार
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-700 ring-1 ring-ink-100 hover:bg-ink-100 transition-colors"
          >
            <Icon name={searchOpen ? "close" : "search"} className="w-5 h-5" />
          </button>
        </div>
      </Container>

      {searchOpen && (
        <div className="border-t border-ink-100 bg-ink-50/60 animate-fade-in">
          <Container className="py-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              role="search"
              className="flex items-center gap-2"
            >
              <label htmlFor="site-search" className="sr-only">
                Search the site
              </label>
              <div className="relative flex-1">
                <Icon
                  name="search"
                  className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
                />
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search schemes, notices, services…"
                  className="w-full rounded-md bg-white pl-9 pr-3 py-2 text-sm ring-1 ring-ink-200 focus:outline-none focus:ring-2 focus:ring-brand-400"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                Search
              </button>
            </form>
          </Container>
        </div>
      )}
    </div>
  );
}
