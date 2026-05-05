import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Public pages
import Home from "./pages/Home";
import BusinessNetwork from "./pages/BusinessNetwork";

// Platform pages
import Dashboard from "./pages/platform/Dashboard";
import MyReferrals from "./pages/platform/MyReferrals";
import MemberDirectory from "./pages/platform/MemberDirectory";
import Chapter from "./pages/platform/Chapter";
import Events from "./pages/platform/Events";
import MemberProfile from "./pages/platform/MemberProfile";
import Notifications from "./pages/platform/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {/* ── Public NGO site ── */}
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<BusinessNetwork />} />

          {/* ── Platform (BNI / Vyapaar Zone features) ── */}
          <Route path="/platform" element={<Navigate to="/platform/dashboard" replace />} />
          <Route path="/platform/dashboard" element={<Dashboard />} />
          <Route path="/platform/referrals" element={<MyReferrals />} />
          <Route path="/platform/directory" element={<MemberDirectory />} />
          <Route path="/platform/chapter" element={<Chapter />} />
          <Route path="/platform/events" element={<Events />} />
          <Route path="/platform/profile" element={<MemberProfile />} />
          <Route path="/platform/notifications" element={<Notifications />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
