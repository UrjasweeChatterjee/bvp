import PlatformLayout from "../../components/platform/PlatformLayout";
import { Card, SkeletonRows, BtnPrimary } from "../../components/platform/UIKit";
import { useFetch } from "../../hooks/useApp";
import { useApp } from "../../context/AppContext";
import { notificationsService } from "../../services/api";

const iconMap = {
  referral: "🤝",
  update: "🔄",
  meeting: "📅",
  success: "✅",
  default: "🔔",
};

const typeLabels = {
  referral_received: "Referral",
  status_update: "Status Update",
  meeting_reminder: "Meeting",
  referral_converted: "Conversion",
};

export default function Notifications() {
  const { state, markNotifRead, markAllRead } = useApp();
  const { loading } = useFetch(notificationsService.getAll);

  const notifications = state.notifications;
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <PlatformLayout title="Notifications" breadcrumb="BVP Platform / Notifications">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-ink-800">All Notifications</h2>
            {unread > 0 && (
              <p className="text-xs text-ink-400">
                {unread} unread notification{unread !== 1 ? "s" : ""}
              </p>
            )}
          </div>
          {unread > 0 && (
            <BtnPrimary onClick={markAllRead} className="text-xs py-1.5 px-3">
              ✓ Mark all read
            </BtnPrimary>
          )}
        </div>

        {loading ? (
          <SkeletonRows count={5} />
        ) : notifications.length === 0 ? (
          <Card className="py-16 text-center">
            <p className="text-4xl mb-3">🔔</p>
            <p className="text-sm font-semibold text-ink-700">All caught up!</p>
            <p className="text-xs text-ink-400">No notifications at the moment.</p>
          </Card>
        ) : (
          <Card className="divide-y divide-ink-100 overflow-hidden">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => !notif.read && markNotifRead(notif.id)}
                className={`flex gap-4 px-5 py-4 cursor-pointer hover:bg-ink-50/50 transition-colors ${
                  !notif.read ? "bg-brand-50/40" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    !notif.read ? "bg-brand-100" : "bg-ink-100"
                  }`}
                >
                  {iconMap[notif.icon] || iconMap.default}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p
                        className={`text-sm font-semibold leading-snug ${
                          notif.read ? "text-ink-600" : "text-ink-800"
                        }`}
                      >
                        {notif.title}
                      </p>
                      <span className="text-[10px] font-medium text-brand-600 bg-brand-50 rounded px-1.5 py-0.5">
                        {typeLabels[notif.type] || "Update"}
                      </span>
                    </div>
                    {!notif.read && (
                      <span className="shrink-0 w-2 h-2 rounded-full bg-brand-500 mt-1" />
                    )}
                  </div>
                  <p className="text-xs text-ink-500 mt-1.5 leading-relaxed">
                    {notif.message}
                  </p>
                  <p className="text-[11px] text-ink-300 mt-1.5">{notif.time}</p>
                </div>
              </div>
            ))}
          </Card>
        )}
      </div>
    </PlatformLayout>
  );
}
