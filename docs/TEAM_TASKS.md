# Team Task Board

## Saad — Product + Cyber Logic + Final Demo

### Main tasks

- Finalize scam categories
- Write AI prompt and JSON output format
- Create demo scam examples
- Test AI results
- Prepare pitch script
- Review UI/backend before submission

### First tasks

- Write 8 to 10 sample scam messages
- Define risk levels and red flags
- Make final demo story for judges

---

## Maryam — Frontend UI + Documentation

### Main tasks

- Build landing page UI
- Build analyzer page UI
- Build result card UI with dummy data
- Build dashboard/history UI
- Keep documentation and screenshots ready
- Manage team/submission sheet

### Beginner-friendly first step

Do not wait for backend. Start with dummy data.

Example dummy data:

```js
const demoResult = {
  riskLevel: "High",
  confidence: 92,
  scamType: "OTP Fraud",
  redFlags: ["OTP request", "Urgent language", "Suspicious link"],
  englishExplanation: "This message is risky because it asks for OTP.",
  urduExplanation: "Ye message risky hai kyun ke ye OTP mang raha hai.",
  safeActions: ["Do not share OTP", "Open official app manually"]
};
```

### Pages to build first

1. Landing page
2. Analyze page
3. Result card
4. Dashboard cards

---

## Mohsin — Backend + AI API + Deployment

### Main tasks

- Setup backend route `/api/analyze`
- Return dummy JSON first
- Connect Gemini/OpenAI API
- Validate JSON response
- Add optional history storage
- Deploy on Vercel

### Beginner-friendly first step

Do not connect AI first. First create the API route and return a fixed dummy result.

Example response:

```json
{
  "riskLevel": "High",
  "confidence": 92,
  "scamType": "OTP Fraud",
  "redFlags": ["OTP request", "Urgent language", "Suspicious link"],
  "englishExplanation": "This message is risky because it asks for OTP.",
  "urduExplanation": "Ye message risky hai kyun ke ye OTP mang raha hai.",
  "safeActions": ["Do not share OTP", "Verify from official app"],
  "doNotDo": ["Do not click the link", "Do not send money"]
}
```

### Backend order

1. Create `/api/analyze`
2. Return dummy JSON
3. Connect frontend form to API
4. Add real AI API
5. Test with sample messages
6. Deploy

---

## Work Rule

Everyone should work in small tasks and push frequently. Do not wait for the whole project to be perfect.
