import { Link } from "react-router-dom";

const iconMap = {
  referral: "🤝",
  update: "🔄",
  meeting: "📅",
  success: "✅",
  default: "🔔",
};

export default function NotificationDropdown({
  notifications = [],
  onMarkRead,
  onMarkAllRead,
  onClose,
}) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-2xl ring-1 ring-ink-100 z-50 overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-ink-800 text-white">
        <div>
          <h3 className="text-sm font-semibold">Notifications</h3>
          {unread > 0 && (
            <p className="text-xs text-white/60">{unread} unread</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unread > 0 && (
            <button
              onClick={onMarkAllRead}
              className="text-xs text-brand-300 hover:text-brand-200 font-medium"
            >
              Mark all read
            </button>
          )}
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-sm"
            aria-label="Close notifications"
          >
            ✕
          </button>
        </div>
      </div>

      {/* List */}
      <ul className="divide-y divide-ink-100 max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <li className="py-8 text-center text-ink-400 text-sm">
            No notifications yet
          </li>
        ) : (
          notifications.map((notif) => (
            <li
              key={notif.id}
              className={`flex gap-3 px-4 py-3 cursor-pointer hover:bg-ink-50 transition-colors ${
                !notif.read ? "bg-brand-50/50" : ""
              }`}
              onClick={() => !notif.read && onMarkRead(notif.id)}
            >
              <span className="text-xl shrink-0 mt-0.5">
                {iconMap[notif.icon] || iconMap.default}
              </span>
              <div className="min-w-0">
                <p
                  className={`text-sm font-medium leading-snug ${
                    notif.read ? "text-ink-600" : "text-ink-800"
                  }`}
                >
                  {notif.title}
                </p>
                <p className="text-xs text-ink-400 mt-0.5 leading-snug">
                  {notif.message}
                </p>
                <p className="text-[11px] text-ink-300 mt-1">{notif.time}</p>
              </div>
              {!notif.read && (
                <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-brand-500" />
              )}
            </li>
          ))
        )}
      </ul>

      {/* Footer */}
      <div className="border-t border-ink-100 px-4 py-2.5 text-center">
        <Link
          to="/platform/notifications"
          onClick={onClose}
          className="text-xs font-medium text-brand-600 hover:text-brand-700"
        >
          View all notifications →
        </Link>
      </div>
    </div>
  );
}
