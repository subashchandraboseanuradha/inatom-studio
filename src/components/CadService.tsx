import { useState } from "react";
import { PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";

const CadService = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="cad" className="py-16 px-8 -mx-4 lg:-mx-8 rounded-2xl bg-[hsl(222,47%,11%)] text-white">
      <div className="max-w-lg">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
          <PenTool className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight mb-3">Stuck on a Sketch?</h2>
        <p className="text-white/70 leading-relaxed mb-6">
          Our engineering team turns napkin sketches into manufacturing-ready 3D files. Full DfM review included.
        </p>
        <Button
          id="contact-trigger"
          onClick={() => setContactOpen(true)}
          className="rounded-xl bg-white text-[hsl(222,47%,11%)] hover:bg-white/90"
        >
          Book Consultation
        </Button>
      </div>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default CadService;
