"use client";

import { useState } from "react";
import { ChevronRight, Lock } from "lucide-react";
import { INCOME_RANGES, PAIN_POINTS, type RiskLevel, RISK_RESULTS } from "@/lib/quiz-data";
import type { LeadData } from "./QuizApp";

interface Props {
  score: number;
  level: RiskLevel;
  onSubmit: (data: LeadData) => void;
  onSkip: () => void;
}

// Common country dial codes — SEA-first since Sigmaschool's home base is MY,
// then key English-speaking + global markets.
const COUNTRY_CODES: { code: string; label: string }[] = [
  { code: "+60", label: "Malaysia" },
  { code: "+65", label: "Singapore" },
  { code: "+62", label: "Indonesia" },
  { code: "+66", label: "Thailand" },
  { code: "+63", label: "Philippines" },
  { code: "+84", label: "Vietnam" },
  { code: "+91", label: "India" },
  { code: "+1", label: "US / Canada" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
  { code: "+64", label: "New Zealand" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+34", label: "Spain" },
  { code: "+39", label: "Italy" },
  { code: "+81", label: "Japan" },
  { code: "+82", label: "South Korea" },
  { code: "+86", label: "China" },
  { code: "+852", label: "Hong Kong" },
  { code: "+886", label: "Taiwan" },
  { code: "+971", label: "UAE" },
  { code: "+966", label: "Saudi Arabia" },
];

export default function LeadCapture({ score, level, onSubmit, onSkip }: Props) {
  const result = RISK_RESULTS[level];
  const [form, setForm] = useState<LeadData>({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    country: "",
    income: "",
    painPoint: "",
    consent: false,
  });
  // Split phone into code + digits in the UI; combined as `${code} ${digits}` on submit.
  const [countryCode, setCountryCode] = useState("+60");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof LeadData, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Please enter a valid email";
    if (!form.consent) e.consent = "Please agree to continue";
    // Phone is optional, but if a number is entered it must be a valid length.
    const digitsOnly = phoneDigits.replace(/\D/g, "");
    if (phoneDigits.trim()) {
      if (digitsOnly.length < 6 || digitsOnly.length > 14) {
        e.whatsapp = "That doesn't look like a complete phone number";
      }
    }
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Combine country code + digits into the single Phone string Airtable expects.
    const digitsOnly = phoneDigits.replace(/\D/g, "");
    const combinedPhone = digitsOnly ? `${countryCode} ${digitsOnly}` : "";
    // Derive country from the country-code dropdown selection
    // so we don't have to ask twice.
    const derivedCountry =
      COUNTRY_CODES.find((c) => c.code === countryCode)?.label ?? "";
    onSubmit({ ...form, whatsapp: combinedPhone, country: derivedCountry });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-lg mx-auto animate-slide-up">
        {/* Score teaser */}
        <div className={`rounded-2xl border-2 ${result.borderColor} ${result.bgColor} p-6 mb-6 text-center`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Your result is ready
          </p>
          <p className={`text-3xl font-extrabold ${result.color} mb-1`}>
            AI Effect: {level}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-2 bg-slate-200 rounded-full w-32 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(score / 36) * 100}%`,
                  backgroundColor: result.gaugeColor,
                }}
              />
            </div>
            <span className="text-sm font-semibold text-slate-600">{score}/36</span>
          </div>
        </div>

        {/* Gate copy */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <Lock size={14} className="text-slate-400" />
            <p className="text-sm font-semibold text-slate-900">
              See your full result
            </p>
          </div>
          <p className="text-sm text-slate-500 pl-6">
            We&apos;ll show you the 3 things that shaped your result, AI tools picked for your
            job, and a simple 30-day plan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm focus:outline-none focus:border-indigo-400 transition-colors"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
            <input
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm focus:outline-none focus:border-indigo-400 transition-colors"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              WhatsApp / phone <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <div className="flex gap-2">
              <select
                aria-label="Country code"
                value={countryCode}
                onChange={(e) => {
                  setCountryCode(e.target.value);
                  if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                }}
                className={`shrink-0 w-[7.5rem] px-3 py-3 rounded-xl border-2 bg-white text-sm font-mono focus:outline-none transition-colors ${
                  errors.whatsapp
                    ? "border-red-300 focus:border-red-400"
                    : "border-slate-200 focus:border-indigo-400"
                }`}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} {c.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="12 345 6789"
                value={phoneDigits}
                onChange={(e) => {
                  setPhoneDigits(e.target.value);
                  if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                }}
                className={`flex-1 min-w-0 px-4 py-3 rounded-xl border-2 bg-white text-sm focus:outline-none transition-colors ${
                  errors.whatsapp
                    ? "border-red-300 focus:border-red-400"
                    : "border-slate-200 focus:border-indigo-400"
                }`}
              />
            </div>
            {errors.whatsapp ? (
              <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
            ) : (
              <p className="text-slate-400 text-xs mt-1">
                Pick your country code, then your number — no need to repeat the code.
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Monthly income <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <select
              value={form.income}
              onChange={(e) => setForm({ ...form, income: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm focus:outline-none focus:border-indigo-400 transition-colors text-slate-700"
            >
              <option value="">Select</option>
              {INCOME_RANGES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Current role <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Marketing Coordinator, Software Engineer"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm focus:outline-none focus:border-indigo-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              What brought you here? <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <select
              value={form.painPoint}
              onChange={(e) => setForm({ ...form, painPoint: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm focus:outline-none focus:border-indigo-400 transition-colors text-slate-700"
            >
              <option value="">Select one</option>
              {PAIN_POINTS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-0.5 w-4 h-4 rounded accent-indigo-600"
            />
            <span className="text-xs text-slate-500 leading-relaxed">
              I agree to receive updates and resources from Sigma School. Unsubscribe anytime, no
              hard feelings.
            </span>
          </label>
          {errors.consent && <p className="text-red-500 text-xs -mt-2">{errors.consent}</p>}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#1a1f5e] hover:bg-[#04121f] text-white font-bold text-base px-6 py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-slate-200 mt-2"
          >
            Show me my full result <ChevronRight size={18} />
          </button>

          <button
            type="button"
            onClick={onSkip}
            className="text-center text-sm text-slate-400 hover:text-slate-600 transition-colors py-1"
          >
            Skip — show basic result only
          </button>
        </form>
      </div>
    </div>
  );
}
