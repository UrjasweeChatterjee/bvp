import { useState } from "react";
import PlatformLayout from "../../components/platform/PlatformLayout";
import {
  Card,
  PlatformSectionHeading,
  StatusBadge,
  SkeletonRows,
  EmptyState,
  formatRupee,
  BtnPrimary,
} from "../../components/platform/UIKit";
import Modal from "../../components/platform/Modal";
import GiveReferralForm from "../../components/platform/GiveReferralForm";
import { useFetch } from "../../hooks/useApp";
import { referralsService } from "../../services/api";

const TABS = ["All", "Given", "Received"];

function ReferralCard({ referral }) {
  const isGiven = referral.type === "given";
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-ink-100 hover:shadow-md transition-shadow">
      <span
        className={`shrink-0 text-2xl mt-0.5 w-10 h-10 flex items-center justify-center rounded-full ${
          isGiven ? "bg-brand-50" : "bg-ink-50"
        }`}
      >
        {isGiven ? "↗️" : "↙️"}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-ink-800">
              {isGiven ? `To: ${referral.toName}` : `From: ${referral.fromName}`}
            </p>
            <p className="text-xs text-ink-400 mt-0.5">
              {new Date(referral.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <StatusBadge status={referral.status} />
        </div>
        <p className="text-xs text-ink-600 mt-2 leading-relaxed line-clamp-2">
          {referral.description}
        </p>
        <p className="text-xs font-semibold text-ink-700 mt-2">
          Value:{" "}
          <span className="text-green-700">{formatRupee(referral.businessValue)}</span>
        </p>
      </div>
    </div>
  );
}

export default function MyReferrals() {
  const { data: referrals, loading } = useFetch(referralsService.getAll);
  const [tab, setTab] = useState("All");
  const [modal, setModal] = useState(false);

  const filtered =
    !referrals
      ? []
      : tab === "Given"
      ? referrals.filter((r) => r.type === "given")
      : tab === "Received"
      ? referrals.filter((r) => r.type === "received")
      : referrals;

  return (
    <PlatformLayout title="My Referrals" breadcrumb="BVP Platform / My Referrals">
      <Card className="overflow-hidden">
        {/* Tabs + CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-ink-100">
          <div className="flex gap-1 bg-ink-100 rounded-lg p-1">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  tab === t
                    ? "bg-white text-ink-800 shadow-sm"
                    : "text-ink-500 hover:text-ink-700"
                }`}
              >
                {t}
                {!loading && referrals && (
                  <span className="ml-1 text-[10px] text-ink-400">
                    (
                    {t === "All"
                      ? referrals.length
                      : referrals.filter((r) => r.type === t.toLowerCase()).length}
                    )
                  </span>
                )}
              </button>
            ))}
          </div>
          <BtnPrimary onClick={() => setModal(true)}>🤝 Give Referral</BtnPrimary>
        </div>

        {/* Content */}
        <div className="p-5">
          {loading ? (
            <SkeletonRows count={4} />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon="🤝"
              title="No referrals yet"
              description="Give your first referral to a fellow BVP member."
              action={
                <BtnPrimary onClick={() => setModal(true)}>
                  Give Referral
                </BtnPrimary>
              }
            />
          ) : (
            <div className="space-y-3">
              {filtered.map((r) => (
                <ReferralCard key={r.id} referral={r} />
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Give Referral Modal */}
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title="🤝 Give a Referral"
      >
        <GiveReferralForm
          onSuccess={() => setModal(false)}
          onCancel={() => setModal(false)}
        />
      </Modal>
    </PlatformLayout>
  );
}
