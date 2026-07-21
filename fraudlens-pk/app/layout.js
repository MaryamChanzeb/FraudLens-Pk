import "./globals.css";

export const metadata = {
  title: "FraudLens PK — AI Digital Scam Shield for Pakistan",
  description:
    "AI-powered scam detection built for Pakistan. Analyze suspicious messages, URLs and emails in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-100 antialiased">{children}</body>
    </html>
  );
}
