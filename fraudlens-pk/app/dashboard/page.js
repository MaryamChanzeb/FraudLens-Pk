import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { DashboardView } from "@/components/dashboard/DashboardView";

export const metadata = {
  title: "Dashboard — FraudLens PK",
};

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main>
        <DashboardView />
      </main>
      <Footer />
    </>
  );
}
