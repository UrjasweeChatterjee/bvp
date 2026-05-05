import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import NotificationDropdown from "./NotificationDropdown";
import Container from "../Container";
import Emblem from "../Emblem";
import { org } from "../../data/mockData";

const platformNavLinks = [
  { label: "Dashboard", href: "/platform/dashboard", icon: "📊" },
  { label: "My Referrals", href: "/platform/referrals", icon: "🤝" },
  { label: "Directory", href: "/platform/directory", icon: "👥" },
  { label: "Chapter", href: "/platform/chapter", icon: "🏛️" },
  { label: "Events", href: "/platform/events", icon: "📅" },
  { label: "My Profile", href: "/platform/profile", icon: "👤" },
];

export default function PlatformNavbar() {
  const { state, markNotifRead, markAllRead } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const location = useLocation();

  // Close notif dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href) =>
    location.pathname === href ||
    (href !== "/platform/dashboard" && location.pathname.startsWith(href));

  return (
    <nav className="sticky top-0 z-50 bg-ink-800 shadow-lg border-b border-white/10">
      <Container className="flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-300">
            <Emblem className="w-6 h-6" />
          </span>
          <span className="hidden sm:block text-white font-semibold text-sm leading-tight">
            <span className="text-brand-400">{org.shortName}</span>{" "}
            <span className="text-white/70 font-normal">Platform</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {platformNavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-brand-500 text-ink-900"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-xs">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <div ref={notifRef} className="relative">
            <button
              id="notification-bell"
              onClick={() => setNotifOpen((v) => !v)}
              className="relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 text-white transition-colors"
              aria-label={`Notifications${state.unreadCount ? ` (${state.unreadCount} unread)` : ""}`}
            >
              🔔
              {state.unreadCount > 0 && (
                <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold leading-none">
                  {state.unreadCount > 9 ? "9+" : state.unreadCount}
                </span>
              )}
            </button>
            {notifOpen && (
              <NotificationDropdown
                notifications={state.notifications}
                onMarkRead={markNotifRead}
                onMarkAllRead={markAllRead}
                onClose={() => setNotifOpen(false)}
              />
            )}
          </div>

          {/* User Avatar */}
          {state.user && (
            <Link
              to="/platform/profile"
              className="flex items-center gap-2 rounded-full hover:opacity-80 transition-opacity"
            >
              <img
                src={state.user.avatar}
                alt={state.user.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-400"
              />
              <span className="hidden md:block text-xs font-medium text-white/90 max-w-[120px] truncate">
                {state.user.name}
              </span>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 text-white text-lg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-ink-900 border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-3 flex flex-col gap-1">
          {platformNavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-brand-500 text-ink-900"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </nav>
  );
}
