import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import PlatformLayout from "../../components/platform/PlatformLayout";
import { StatCard, Card, PlatformSectionHeading, SkeletonRows, formatRupee, BtnPrimary } from "../../components/platform/UIKit";
import Modal from "../../components/platform/Modal";
import GiveReferralForm from "../../components/platform/GiveReferralForm";
import { useFetch } from "../../hooks/useApp";
import { dashboardService } from "../../services/api";
import { useApp } from "../../context/AppContext";

export default function Dashboard() {
  const { state } = useApp();
  const { data: stats, loading } = useFetch(dashboardService.getStats);
  const [referralModal, setReferralModal] = useState(false);

  const user = state.user;

  return (
    <PlatformLayout
      title="Dashboard"
      breadcrumb="BVP Platform / Dashboard"
    >
      {/* Welcome Banner */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-ink-800 to-ink-700 p-6 text-white flex items-center justify-between gap-4 shadow-lg">
        <div>
          <p className="text-white/60 text-sm">Welcome back,</p>
          <h2 className="text-xl font-bold mt-0.5">{user?.name || "Member"}</h2>
          <p className="text-white/60 text-xs mt-1">
            {user?.chapter} · {user?.role}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <BtnPrimary onClick={() => setReferralModal(true)}>
            🤝 Give Referral
          </BtnPrimary>
        </div>
      </div>

      {/* Stat Cards */}
      {loading ? (
        <SkeletonRows count={4} />
      ) : stats ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon="🤝"
              label="Referrals Given"
              value={stats.referralsGiven}
              sub="This year"
              color="brand"
            />
            <StatCard
              icon="📥"
              label="Referrals Received"
              value={stats.referralsReceived}
              sub="This year"
              color="blue"
            />
            <StatCard
              icon="📈"
              label="Conversion Rate"
              value={`${stats.conversionRate}%`}
              sub="Given → Converted"
              color="green"
            />
            <StatCard
              icon="💰"
              label="Closed Business"
              value={formatRupee(stats.closedValue)}
              sub="Total value"
              color="purple"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <StatCard
              icon="📅"
              label="Attendance"
              value={`${stats.attendance}%`}
              sub="Meetings this year"
              color="ink"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Bar Chart — Monthly Referrals */}
            <Card className="lg:col-span-2 p-5">
              <PlatformSectionHeading title="Monthly Referrals (Given vs Received)" />
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={stats.monthlyReferrals} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="given" name="Given" fill="#ff9933" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="received" name="Received" fill="#243262" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Pie Chart — Status Breakdown */}
            <Card className="p-5">
              <PlatformSectionHeading title="Status Breakdown" />
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={stats.statusBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                  >
                    {stats.statusBreakdown.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            {/* Line Chart — Closed Business Value */}
            <Card className="lg:col-span-3 p-5">
              <PlatformSectionHeading title="Closed Business Value (₹) — Monthly Trend" />
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={stats.closedByMonth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip formatter={(v) => formatRupee(v)} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    name="Closed Value"
                    stroke="#138808"
                    strokeWidth={2.5}
                    dot={{ fill: "#138808", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </>
      ) : (
        <p className="text-ink-400 text-sm">Could not load dashboard data.</p>
      )}

      {/* Give Referral Modal */}
      <Modal
        isOpen={referralModal}
        onClose={() => setReferralModal(false)}
        title="🤝 Give a Referral"
      >
        <GiveReferralForm
          onSuccess={() => setReferralModal(false)}
          onCancel={() => setReferralModal(false)}
        />
      </Modal>
    </PlatformLayout>
  );
}
