import { useState } from "react";
import { members } from "../../data/networkingData";
import { referralsService } from "../../services/api";
import { BtnPrimary, BtnSecondary } from "./UIKit";

const initialValues = {
  toId: "",
  description: "",
  businessValue: "",
};

export default function GiveReferralForm({ onSuccess, onCancel, preselectedMemberId }) {
  const [values, setValues] = useState({
    ...initialValues,
    toId: preselectedMemberId || "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const selectedMember = members.find((m) => m.id === values.toId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.toId || !values.description || !values.businessValue) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await referralsService.create({
        toId: values.toId,
        toName: selectedMember?.name || "",
        description: values.description,
        businessValue: Number(values.businessValue),
      });
      if (res.success) {
        setDone(true);
        setTimeout(() => {
          onSuccess?.(res.data);
        }, 1500);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
        <span className="text-5xl">🎉</span>
        <h3 className="text-lg font-semibold text-ink-800">Referral Sent!</h3>
        <p className="text-sm text-ink-500">
          Your referral to <strong>{selectedMember?.name}</strong> has been submitted successfully.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Select Member */}
      <div>
        <label htmlFor="ref-toId" className="block text-sm font-medium text-ink-700 mb-1">
          Select Member <span className="text-red-500">*</span>
        </label>
        <select
          id="ref-toId"
          name="toId"
          value={values.toId}
          onChange={handleChange}
          disabled={!!preselectedMemberId}
          className="w-full rounded-lg ring-1 ring-ink-200 bg-white px-3 py-2.5 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400 disabled:bg-ink-50"
        >
          <option value="">— Choose a member —</option>
          {members.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} · {m.businessName}
            </option>
          ))}
        </select>
      </div>

      {/* Selected member preview */}
      {selectedMember && (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-50 ring-1 ring-brand-200">
          <img
            src={selectedMember.avatar}
            alt={selectedMember.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-ink-800">{selectedMember.name}</p>
            <p className="text-xs text-ink-500">{selectedMember.businessName} · {selectedMember.industry}</p>
          </div>
        </div>
      )}

      {/* Description */}
      <div>
        <label htmlFor="ref-desc" className="block text-sm font-medium text-ink-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="ref-desc"
          name="description"
          value={values.description}
          onChange={handleChange}
          rows={3}
          placeholder="Briefly describe the referral opportunity…"
          className="w-full rounded-lg ring-1 ring-ink-200 bg-white px-3 py-2.5 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
        />
      </div>

      {/* Business Value */}
      <div>
        <label htmlFor="ref-value" className="block text-sm font-medium text-ink-700 mb-1">
          Estimated Business Value (₹) <span className="text-red-500">*</span>
        </label>
        <input
          id="ref-value"
          name="businessValue"
          type="number"
          min="0"
          value={values.businessValue}
          onChange={handleChange}
          placeholder="e.g. 50000"
          className="w-full rounded-lg ring-1 ring-ink-200 bg-white px-3 py-2.5 text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}

      <div className="flex gap-3 pt-1">
        <BtnPrimary type="submit" loading={submitting} className="flex-1 justify-center">
          🤝 Submit Referral
        </BtnPrimary>
        <BtnSecondary onClick={onCancel}>Cancel</BtnSecondary>
      </div>
    </form>
  );
}
