import { useEffect, useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import { footer, org } from "../data/mockData";

const SIZES = ["sm", "md", "lg"];

function applyTextSize(size) {
  document.documentElement.setAttribute("data-text-size", size);
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export default function TopBar() {
  const [size, setSize] = useState("md");
  const [contrast, setContrast] = useState(false);
  const [hindi, setHindi] = useState(false);

  useEffect(() => applyTextSize(size), [size]);
  useEffect(() => applyTheme(contrast ? "contrast" : "default"), [contrast]);

  const cycleSize = (delta) => {
    const i = SIZES.indexOf(size);
    const next = SIZES[Math.min(SIZES.length - 1, Math.max(0, i + delta))];
    setSize(next);
  };
  const resetSize = () => setSize("md");

  return (
    <div className="bg-ink-900 text-ink-100 text-xs">
      <Container className="flex items-center justify-between gap-3 h-9">

        {/* ✅ Logo added here */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_full-1024x911.jpg"
            alt="Logo"
            className="h-6 w-auto object-contain"
          />

          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <span className="hidden sm:inline text-ink-300">
            {hindi ? "अंतिम अपडेट" : "Last updated"}:&nbsp;
            <span className="text-white font-medium">{org.lastUpdated}</span>
          </span>

          <span className="hidden md:inline text-ink-300 truncate">
            {hindi ? org.affiliationHi : org.affiliationEn}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={`tel:${footer.contact.helpline.replace(/[^\d]/g, "")}`}
            className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10"
          >
            <Icon name="phone" className="w-3.5 h-3.5" />
            <span>Helpline {footer.contact.helpline}</span>
          </a>

          <span className="hidden sm:inline-flex items-center gap-0.5 ml-1 pl-2 border-l border-white/15">
            <button
              type="button"
              onClick={() => cycleSize(-1)}
              aria-label="Decrease text size"
              className="px-1.5 py-0.5 rounded hover:bg-white/10 disabled:opacity-40"
              disabled={size === "sm"}
            >
              A-
            </button>
            <button
              type="button"
              onClick={resetSize}
              aria-label="Reset text size"
              className="px-1.5 py-0.5 rounded hover:bg-white/10 font-medium"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => cycleSize(1)}
              aria-label="Increase text size"
              className="px-1.5 py-0.5 rounded hover:bg-white/10 disabled:opacity-40"
              disabled={size === "lg"}
            >
              A+
            </button>
          </span>

          <button
            type="button"
            onClick={() => setContrast((v) => !v)}
            aria-pressed={contrast}
            aria-label="Toggle high contrast"
            className={`hidden sm:inline-flex items-center justify-center w-7 h-7 ml-1 rounded ${contrast ? "bg-white text-ink-900" : "hover:bg-white/10"
              }`}
            title="High contrast"
          >
            <Icon name="contrast" className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setHindi((v) => !v)}
            aria-pressed={hindi}
            className="inline-flex items-center gap-1 ml-1 px-2 py-1 rounded hover:bg-white/10"
            title="Toggle language"
          >
            <Icon name="globe" className="w-3.5 h-3.5" />
            <span className={hindi ? "font-devnagari" : ""}>
              {hindi ? "EN" : "हिन्दी"}
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}