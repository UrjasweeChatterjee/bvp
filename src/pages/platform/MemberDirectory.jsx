import { useState } from "react";
import PlatformLayout from "../../components/platform/PlatformLayout";
import {
  Card,
  PlatformSectionHeading,
  SkeletonRows,
  EmptyState,
  BtnPrimary,
  BtnSecondary,
} from "../../components/platform/UIKit";
import Modal from "../../components/platform/Modal";
import GiveReferralForm from "../../components/platform/GiveReferralForm";
import { useFetch } from "../../hooks/useApp";
import { membersService } from "../../services/api";
import { industries, locations } from "../../data/networkingData";

function MemberCard({ member, onReferral, onConnect }) {
  return (
    <div className="bg-white rounded-xl ring-1 ring-ink-100 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group">
      {/* Card top gradient */}
      <div className="h-1.5 bg-gradient-to-r from-saffron-500 via-white to-india-green-500" />

      <div className="p-5">
        <div className="flex items-start gap-3">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-ink-100 shrink-0"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-ink-800 leading-snug truncate">
              {member.name}
            </h3>
            <p className="text-xs font-medium text-brand-600 mt-0.5 truncate">
              {member.businessName}
            </p>
            <p className="text-xs text-ink-400 mt-0.5">
              {member.industry}
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 text-[11px] text-ink-500 bg-ink-50 rounded-full px-2 py-0.5">
            📍 {member.location}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-ink-500 bg-ink-50 rounded-full px-2 py-0.5">
            🏛️ {member.chapter.split(" Chapter")[0]}
          </span>
        </div>

        {/* Services */}
        <div className="mt-3">
          <p className="text-[11px] text-ink-400 font-medium uppercase tracking-wide mb-1.5">
            Services
          </p>
          <div className="flex flex-wrap gap-1">
            {member.services.slice(0, 3).map((s) => (
              <span
                key={s}
                className="text-[11px] bg-brand-50 text-brand-700 rounded px-2 py-0.5 font-medium ring-1 ring-brand-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onConnect(member)}
            className="flex-1 rounded-lg bg-ink-800 text-white text-xs font-semibold py-2 hover:bg-ink-700 transition-colors"
          >
            🔗 Connect
          </button>
          <button
            onClick={() => onReferral(member)}
            className="flex-1 rounded-lg bg-brand-500 text-ink-900 text-xs font-semibold py-2 hover:bg-brand-400 transition-colors"
          >
            🤝 Send Referral
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MemberDirectory() {
  const [filters, setFilters] = useState({ industry: "All Industries", location: "All Locations", search: "" });
  const { data: members, loading, refetch } = useFetch(
    () => membersService.getAll(filters),
    [filters.industry, filters.location, filters.search]
  );

  const [referralModal, setReferralModal] = useState(false);
  const [connectModal, setConnectModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleReferral = (member) => {
    setSelectedMember(member);
    setReferralModal(true);
  };
  const handleConnect = (member) => {
    setSelectedMember(member);
    setConnectModal(true);
  };

  return (
    <PlatformLayout title="Member Directory" breadcrumb="BVP Platform / Member Directory">
      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            id="dir-search"
            placeholder="🔍 Search by name or business…"
            value={filters.search}
            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
            className="flex-1 rounded-lg ring-1 ring-ink-200 px-3 py-2 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
          <select
            id="dir-industry"
            value={filters.industry}
            onChange={(e) => setFilters((f) => ({ ...f, industry: e.target.value }))}
            className="rounded-lg ring-1 ring-ink-200 px-3 py-2 text-sm text-ink-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            {industries.map((ind) => (
              <option key={ind}>{ind}</option>
            ))}
          </select>
          <select
            id="dir-location"
            value={filters.location}
            onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))}
            className="rounded-lg ring-1 ring-ink-200 px-3 py-2 text-sm text-ink-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>
        {members && (
          <p className="text-xs text-ink-400 mt-3">
            Showing <strong>{members.length}</strong> member{members.length !== 1 ? "s" : ""}
          </p>
        )}
      </Card>

      {/* Member Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton h-52 rounded-xl" />
          ))}
        </div>
      ) : members && members.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m) => (
            <MemberCard
              key={m.id}
              member={m}
              onReferral={handleReferral}
              onConnect={handleConnect}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon="🔍"
          title="No members found"
          description="Try adjusting your filters."
        />
      )}

      {/* Send Referral Modal */}
      <Modal
        isOpen={referralModal}
        onClose={() => setReferralModal(false)}
        title="🤝 Send a Referral"
      >
        <GiveReferralForm
          preselectedMemberId={selectedMember?.id}
          onSuccess={() => setReferralModal(false)}
          onCancel={() => setReferralModal(false)}
        />
      </Modal>

      {/* Connect Modal */}
      <Modal
        isOpen={connectModal}
        onClose={() => setConnectModal(false)}
        title="🔗 Connect with Member"
        size="sm"
      >
        {selectedMember && (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <img
              src={selectedMember.avatar}
              alt={selectedMember.name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-brand-200"
            />
            <div>
              <h3 className="text-base font-bold text-ink-800">{selectedMember.name}</h3>
              <p className="text-sm text-brand-600">{selectedMember.businessName}</p>
              <p className="text-xs text-ink-400 mt-1">{selectedMember.email}</p>
              <p className="text-xs text-ink-400">{selectedMember.phone}</p>
            </div>
            <div className="flex gap-2 w-full">
              <a
                href={`mailto:${selectedMember.email}`}
                className="flex-1 rounded-lg bg-ink-800 text-white text-sm font-semibold py-2 text-center hover:bg-ink-700 transition-colors"
              >
                ✉️ Email
              </a>
              <a
                href={`tel:${selectedMember.phone}`}
                className="flex-1 rounded-lg bg-brand-500 text-ink-900 text-sm font-semibold py-2 text-center hover:bg-brand-400 transition-colors"
              >
                📞 Call
              </a>
            </div>
          </div>
        )}
      </Modal>
    </PlatformLayout>
  );
}
