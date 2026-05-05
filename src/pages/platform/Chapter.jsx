import { useState } from "react";
import PlatformLayout from "../../components/platform/PlatformLayout";
import {
  Card,
  PlatformSectionHeading,
  SkeletonRows,
  BtnPrimary,
  BtnSecondary,
} from "../../components/platform/UIKit";
import { useFetch } from "../../hooks/useApp";
import { chapterService } from "../../services/api";
import { members } from "../../data/networkingData";

function AttendanceBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-1 ${
        status === "Present"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status === "Present" ? "✓ Present" : "✗ Absent"}
    </span>
  );
}

export default function Chapter() {
  const { data: chapterData, loading } = useFetch(chapterService.getChapter);
  const [markingId, setMarkingId] = useState(null);
  const [attendance, setAttendance] = useState({});

  const toggleAttendance = async (meetingId, current) => {
    const next = current === "Present" ? "Absent" : "Present";
    setMarkingId(meetingId);
    await chapterService.markAttendance(meetingId, next);
    setAttendance((prev) => ({ ...prev, [meetingId]: next }));
    setMarkingId(null);
  };

  return (
    <PlatformLayout title="Chapter & Meetings" breadcrumb="BVP Platform / Chapter">
      {loading ? (
        <SkeletonRows count={3} />
      ) : chapterData ? (
        <>
          {/* Chapter Info */}
          <Card className="p-5 mb-6">
            <div className="flex flex-wrap gap-4 items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🏛️</span>
                  <h2 className="text-lg font-bold text-ink-800">{chapterData.name}</h2>
                </div>
                <p className="text-sm text-ink-500">📍 {chapterData.city}</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-ink-500">
                <p>🗓️ {chapterData.meetingDay} at {chapterData.meetingTime}</p>
                <p>📌 {chapterData.meetingVenue}</p>
                <p>🏅 President: <span className="font-semibold text-ink-700">{chapterData.president}</span></p>
                <p>👥 Members: <span className="font-semibold text-ink-700">{chapterData.memberCount}</span></p>
                <p>📅 Est. {chapterData.established}</p>
              </div>
            </div>
          </Card>

          {/* Meetings */}
          <Card className="mb-6 overflow-hidden">
            <PlatformSectionHeading
              title="Weekly Meetings"
              action={<BtnPrimary>📅 Schedule Meeting</BtnPrimary>}
            />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-ink-50 border-b border-ink-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-ink-500 uppercase tracking-wide">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-ink-500 uppercase tracking-wide">Meeting</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-ink-500 uppercase tracking-wide">Attendance</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-ink-500 uppercase tracking-wide">My Status</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-50">
                  {chapterData.meetings.map((m) => {
                    const myStatus = attendance[m.id] || m.myStatus;
                    return (
                      <tr key={m.id} className="hover:bg-ink-50/50 transition-colors">
                        <td className="px-4 py-3 text-ink-600 whitespace-nowrap">
                          {new Date(m.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3 text-ink-800 font-medium">{m.title}</td>
                        <td className="px-4 py-3 text-ink-600">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs">
                              {m.attendees}/{m.total}
                            </span>
                            <div className="flex-1 max-w-16 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-india-green-500 rounded-full"
                                style={{ width: `${(m.attendees / m.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <AttendanceBadge status={myStatus} />
                        </td>
                        <td className="px-4 py-3">
                          <BtnSecondary
                            onClick={() => toggleAttendance(m.id, myStatus)}
                            className="text-xs py-1 px-2"
                          >
                            {markingId === m.id
                              ? "Saving…"
                              : myStatus === "Present"
                              ? "Mark Absent"
                              : "Mark Present"}
                          </BtnSecondary>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Members List */}
          <Card className="overflow-hidden">
            <div className="px-5 py-4 border-b border-ink-100">
              <PlatformSectionHeading title={`Chapter Members (${members.length + 1})`} />
            </div>
            <div className="divide-y divide-ink-50">
              {members.map((m) => (
                <div key={m.id} className="flex items-center gap-3 px-5 py-3 hover:bg-ink-50/50 transition-colors">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-ink-100"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink-800 truncate">{m.name}</p>
                    <p className="text-xs text-ink-400 truncate">{m.businessName}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-ink-600">{m.industry}</p>
                    <p className="text-xs text-ink-400">Attendance: {m.attendance}%</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      ) : (
        <p className="text-ink-400">Could not load chapter data.</p>
      )}
    </PlatformLayout>
  );
}
