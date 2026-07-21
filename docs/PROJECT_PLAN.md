# FraudLens PK Project Plan

## Goal

Build a small but polished working MVP before the deadline. The app should feel complete, not huge and unfinished.

## Final Product

**FraudLens PK — AI Digital Scam Shield for Pakistan**

A web app where users paste suspicious messages, URLs, or upload screenshots. The app detects scam risk and explains red flags in simple Urdu and English.

## MVP Flow

1. User opens the app.
2. User chooses input type: message, URL, or screenshot.
3. User pastes content or uploads screenshot.
4. App sends input to `/api/analyze`.
5. API returns structured JSON.
6. Frontend displays:
   - Risk level
   - Confidence score
   - Scam type
   - Red flags
   - English explanation
   - Roman Urdu explanation
   - Safe actions
   - Things not to do
7. Result is saved in history, if database/local storage is ready.

## Must-Have Screens

1. Landing page
2. Analyzer page
3. Result section
4. Dashboard / history page
5. Simple report page or copyable report card

## Must-Have Features

- Text scam scanner
- URL scanner
- AI risk analysis
- Risk badges: Low, Medium, High
- Scam type detection
- Red flag list
- Urdu/Roman Urdu explanation
- Safe action checklist
- Demo scam examples
- Vercel deployment

## Stretch Features

Build these only after the main flow works:

- Screenshot OCR
- QR code scanner
- Report export
- Supabase/Firebase history
- Charts on dashboard

## Future Scope

Do not build now. Mention in presentation only:

- WhatsApp bot
- Gmail integration
- Browser extension
- Enterprise dashboard
- Bank/security integrations
- Public scam report map

## Deadline Strategy

### Stage 1: Skeleton

- Next.js project setup
- Landing page
- Analyzer page with dummy data
- Basic result card

### Stage 2: Backend

- `/api/analyze` route
- Dummy JSON response first
- Connect AI API after dummy route works

### Stage 3: Polish

- UI improvements
- Demo examples
- Dashboard/history
- README and screenshots
- Vercel deployment

## Golden Rule

A small working app is better than a huge incomplete idea.
