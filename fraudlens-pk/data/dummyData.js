// All data in this file is fake/demo data — FraudLens PK has no backend.
// It exists purely so the UI has realistic, consistent content to render.

import {
  MessageSquare,
  Gauge,
  ShieldAlert,
  Languages,
  Flag,
  BookOpen,
  CheckCircle2,
  History as HistoryIcon,
  Lock,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  CreditCard,
  Briefcase,
  Package,
  Gift,
  DollarSign,
  TrendingUp,
  QrCode,
  Bug,
  UserX,
} from "lucide-react";

export const STATS = [
  { label: "Messages Scanned", value: 25000, suffix: "+", icon: MessageSquare },
  { label: "Detection Accuracy", value: 94, suffix: "%", icon: Gauge },
  { label: "Scam Categories", value: 10, suffix: "+", icon: ShieldAlert },
  { label: "Languages Supported", value: 2, suffix: "", icon: Languages, sub: "English + Urdu" },
];

export const FEATURES = [
  { title: "Risk Score", desc: "Instant numeric score showing how dangerous a message really is.", icon: Gauge },
  { title: "Scam Detection", desc: "Classifies content into 10+ known Pakistani scam patterns.", icon: ShieldAlert },
  { title: "Red Flag Analysis", desc: "Highlights the exact phrases and links that gave it away.", icon: Flag },
  { title: "Urdu Explanation", desc: "Plain Roman Urdu breakdown so anyone can understand the risk.", icon: Languages },
  { title: "English Explanation", desc: "Clear English summary for reports and sharing.", icon: BookOpen },
  { title: "Safe Actions", desc: "A short checklist of exactly what to do next.", icon: CheckCircle2 },
  { title: "History", desc: "Every scan saved so you can track patterns over time.", icon: HistoryIcon },
  { title: "Privacy First", desc: "Nothing you paste is stored or shared beyond your session.", icon: Lock },
];

export const STEPS = [
  { title: "Paste suspicious message or URL", desc: "Drop in a WhatsApp text, SMS, email, or link.", icon: MessageSquare },
  { title: "AI analyzes", desc: "Rule-based checks + AI classification run in seconds.", icon: Sparkles },
  { title: "Get risk score", desc: "See a clear score, scam type, and red flags.", icon: Gauge },
  { title: "Stay safe", desc: "Follow the safe-action checklist and move on with confidence.", icon: ShieldCheck },
];

export const SCAM_TYPES = [
  { name: "OTP Fraud", icon: PhoneCall, color: "red" },
  { name: "Bank Phishing", icon: CreditCard, color: "red" },
  { name: "Fake Job", icon: Briefcase, color: "amber" },
  { name: "Parcel Scam", icon: Package, color: "amber" },
  { name: "Prize Scam", icon: Gift, color: "amber" },
  { name: "Payment Scam", icon: DollarSign, color: "red" },
  { name: "Investment Scam", icon: TrendingUp, color: "red" },
  { name: "QR Scam", icon: QrCode, color: "cyan" },
  { name: "Malware Link", icon: Bug, color: "red" },
  { name: "Impersonation Scam", icon: UserX, color: "amber" },
];

export const DEMO_WHATSAPP = {
  sender: "+92 300 1234567",
  time: "11:42 AM",
  text: "Dear Customer, your account will be SUSPENDED in 30 minutes due to unusual activity. Share the OTP sent to your number immediately to verify and avoid permanent block. Reply now.",
};

export const DEMO_EXAMPLES = {
  "OTP Fraud":
    "Dear Customer, your account will be SUSPENDED in 30 minutes due to unusual activity. Share the OTP sent to your number immediately to verify and avoid permanent block.",
  "Fake Job":
    "Congratulations! You are shortlisted for a work-from-home job paying PKR 80,000/month. Send your CNIC copy and a PKR 500 registration fee to confirm your seat today.",
  "Parcel Scam":
    "Your parcel is held at customs due to unpaid duty of PKR 1,200. Click the link below within 24 hours to release your parcel or it will be returned to sender.",
  "Prize Scam":
    "Congratulations! Your number has won PKR 500,000 in the Jazz Lucky Draw 2026. Send your CNIC and bank details to claim your prize before it expires.",
  "Payment Scam":
    "We tried to deliver your payment of PKR 15,000 but your account details are incomplete. Verify your bank account now using the secure link to receive funds.",
};

export const HISTORY_ROWS = [
  { date: "2026-07-11", type: "OTP Fraud", risk: "HIGH", confidence: 94, status: "Blocked" },
  { date: "2026-07-11", type: "Fake Job", risk: "MEDIUM", confidence: 81, status: "Flagged" },
  { date: "2026-07-10", type: "Parcel Scam", risk: "MEDIUM", confidence: 76, status: "Flagged" },
  { date: "2026-07-10", type: "Prize Scam", risk: "HIGH", confidence: 90, status: "Blocked" },
  { date: "2026-07-09", type: "Bank Phishing", risk: "HIGH", confidence: 96, status: "Blocked" },
  { date: "2026-07-09", type: "Investment Scam", risk: "LOW", confidence: 58, status: "Reviewed" },
  { date: "2026-07-08", type: "QR Scam", risk: "MEDIUM", confidence: 72, status: "Flagged" },
  { date: "2026-07-08", type: "Malware Link", risk: "HIGH", confidence: 88, status: "Blocked" },
  { date: "2026-07-07", type: "Payment Scam", risk: "LOW", confidence: 63, status: "Reviewed" },
  { date: "2026-07-06", type: "Impersonation Scam", risk: "MEDIUM", confidence: 79, status: "Flagged" },
];

export const SAFETY_TIPS = [
  "Banks in Pakistan never ask for your OTP over call, SMS, or WhatsApp — not even to 'verify' your account.",
  "A real courier will never ask for a customs fee payment through a personal bank transfer.",
  "If a job offer asks for money before you're hired, it isn't a job offer — it's a scam.",
  "Scan QR codes only from sources you trust; a fake QR can silently redirect payments.",
  "Urgency is the oldest trick in the book — scammers want you to act before you think.",
];
