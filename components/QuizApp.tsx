"use client";

import { useState, useCallback } from "react";
import { ChevronLeft } from "lucide-react";
import {
  FIELDS,
  QUESTIONS,
  RISK_RESULTS,
  calculateRisk,
} from "@/lib/quiz-data";
import LandingPage from "./LandingPage";
import ResultPage from "./ResultPage";
import LeadCapture from "./LeadCapture";

type Screen = "landing" | "field" | "quiz" | "lead" | "result";

export interface LeadData {
  name: string;
  email: string;
  whatsapp: string;
  role: string;
  country: string;
  income: string;
  painPoint: string;
  consent: boolean;
}

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [selectedField, setSelectedField] = useState<string>("");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [resultUnlocked, setResultUnlocked] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const { score, level } = calculateRisk(answers);

  const handleStart = useCallback(() => setScreen("field"), []);

  const handleFieldSelect = useCallback((fieldId: string) => {
    setSelectedField(fieldId);
    setCurrentQ(0);
    setAnswers({});
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback(
    (score: number) => {
      const q = QUESTIONS[currentQ];
      const newAnswers = { ...answers, [q.id]: score };
      setAnswers(newAnswers);

      if (currentQ < totalQuestions - 1) {
        setCurrentQ((c) => c + 1);
      } else {
        setScreen("lead");
      }
    },
    [currentQ, answers, totalQuestions]
  );

  const handleBack = useCallback(() => {
    if (currentQ === 0) {
      setScreen("field");
    } else {
      setCurrentQ((c) => c - 1);
    }
  }, [currentQ]);

  const handleLeadSubmit = useCallback(
    async (data: LeadData) => {
      setLeadData(data);
      setResultUnlocked(true);
      setScreen("result");

      // Fire-and-forget — we don't block the user on the network call
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            field: selectedField,
            score,
            level,
            answers,
          }),
        });
      } catch (err) {
        console.error("Failed to submit lead:", err);
      }
    },
    [selectedField, score, level, answers]
  );

  const handleSkipLead = useCallback(() => {
    setResultUnlocked(false);
    setScreen("result");
  }, []);

  const handleRestart = useCallback(() => {
    setScreen("landing");
    setSelectedField("");
    setCurrentQ(0);
    setAnswers({});
    setLeadData(null);
    setResultUnlocked(false);
  }, []);

  if (screen === "landing") return <LandingPage onStart={handleStart} />;

  if (screen === "field") {
    return (
      <FieldSelector
        fields={FIELDS}
        onSelect={handleFieldSelect}
        onBack={() => setScreen("landing")}
      />
    );
  }

  if (screen === "quiz") {
    const question = QUESTIONS[currentQ];
    const progress = ((currentQ) / totalQuestions) * 100;
    return (
      <QuizScreen
        question={question}
        currentQ={currentQ}
        totalQ={totalQuestions}
        progress={progress}
        selectedAnswer={answers[question.id] ?? null}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    );
  }

  if (screen === "lead") {
    return (
      <LeadCapture
        score={score}
        level={level}
        onSubmit={handleLeadSubmit}
        onSkip={handleSkipLead}
      />
    );
  }

  const field = FIELDS.find((f) => f.id === selectedField) ?? FIELDS[FIELDS.length - 1];
  const result = RISK_RESULTS[level];

  return (
    <ResultPage
      score={score}
      level={level}
      result={result}
      field={field}
      answers={answers}
      leadData={leadData}
      resultUnlocked={resultUnlocked}
      onRestart={handleRestart}
    />
  );
}

function FieldSelector({
  fields,
  onSelect,
  onBack,
}: {
  fields: typeof FIELDS;
  onSelect: (id: string) => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-lg mx-auto animate-slide-up">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-slate-500 hover:text-slate-700 mb-6 text-sm transition-colors"
        >
          <ChevronLeft size={16} /> Back
        </button>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-2">
            Step 1 of 2
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">What field are you in?</h2>
          <p className="text-slate-500 text-sm">
            This helps us personalise your results with relevant examples.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {fields.map((f) => (
            <button
              key={f.id}
              onClick={() => onSelect(f.id)}
              className="w-full text-left px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 transition-all font-medium text-slate-800 text-sm active:scale-[0.98]"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuizScreen({
  question,
  currentQ,
  totalQ,
  progress,
  selectedAnswer,
  onAnswer,
  onBack,
}: {
  question: (typeof QUESTIONS)[0];
  currentQ: number;
  totalQ: number;
  progress: number;
  selectedAnswer: number | null;
  onAnswer: (score: number) => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-700 text-sm transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <span className="text-xs text-slate-400 font-medium">
              {currentQ + 1} / {totalQ}
            </span>
          </div>
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div key={question.id} className="animate-slide-up">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
              Question {currentQ + 1}
            </p>
            <h2 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
              {question.question}
            </h2>
            {question.subtext && (
              <p className="text-sm text-slate-500 italic">{question.subtext}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => onAnswer(opt.score)}
                className="w-full text-left px-5 py-4 rounded-xl border-2 border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 transition-all font-medium text-slate-800 active:scale-[0.98] text-sm leading-snug"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
