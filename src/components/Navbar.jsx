import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Icon from "./Icon";
import { navLinks } from "../data/mockData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-ink-800 text-white shadow-sm">
      <Container className="flex items-center justify-between h-12">

        {/* ✅ Logo added here */}
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_full-1024x911.jpg"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-stretch gap-0 h-full"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative inline-flex items-center px-4 text-[13px] font-medium tracking-wide transition-colors ${isActive
                    ? "text-brand-300"
                    : "text-white/85 hover:text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 bottom-0 h-0.5 rounded-t-full transition-all ${isActive ? "bg-brand-400" : "bg-transparent"
                    }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Icon name={open ? "close" : "menu"} className="w-5 h-5" />
          {open ? "Close" : "Menu"}
        </button>

        <div className="ml-4 hidden sm:flex items-center gap-2">
          <Link
            to="/business"
            className="inline-flex items-center gap-1.5 rounded-md bg-india-green-500/20 ring-1 ring-india-green-500/30 px-3 py-1.5 text-[13px] font-semibold text-india-green-400 hover:bg-india-green-500/30 transition-colors"
          >
            💼 Business Network
          </Link>
          <Link
            to="/platform/dashboard"
            className="inline-flex items-center gap-1.5 rounded-md bg-white/10 ring-1 ring-white/20 px-3 py-1.5 text-[13px] font-semibold text-white hover:bg-white/20 transition-colors"
          >
            🏛️ Member Portal
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-500 px-4 py-1.5 text-[13px] font-semibold text-ink-900 hover:bg-brand-400 transition-colors"
          >
            Get Involved
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`md:hidden bg-ink-800 border-t border-white/10 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <Container className="py-2">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm font-medium text-white/90 rounded hover:bg-white/10"
              >
                <span>{link.label}</span>
                <span className="font-devnagari ml-2 text-xs text-white/50">
                  {link.labelHi}
                </span>
              </a>
            ))}
            <Link
              to="/platform/dashboard"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 ring-1 ring-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              🏛️ Member Portal
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-brand-400"
            >
              Get Involved
            </a>
          </nav>
        </Container>
      </div>
    </div>
  );
}