import { useState } from "react";
import Icon from "./Icon";

export default function VideoCard({ title, youtubeId }) {
  const [active, setActive] = useState(false);
  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const embed = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <article className="group rounded-xl overflow-hidden bg-white ring-1 ring-ink-100 hover:ring-brand-300 hover:shadow-md transition-all">
      <div className="relative aspect-video bg-ink-100">
        {active ? (
          <iframe
            src={embed}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 group/play"
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
            />
            <span className="absolute inset-0 bg-ink-900/20 group-hover/play:bg-ink-900/30 transition-colors" />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-ink-900 shadow-lg ring-4 ring-white/40 group-hover/play:scale-110 transition-transform">
                <Icon name="play" className="w-6 h-6 ml-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-ink-900 line-clamp-2">
          {title}
        </h3>
      </div>
    </article>
  );
}
