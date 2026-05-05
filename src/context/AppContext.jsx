import { createContext, useContext, useReducer, useEffect } from "react";
import { notificationsService, authService } from "../services/api";

// ── Initial State ─────────────────────────────────────────────────────────
const initialState = {
  user: null,
  notifications: [],
  unreadCount: 0,
  loading: true,
};

// ── Reducer ───────────────────────────────────────────────────────────────
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, loading: false };
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload,
        unreadCount: action.payload.filter((n) => !n.read).length,
      };
    case "MARK_READ":
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.payload ? { ...n, read: true } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      };
    case "MARK_ALL_READ":
      return {
        ...state,
        notifications: state.notifications.map((n) => ({ ...n, read: true })),
        unreadCount: 0,
      };
    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────
const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Load user & notifications on mount
    Promise.all([
      authService.getCurrentUser(),
      notificationsService.getAll(),
    ]).then(([userRes, notifRes]) => {
      if (userRes.success) dispatch({ type: "SET_USER", payload: userRes.data });
      if (notifRes.success)
        dispatch({ type: "SET_NOTIFICATIONS", payload: notifRes.data });
    });
  }, []);

  const markNotifRead = (id) => {
    notificationsService.markRead(id);
    dispatch({ type: "MARK_READ", payload: id });
  };

  const markAllRead = () => {
    notificationsService.markAllRead();
    dispatch({ type: "MARK_ALL_READ" });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, markNotifRead, markAllRead }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
