"use client";

import { useState, useEffect } from "react";
import { X, Copy, Check } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  score: number;
  level: string;
  archetypeName?: string;
}

export default function ShareModal({ open, onClose, score, level, archetypeName }: Props) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  if (!open) return null;

  const text = archetypeName
    ? `I'm "${archetypeName}" on the AI Job Archetype quiz. ${level} exposure, ${score}/36. What's yours?`
    : `I just took the AI Job Archetype quiz — my exposure is ${level} (${score}/36). What's yours?`;
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      name: "X / Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      bg: "bg-black hover:bg-slate-800",
      text: "text-white",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      bg: "bg-emerald-500 hover:bg-emerald-600",
      text: "text-white",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bg: "bg-[#0a66c2] hover:bg-[#084d96]",
      text: "text-white",
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      bg: "bg-sky-500 hover:bg-sky-600",
      text: "text-white",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = `${text} ${url}`;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md p-5 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Share your result</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-sm text-slate-500 mb-4">
          {text}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bg} ${link.text} text-sm font-semibold py-3 px-4 rounded-xl text-center transition-colors active:scale-[0.98]`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold py-3 px-4 rounded-xl transition-colors active:scale-[0.98]"
        >
          {copied ? (
            <>
              <Check size={16} className="text-emerald-600" /> Link copied
            </>
          ) : (
            <>
              <Copy size={16} /> Copy link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
