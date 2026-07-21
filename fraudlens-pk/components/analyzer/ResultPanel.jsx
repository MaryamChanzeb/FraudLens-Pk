"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { saveReportToSession } from "@/lib/reportStore";
import {
  RiskScoreCard,
  ScamTypeCard,
  ConfidenceCard,
  RedFlagsCard,
  EnglishExplanationCard,
  UrduExplanationCard,
  SafeActionsCard,
  DoNotDoCard,
  AttackChainCard,
  PrivacyWarningCard,
} from "./ResultCards";

export function ResultPanel({ result, panelRef, analyzedText }) {
  const router = useRouter();

  if (!result) return null;

  const tone = result.riskLevel === "HIGH" ? "red" : result.riskLevel === "MEDIUM" ? "amber" : "green";
  const headline =
    result.riskLevel === "HIGH"
      ? "High risk detected"
      : result.riskLevel === "MEDIUM"
      ? "Medium risk detected"
      : "Low risk detected";

  const handleSaveReport = () => {
    // TODO(Mohsin): once a backend exists, this could instead POST the
    // analysis to /api/report and navigate to /report/[id]. For now the
    // result is handed off to the Report page via sessionStorage.
    saveReportToSession(result, analyzedText);
    router.push("/report");
  };

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-14 pt-10 border-t border-white/10"
    >
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <h2 className="text-2xl font-bold text-white">Analysis Result</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge tone={tone}>
            <AlertTriangle className="w-3.5 h-3.5" /> {headline}
          </Badge>
          <Button variant="outline" className="px-4 py-2 text-sm" onClick={handleSaveReport}>
            <FileText className="w-4 h-4" /> Save Report
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <RiskScoreCard level={result.riskLevel} score={result.riskScore} />
        <div className="grid grid-cols-2 gap-5">
          <ScamTypeCard type={result.scamType} />
          <ConfidenceCard confidence={result.confidence} />
        </div>
        <RedFlagsCard flags={result.redFlags} />
        <EnglishExplanationCard text={result.english} />
        <UrduExplanationCard text={result.urdu} />
        <SafeActionsCard actions={result.safeActions} />
        <DoNotDoCard items={result.doNot} />
        <AttackChainCard steps={result.attackChain} />
        <PrivacyWarningCard />
      </div>
    </motion.div>
  );
}
