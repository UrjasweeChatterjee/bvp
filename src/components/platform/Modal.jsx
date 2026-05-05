import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, title, children, size = "md" }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeMap = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-3xl",
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`w-full ${sizeMap[size]} bg-white rounded-2xl shadow-2xl ring-1 ring-ink-100 animate-fade-in-up overflow-hidden`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100 bg-ink-50">
          <h2 id="modal-title" className="text-base font-semibold text-ink-800">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-ink-400 hover:bg-ink-100 hover:text-ink-700 transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5 overflow-y-auto max-h-[calc(100vh-12rem)]">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
