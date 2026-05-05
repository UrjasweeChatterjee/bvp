/**
 * BVP API Service Layer
 * Uses mock data with simulated async delays.
 * Swap the mock implementations with real axios calls when the backend is ready.
 */

import axios from "axios";
import {
  members,
  referrals,
  dashboardStats,
  chapter,
  notifications,
  networkingEvents,
  currentUser,
} from "../data/networkingData";

const BASE_URL = import.meta.env.VITE_API_URL || "https://api.bvp.gov.in/v1";

// ── Axios instance (for real API calls later) ─────────────────────────────
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// ── Helper: simulate network latency ──────────────────────────────────────
const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

// ── Auth ──────────────────────────────────────────────────────────────────
export const authService = {
  getCurrentUser: async () => {
    await delay();
    return { success: true, data: currentUser };
  },
  login: async (email, password) => {
    await delay(600);
    if (email && password) return { success: true, data: currentUser };
    return { success: false, error: "Invalid credentials" };
  },
};

// ── Members ───────────────────────────────────────────────────────────────
export const membersService = {
  getAll: async (filters = {}) => {
    await delay();
    let result = [...members];
    if (filters.industry && filters.industry !== "All Industries")
      result = result.filter((m) => m.industry === filters.industry);
    if (filters.location && filters.location !== "All Locations")
      result = result.filter((m) => m.location === filters.location);
    if (filters.search)
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          m.businessName.toLowerCase().includes(filters.search.toLowerCase())
      );
    return { success: true, data: result };
  },
  getById: async (id) => {
    await delay();
    const member = members.find((m) => m.id === id);
    if (!member) return { success: false, error: "Member not found" };
    return { success: true, data: member };
  },
  updateProfile: async (id, payload) => {
    await delay(600);
    return { success: true, data: { ...currentUser, ...payload } };
  },
};

// ── Referrals ─────────────────────────────────────────────────────────────
export const referralsService = {
  getAll: async () => {
    await delay();
    return { success: true, data: referrals };
  },
  getGiven: async () => {
    await delay();
    return { success: true, data: referrals.filter((r) => r.type === "given") };
  },
  getReceived: async () => {
    await delay();
    return { success: true, data: referrals.filter((r) => r.type === "received") };
  },
  create: async (payload) => {
    await delay(700);
    const newRef = {
      id: `r${Date.now()}`,
      fromId: "u0",
      fromName: currentUser.name,
      status: "Given",
      date: new Date().toISOString().split("T")[0],
      type: "given",
      ...payload,
    };
    return { success: true, data: newRef };
  },
  updateStatus: async (id, status) => {
    await delay(500);
    return { success: true, data: { id, status } };
  },
};

// ── Dashboard ─────────────────────────────────────────────────────────────
export const dashboardService = {
  getStats: async () => {
    await delay();
    return { success: true, data: dashboardStats };
  },
};

// ── Chapter & Meetings ────────────────────────────────────────────────────
export const chapterService = {
  getChapter: async () => {
    await delay();
    return { success: true, data: chapter };
  },
  markAttendance: async (meetingId, status) => {
    await delay(500);
    return { success: true, data: { meetingId, status } };
  },
};

// ── Events ────────────────────────────────────────────────────────────────
export const eventsService = {
  getAll: async () => {
    await delay();
    return { success: true, data: networkingEvents };
  },
  getById: async (id) => {
    await delay();
    const ev = networkingEvents.find((e) => e.id === id);
    if (!ev) return { success: false, error: "Event not found" };
    return { success: true, data: ev };
  },
  rsvp: async (id) => {
    await delay(500);
    return { success: true, data: { id, rsvpd: true } };
  },
};

// ── Notifications ─────────────────────────────────────────────────────────
export const notificationsService = {
  getAll: async () => {
    await delay();
    return { success: true, data: notifications };
  },
  markRead: async (id) => {
    await delay(300);
    return { success: true, data: { id, read: true } };
  },
  markAllRead: async () => {
    await delay(300);
    return { success: true };
  },
};
