"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquare, Link2, Image as ImageIcon, QrCode, Upload, Sparkles, Search, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ResultPanel } from "./ResultPanel";
import { DEMO_EXAMPLES, DEMO_WHATSAPP } from "@/data/dummyData";
import { analyzeText } from "@/lib/analyzeText";
import { extractTextFromImage } from "@/lib/ocr";

const TABS = [
  { id: "Message", icon: MessageSquare },
  { id: "URL", icon: Link2 },
  { id: "Screenshot", icon: ImageIcon },
  { id: "QR", icon: QrCode },
];

export function AnalyzerForm() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState("Message");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  // The exact text that produced the current result — needed by "Save Report"
  // so the Report page can show what was actually analyzed.
  const [analyzedText, setAnalyzedText] = useState("");
  const resultRef = useRef(null);

  // Screenshot OCR state (kept isolated so lib/ocr.js can later be swapped
  // for a backend/AI OCR endpoint without touching this component's logic).
  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrError, setOcrError] = useState("");
  const fileInputRef = useRef(null);

  const runAnalysis = (inputText) => {
    const source = inputText !== undefined ? inputText : text;
    setResult(null);
    setLoading(true);
    // Simulate an AI/API call so the UI feels real, even with no backend.
    // TODO(Mohsin): replace this setTimeout + analyzeText() call with a real
    // request to POST /api/analyze, e.g.:
    //   const res = await fetch("/api/analyze", { method: "POST", body: JSON.stringify({ text: source }) });
    //   const dummyResult = await res.json();
    // ResultPanel and the Report page already consume this exact result shape.
    setTimeout(() => {
      const dummyResult = analyzeText(source);
      setResult(dummyResult);
      setAnalyzedText(source);
      setLoading(false);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }, 1200);
  };

  // If the user arrived from "Try Demo" / "Analyze Demo" (?demo=1), prefill + auto-run.
  useEffect(() => {
    if (searchParams.get("demo") === "1") {
      setTab("Message");
      setText(DEMO_WHATSAPP.text);
      runAnalysis(DEMO_WHATSAPP.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const fillDemo = (label) => {
    setTab("Message");
    setText(DEMO_EXAMPLES[label]);
    setResult(null);
  };

  const openFilePicker = () => {
    if (ocrLoading) return;
    fileInputRef.current?.click();
  };

  const handleScreenshotUpload = async (e) => {
    const file = e.target.files?.[0];
    // Allow re-uploading the same file twice in a row.
    e.target.value = "";
    if (!file) return;

    setOcrError("");
    setOcrLoading(true);
    setOcrProgress(0);
    setResult(null);

    try {
      const extracted = await extractTextFromImage(file, setOcrProgress);
      if (!extracted) {
        setOcrError("Couldn't find readable text in that image. Try a clearer screenshot.");
      } else {
        // Drop the extracted text into the same input used for pasted text,
        // so it can be analyzed exactly like any other message.
        setText(extracted);
        setTab("Message");
      }
    } catch (err) {
      setOcrError("Something went wrong reading that image. Please try again.");
    } finally {
      setOcrLoading(false);
    }
  };

  const isUpload = tab === "Screenshot" || tab === "QR";

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <Badge tone="cyan">
        <Search className="w-3.5 h-3.5" /> Analyzer
      </Badge>
      <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white tracking-tight">Analyze Suspicious Content</h1>
      <p className="mt-4 text-slate-400 max-w-2xl">
        Paste a message, URL, or upload a screenshot / QR code. FraudLens PK will break down exactly why it is — or
        isn&apos;t — safe.
      </p>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-1">
        {TABS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-sm font-medium transition-colors border-b-2 -mb-px ${
              tab === id ? "text-accent border-accent" : "text-slate-400 border-transparent hover:text-white"
            }`}
          >
            <Icon className="w-4 h-4" /> {id}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="mt-6">
        {tab === "Screenshot" ? (
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleScreenshotUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={openFilePicker}
              disabled={ocrLoading}
              className="w-full rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] p-12 flex flex-col items-center text-center gap-3 hover:border-accent/40 transition-colors cursor-pointer disabled:cursor-wait"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                {ocrLoading ? (
                  <Loader2 className="w-5 h-5 text-accent animate-spin" />
                ) : (
                  <Upload className="w-5 h-5 text-accent" />
                )}
              </div>
              {ocrLoading ? (
                <>
                  <p className="text-sm font-medium text-slate-200">Extracting text from your screenshot...</p>
                  <p className="text-xs text-slate-500">{ocrProgress}%</p>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium text-slate-200">Click to upload a screenshot</p>
                  <p className="text-xs text-slate-500">
                    Text is extracted right in your browser (OCR) — nothing is uploaded anywhere
                  </p>
                </>
              )}
            </button>
            {ocrError && <p className="mt-3 text-xs text-red-400">{ocrError}</p>}
          </div>
        ) : tab === "QR" ? (
          <div className="rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] p-12 flex flex-col items-center text-center gap-3 hover:border-accent/40 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Upload className="w-5 h-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-slate-200">Drop your QR code image here</p>
            <p className="text-xs text-slate-500">Demo mode — upload is not wired to a backend</p>
          </div>
        ) : (
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={7}
            placeholder="Paste suspicious WhatsApp message, SMS, email or URL..."
          />
        )}
      </div>

      {/* Demo examples */}
      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Try a demo example</p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(DEMO_EXAMPLES).map((label) => (
            <button
              key={label}
              onClick={() => fillDemo(label)}
              className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-slate-300 hover:border-accent/40 hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Analyze button */}
      <div className="mt-8">
        <Button onClick={() => runAnalysis()} disabled={loading || isUpload || !text.trim()}>
          {loading ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-slate-900/30 border-t-slate-900 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" /> Analyze
            </>
          )}
        </Button>
      </div>

      <ResultPanel result={result} panelRef={resultRef} analyzedText={analyzedText} />
    </div>
  );
}
