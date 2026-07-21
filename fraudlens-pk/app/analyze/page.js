import { Suspense } from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AnalyzerForm } from "@/components/analyzer/AnalyzerForm";

export const metadata = {
  title: "Analyze — FraudLens PK",
};

export default function AnalyzePage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <AnalyzerForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
