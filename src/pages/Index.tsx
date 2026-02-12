import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MaterialGrid from "@/components/MaterialGrid";
import CadService from "@/components/CadService";
import DesignGuidelines from "@/components/DesignGuidelines";
import Footer from "@/components/Footer";
import QuoteEngine from "@/components/QuoteEngine";
import MobileQuoteBar from "@/components/MobileQuoteBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-10">
          {/* Left Panel — Brochure */}
          <main className="pb-24 lg:pb-16">
            <HeroSection />
            <MaterialGrid />
            <CadService />
            <DesignGuidelines />
            <Footer />
          </main>

          {/* Right Panel — Sticky Quote Engine (Desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[72px] h-[calc(100vh-88px)] bg-card rounded-2xl shadow-xl shadow-black/[0.04] border border-border/50 p-6 overflow-y-auto mt-6">
              <QuoteEngine />
            </div>
          </aside>
        </div>
      </div>

      <MobileQuoteBar />
    </div>
  );
};

export default Index;
