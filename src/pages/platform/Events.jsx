import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlatformLayout from "../../components/platform/PlatformLayout";
import { Card, SkeletonRows, BtnPrimary, BtnSecondary, EmptyState } from "../../components/platform/UIKit";
import { useFetch } from "../../hooks/useApp";
import { eventsService } from "../../services/api";

const categoryColors = {
  Networking: "bg-brand-100 text-brand-700",
  "Trade Fair": "bg-green-100 text-green-700",
  Workshop: "bg-blue-100 text-blue-700",
  Summit: "bg-purple-100 text-purple-700",
};

function EventCard({ event, onRSVP }) {
  const [rsvpd, setRsvpd] = useState(event.rsvpd);
  const [loading, setLoading] = useState(false);

  const handleRSVP = async () => {
    setLoading(true);
    const res = await eventsService.rsvp(event.id);
    if (res.success) setRsvpd(true);
    setLoading(false);
    onRSVP?.(event.id);
  };

  const pct = Math.round((event.rsvpCount / event.capacity) * 100);

  return (
    <div className="bg-white rounded-xl ring-1 ring-ink-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200">
      <div className="relative h-44 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              categoryColors[event.category] || "bg-ink-100 text-ink-700"
            }`}
          >
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-bold text-ink-800 leading-snug">{event.title}</h3>
        <p className="text-xs text-brand-600 font-medium mt-1">
          📅 {new Date(event.date).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-xs text-ink-500 mt-0.5">🕐 {event.time}</p>
        <p className="text-xs text-ink-500 mt-0.5">📍 {event.venue}</p>

        <p className="text-xs text-ink-600 mt-2 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Capacity bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px] text-ink-400 mb-1">
            <span>{event.rsvpCount} RSVPs</span>
            <span>{event.capacity - event.rsvpCount} spots left</span>
          </div>
          <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-400 rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="mt-4">
          {rsvpd ? (
            <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 rounded-lg px-3 py-2">
              ✅ You're attending!
            </div>
          ) : (
            <BtnPrimary
              onClick={handleRSVP}
              loading={loading}
              className="w-full justify-center"
            >
              📌 RSVP for this event
            </BtnPrimary>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const { data: events, loading, refetch } = useFetch(eventsService.getAll);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Networking", "Trade Fair", "Workshop", "Summit"];

  const filtered =
    !events
      ? []
      : category === "All"
      ? events
      : events.filter((e) => e.category === category);

  return (
    <PlatformLayout title="Events" breadcrumb="BVP Platform / Events">
      {/* Category tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              category === cat
                ? "bg-ink-800 text-white"
                : "bg-white ring-1 ring-ink-200 text-ink-600 hover:bg-ink-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton h-72 rounded-xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState icon="📅" title="No events found" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((ev) => (
            <EventCard key={ev.id} event={ev} onRSVP={refetch} />
          ))}
        </div>
      )}
    </PlatformLayout>
  );
}
