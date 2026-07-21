// FraudLens PK has no backend. This file simulates what an AI risk engine
// would return, by matching keywords in the pasted text against known
// Pakistani scam patterns. It always returns a complete, realistic result.

const SCAM_RULES = [
  {
    type: "OTP Fraud",
    keywords: ["otp", "suspend", "verify your account", "verification code", "one time password"],
    redFlags: ["Urgent language", "OTP request", "Account suspension threat", "Unknown link"],
    english:
      "This message attempts to create urgency and trick the user into sharing sensitive information such as an OTP.",
    urdu: "Ye message user ko dara kar OTP hasil karna chahta hai.",
    safeActions: ["Never share OTP", "Contact official bank", "Block sender", "Delete message"],
    doNot: ["Share PIN", "Open unknown links", "Transfer money"],
    baseScore: 92,
  },
  {
    type: "Bank Phishing",
    keywords: ["bank account", "account details", "login to your account", "confirm your card", "internet banking"],
    redFlags: ["Fake bank branding", "Request for account details", "Suspicious link", "Urgent tone"],
    english:
      "This message impersonates a bank and asks the user to enter account details on an unverified link.",
    urdu: "Ye message bank ka roop dhaar kar account ki tafseelat maangta hai.",
    safeActions: ["Verify with your bank directly", "Never enter card details on unknown links", "Report the number", "Delete message"],
    doNot: ["Enter your PIN online", "Click the link", "Share your CVV"],
    baseScore: 90,
  },
  {
    type: "Fake Job",
    keywords: ["job", "work from home", "salary", "hiring", "shortlisted", "registration fee", "cnic"],
    redFlags: ["Upfront payment requested", "Unrealistic salary", "Vague job description", "Personal ID requested early"],
    english:
      "This message offers an unrealistic job and asks for money or personal documents before any real hiring process.",
    urdu: "Ye job offer paisay ya CNIC pehle maangti hai, jo aik dhoka ho sakta hai.",
    safeActions: ["Research the company independently", "Never pay to get hired", "Ask for an official offer letter", "Report the post"],
    doNot: ["Pay any registration fee", "Share your CNIC", "Share bank details"],
    baseScore: 78,
  },
  {
    type: "Parcel Scam",
    keywords: ["parcel", "courier", "customs", "delivery", "shipment", "package held"],
    redFlags: ["Small unexpected fee", "Countdown pressure", "Unofficial tracking link", "Vague sender identity"],
    english:
      "This message pressures the user to pay a small fee through an unofficial link to release a fake parcel.",
    urdu: "Ye message aik jaali parcel chorane ke liye chhoti c fee maangta hai.",
    safeActions: ["Check tracking on the official courier site", "Call the courier's verified helpline", "Ignore the link", "Delete message"],
    doNot: ["Pay through the link", "Share card details", "Click unknown tracking links"],
    baseScore: 74,
  },
  {
    type: "Prize Scam",
    keywords: ["congratulations", "won", "lucky draw", "prize", "lottery", "claim your"],
    redFlags: ["Prize you never entered for", "Request for CNIC/bank details", "Urgency to claim", "Too-good-to-be-true reward"],
    english:
      "This message claims the user won a prize they never entered for, then asks for personal or banking details to 'release' it.",
    urdu: "Ye message aik jaali inaam ka jhansa deta hai aur tafseelat maangta hai.",
    safeActions: ["Ignore unsolicited prize claims", "Never pay a fee to receive a prize", "Verify directly with the company", "Delete message"],
    doNot: ["Share CNIC or bank info", "Pay a 'processing fee'", "Click the claim link"],
    baseScore: 85,
  },
  {
    type: "Payment Scam",
    keywords: ["payment", "invoice", "refund", "transaction", "receive funds", "incomplete details"],
    redFlags: ["Unexpected payment notice", "Request to 'verify' account to receive money", "Unofficial payment link", "Pressure to act fast"],
    english:
      "This message pretends the user is owed money and asks them to 'verify' account details through an unofficial link.",
    urdu: "Ye message paisay milne ka jhansa de kar account ki tafseelat maangta hai.",
    safeActions: ["Check your account directly via official app", "Ignore the link", "Report the sender", "Delete message"],
    doNot: ["Enter bank details on the link", "Share OTP to 'receive' payment", "Forward the message"],
    baseScore: 80,
  },
  {
    type: "Investment Scam",
    keywords: ["invest", "profit", "returns", "trading", "double your money", "crypto"],
    redFlags: ["Guaranteed high returns", "Pressure to invest quickly", "Unregistered platform", "Testimonials with no verification"],
    english:
      "This message promises unrealistic guaranteed returns to pressure the user into sending money to an unverified platform.",
    urdu: "Ye message zyada munafay ka jhoota wada kar ke paisay mangwata hai.",
    safeActions: ["Verify SECP registration before investing", "Never invest based on a message alone", "Consult a licensed advisor", "Report the sender"],
    doNot: ["Send money to an unknown account", "Trust guaranteed-return claims", "Share your banking credentials"],
    baseScore: 82,
  },
  {
    type: "QR Scam",
    keywords: ["qr code", "scan to pay", "scan the code"],
    redFlags: ["Unverified QR source", "Payment redirection", "Physical tampering possible", "No merchant confirmation"],
    english:
      "This QR code may redirect payment to an unintended account instead of the real merchant.",
    urdu: "Ye QR code payment ko ghalat account ki taraf bhej sakta hai.",
    safeActions: ["Confirm merchant name after scanning, before paying", "Use official payment apps only", "Report tampered QR codes", "Avoid QR codes from unknown flyers"],
    doNot: ["Pay without checking merchant name", "Scan QR codes from strangers", "Ignore payment confirmation screens"],
    baseScore: 70,
  },
  {
    type: "Malware Link",
    keywords: ["http://", "https://", "click here", "download now", "install", "apk"],
    redFlags: ["Shortened or suspicious link", "Request to install an app/APK", "Urgent call to action", "No official domain"],
    english:
      "This message contains a link or file that may install malicious software on the user's device.",
    urdu: "Ye link ya file device par nuksaan-deh software install kar sakti hai.",
    safeActions: ["Do not click unknown links", "Install apps only from official app stores", "Run a security scan if already clicked", "Report the sender"],
    doNot: ["Download the attached file", "Enable unknown app installs", "Enter credentials after clicking"],
    baseScore: 88,
  },
  {
    type: "Impersonation Scam",
    keywords: ["this is your", "manager", "boss", "relative", "emergency", "hospital", "urgent help"],
    redFlags: ["Claims to be someone known to you", "Urgent emotional pressure", "Request for immediate money transfer", "New/unknown number"],
    english:
      "This message impersonates someone the user trusts to create emotional urgency and request money.",
    urdu: "Ye message kisi jaan-pehchan wale ka roop dhaar kar paisay mangwata hai.",
    safeActions: ["Call the real person on their known number", "Verify before sending money", "Be cautious of new numbers claiming old relationships", "Report the sender"],
    doNot: ["Send money based on text alone", "Assume identity without a call", "Share personal/family details"],
    baseScore: 76,
  },
];

