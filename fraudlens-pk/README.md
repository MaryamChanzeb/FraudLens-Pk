# FraudLens PK — AI Digital Scam Shield for Pakistan

A hackathon frontend project that helps users detect online scams before they click, pay, or share
sensitive information. Frontend only — no backend, dummy data throughout.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui-style components
- Lucide React icons
- Framer Motion
- Recharts (dashboard chart)

## Getting Started

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

## Project Structure

```
app/
  page.js              -> Landing page ("/")
  analyze/page.js       -> Analyzer page ("/analyze")
  dashboard/page.js     -> Dashboard page ("/dashboard")
  report/page.js         -> Report page ("/report")
  layout.js             -> Root layout (shared HTML shell)
  globals.css           -> Tailwind + global styles
  icon.svg               -> Favicon

components/
  ui/                   -> Reusable primitives (Button, Badge, Card, Textarea)
  shared/               -> Navbar, Footer, small shared bits
  landing/               -> Landing page sections (Hero, Stats, Features, ...)
  analyzer/              -> Analyzer form + result cards + Save Report action
  dashboard/              -> Dashboard widgets (stats, table, chart, tip)
  report/                 -> Report page view (reuses the analyzer result cards)

data/
  dummyData.js           -> All dummy content (stats, scam types, history rows, etc.)

lib/
  analyzeText.js          -> Rule-based "AI" analyzer (keyword matching, no backend)
  ocr.js                   -> Screenshot OCR (Tesseract.js, runs entirely in the browser)
  reportStore.js           -> Hand-off between Result Screen and Report Page + report text builder
  styleHelpers.js          -> Shared Tailwind class helpers
  useCountUp.js            -> Count-up animation hook
  utils.js                 -> cn() class-merging helper
```

## How the Analyzer Works (no backend)

`lib/analyzeText.js` scans whatever text you paste for keywords tied to common Pakistani
scam patterns (OTP fraud, bank phishing, fake jobs, parcel scams, prize scams, payment scams,
investment scams, QR scams, malware links, impersonation). It always returns a complete result:
risk score, risk level, scam type, confidence, red flags, English + Roman Urdu explanations,
safe actions, and a "do not" list — even for random text, which falls back to a low-risk result.

## Screenshot OCR

On the Analyzer page's **Screenshot** tab, uploading an image runs OCR entirely in the browser
using [Tesseract.js](https://github.com/naptha/tesseract.js) (`lib/ocr.js`). The extracted text
is dropped into the same input used for pasted messages, so it can be analyzed exactly like any
other text. `lib/ocr.js` is intentionally isolated with a `TODO` comment describing how to swap
it for a real backend/AI OCR endpoint later — no other file needs to change.

## Report Page

Clicking **Save Report** on the Result Screen saves the current analysis (via
`lib/reportStore.js`, using `sessionStorage` as a frontend-only hand-off) and navigates to
`/report`, which renders a formal, shareable safety report using the same result-card components
as the Result Screen. From there you can:

- **Copy Report** — copies a plain-text version of the report to the clipboard
- **Download Report** — downloads the same content as a `.txt` file (a placeholder for a future
  backend-generated PDF)

Visiting `/report` directly (without an analysis in session) shows a demo report so the page is
always viewable on its own.

## Ready for Backend Integration

Every dummy/mock piece is isolated and marked with `TODO(Mohsin)` comments describing the exact
swap needed:

- `lib/analyzeText.js` → replace with a call to `POST /api/analyze`
- `lib/ocr.js` → replace with a call to a backend/AI OCR endpoint
- `lib/reportStore.js` → replace the `sessionStorage` hand-off with a real saved-report fetch
  (e.g. `GET /api/report/:id`), or keep it as a client cache populated from the real API response
- `handleDownload` in `components/report/ReportView.jsx` → replace the `.txt` Blob download with
  a backend-generated PDF

Because `ResultPanel` and `ReportView` both consume the same result shape (risk level, risk
score, scam type, confidence, red flags, explanations, safe actions, do-not list, attack chain),
swapping the dummy data source for a real `/api/analyze` response should not require UI changes.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
