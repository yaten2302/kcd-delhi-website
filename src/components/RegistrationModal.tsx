"use client";

import { useEffect } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center md:p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white md:rounded-2xl shadow-2xl w-full h-full md:h-auto md:max-w-7xl md:max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Register for KCD Delhi 2026
          </h2>
          <div className="flex items-center gap-2">
            <a
              href="https://konfhub.com/kcd-delhi-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
              aria-label="Open in new tab"
              title="Open in new tab"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-64px)] md:max-h-[calc(90vh-64px)]">
          <iframe
            src="https://konfhub.com/widget/kcd-delhi-2026?desc=true&secondaryBg=fffff8&ticketBg=fffff8&borderCl=fffff8&bg=ffffff&fontColor=1e1f24&ticketCl=1e1f24&btnColor=6e3d00&fontFamily=Figtree&borderRadius=10&widget_type=standard&tickets=67969&ticketId=67969%7C1"
            id="konfhub-widget"
            title="Register for KCD Delhi 2026"
            width="100%"
            className="border-0 w-full h-full min-h-[650px]"
          />
        </div>
      </div>
    </div>
  );
}