const FALLBACK_RESULT = {
  type: "Unclassified / Low Risk",
  redFlags: ["No strong scam keywords detected", "Content appears generic"],
  english:
    "This content does not strongly match any known scam pattern, but always stay cautious with unexpected messages.",
  urdu: "Is message mein koi wazeh scam ke asaar nahi mile, phir bhi ehtiyaat rakhein.",
  safeActions: ["Verify the sender independently", "Avoid sharing personal information", "When in doubt, don't click", "Re-scan if the content changes"],
  doNot: ["Assume it's automatically safe", "Ignore future red flags", "Share sensitive data casually"],
  baseScore: 32,
};

// Small deterministic hash so the same input always gives the same
// confidence/score "jitter" instead of pure randomness.
function hashText(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function riskLevelFromScore(score) {
  if (score >= 75) return "HIGH";
  if (score >= 45) return "MEDIUM";
  return "LOW";
}

/**
 * Analyze any pasted text (WhatsApp message, SMS, email, URL, or random text)
 * and return a complete, realistic dummy result object.
 */
export function analyzeText(rawText) {
  const text = (rawText || "").toLowerCase();
  const hash = hashText(text || "fraudlens");

  // Score every rule by how many keywords it matches.
  let bestRule = null;
  let bestMatches = 0;

  for (const rule of SCAM_RULES) {
    const matches = rule.keywords.filter((kw) => text.includes(kw)).length;
    if (matches > bestMatches) {
      bestMatches = matches;
      bestRule = rule;
    }
  }

  const matched = bestMatches > 0 && bestRule;
  const base = matched ? bestRule : FALLBACK_RESULT;

  // Add small deterministic variation so results feel "alive" without a backend.
  const jitter = (hash % 7) - 3; // -3..3
  const extraForMatches = matched ? Math.min(bestMatches * 3, 8) : 0;
  const riskScore = Math.max(5, Math.min(99, base.baseScore + jitter + extraForMatches));
  const confidence = Math.max(50, Math.min(99, riskScore - 2 + (hash % 5)));
  const riskLevel = riskLevelFromScore(riskScore);

  return {
    riskLevel,
    riskScore,
    scamType: base.type,
    confidence,
    redFlags: base.redFlags,
    english: base.english,
    urdu: base.urdu,
    safeActions: base.safeActions,
    doNot: base.doNot,
    attackChain: matched
      ? ["Message received", "Trust/urgency created", `${base.type} pattern triggered`, "Action requested from victim"]
      : ["Message received", "No strong pattern matched", "Flagged for manual review"],
  };
}
