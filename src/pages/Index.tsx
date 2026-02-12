import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MaterialGrid from "@/components/MaterialGrid";
import CadService from "@/components/CadService";
import DesignGuidelines from "@/components/DesignGuidelines";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <main className="pb-16">
          <HeroSection />
          <CadService />
          <DesignGuidelines />
        </main>
      </div>

      {/* Full-width Material Selection Guide */}
      <MaterialGrid />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
