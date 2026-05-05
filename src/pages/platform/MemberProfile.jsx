import { useState } from "react";
import PlatformLayout from "../../components/platform/PlatformLayout";
import { Card, BtnPrimary, BtnSecondary } from "../../components/platform/UIKit";
import { useApp } from "../../context/AppContext";
import { membersService } from "../../services/api";

export default function MemberProfile() {
  const { state } = useApp();
  const user = state.user;

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    businessName: user?.businessName || "",
    industry: user?.industry || "",
    services: user?.services?.join(", ") || "",
  });

  if (!user) {
    return (
      <PlatformLayout title="My Profile" breadcrumb="BVP Platform / Profile">
        <div className="skeleton h-64 rounded-xl" />
      </PlatformLayout>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    await membersService.updateProfile(user.id, {
      businessName: form.businessName,
      industry: form.industry,
      services: form.services.split(",").map((s) => s.trim()).filter(Boolean),
    });
    setSaving(false);
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <PlatformLayout title="My Profile" breadcrumb="BVP Platform / Profile">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — Avatar & identity */}
        <Card className="p-6 flex flex-col items-center text-center gap-3">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-28 h-28 rounded-full object-cover ring-4 ring-brand-200 shadow-lg"
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-india-green-500 ring-2 ring-white" title="Active member" />
          </div>
          <div>
            <h2 className="text-base font-bold text-ink-800">{user.name}</h2>
            <p className="text-xs text-ink-500 font-devnagari">{user.nameHi}</p>
            <p className="text-xs font-semibold text-brand-600 mt-1">{user.role}</p>
            <p className="text-xs text-ink-400">{user.chapter}</p>
          </div>

          <div className="w-full border-t border-ink-100 pt-3 text-left space-y-2">
            <p className="text-xs text-ink-500 flex items-center gap-2">
              ✉️ <span className="truncate">{user.email}</span>
            </p>
            <p className="text-xs text-ink-500 flex items-center gap-2">
              📞 {user.phone}
            </p>
            <p className="text-xs text-ink-500 flex items-center gap-2">
              📅 Member since {user.memberSince}
            </p>
            <p className="text-xs text-ink-500 flex items-center gap-2">
              📊 Attendance: <strong className="text-india-green-600">{user.attendance}%</strong>
            </p>
          </div>
        </Card>

        {/* Right — Business Info */}
        <div className="lg:col-span-2 space-y-4">
          {/* Existing profile card */}
          <Card className="p-5">
            <h3 className="text-sm font-semibold text-ink-700 mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-0.5">Full Name</p>
                <p className="text-ink-800 font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-0.5">Role</p>
                <p className="text-ink-800 font-medium">{user.role}</p>
              </div>
              <div>
                <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-0.5">Chapter</p>
                <p className="text-ink-800 font-medium">{user.chapter}</p>
              </div>
              <div>
                <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-0.5">Member Since</p>
                <p className="text-ink-800 font-medium">{user.memberSince}</p>
              </div>
            </div>
          </Card>

          {/* Business Info section (NEW) */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-ink-700">
                🏢 Business Info
                <span className="ml-2 text-[10px] text-brand-600 bg-brand-50 rounded px-1.5 py-0.5 font-medium">
                  BNI Feature
                </span>
              </h3>
              {!editing && (
                <BtnSecondary onClick={() => setEditing(true)} className="text-xs py-1">
                  ✏️ Edit
                </BtnSecondary>
              )}
            </div>

            {saved && (
              <div className="mb-3 text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 font-medium">
                ✅ Business info updated successfully!
              </div>
            )}

            {editing ? (
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label htmlFor="prof-businessName" className="block text-xs font-medium text-ink-600 mb-1">
                    Business Name
                  </label>
                  <input
                    id="prof-businessName"
                    name="businessName"
                    type="text"
                    value={form.businessName}
                    onChange={handleChange}
                    className="w-full rounded-lg ring-1 ring-ink-200 px-3 py-2 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400"
                    placeholder="e.g. Mehta Legal Associates"
                  />
                </div>

                <div>
                  <label htmlFor="prof-industry" className="block text-xs font-medium text-ink-600 mb-1">
                    Industry / Category
                  </label>
                  <input
                    id="prof-industry"
                    name="industry"
                    type="text"
                    value={form.industry}
                    onChange={handleChange}
                    className="w-full rounded-lg ring-1 ring-ink-200 px-3 py-2 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400"
                    placeholder="e.g. Legal Services"
                  />
                </div>

                <div>
                  <label htmlFor="prof-services" className="block text-xs font-medium text-ink-600 mb-1">
                    Services Offered
                    <span className="ml-1 text-ink-400 font-normal">(comma-separated)</span>
                  </label>
                  <textarea
                    id="prof-services"
                    name="services"
                    rows={2}
                    value={form.services}
                    onChange={handleChange}
                    className="w-full rounded-lg ring-1 ring-ink-200 px-3 py-2 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
                    placeholder="e.g. Corporate Law, Contract Drafting, Compliance Advisory"
                  />
                </div>

                <div className="flex gap-3">
                  <BtnPrimary type="submit" loading={saving} className="flex-1 justify-center">
                    💾 Save Changes
                  </BtnPrimary>
                  <BtnSecondary onClick={() => setEditing(false)}>Cancel</BtnSecondary>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-0.5">Business Name</p>
                  <p className="text-sm font-semibold text-ink-800">{user.businessName}</p>
                </div>
                <div>
                  <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-0.5">Industry / Category</p>
                  <p className="text-sm font-semibold text-ink-800">{user.industry}</p>
                </div>
                <div>
                  <p className="text-xs text-ink-400 font-medium uppercase tracking-wide mb-1.5">Services Offered</p>
                  <div className="flex flex-wrap gap-1.5">
                    {user.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-brand-50 text-brand-700 rounded px-2 py-1 font-medium ring-1 ring-brand-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </PlatformLayout>
  );
}
