import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ReportView } from "@/components/report/ReportView";

export const metadata = {
  title: "Report — FraudLens PK",
};

export default function ReportPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReportView />
      </main>
      <Footer />
    </>
  );
}
