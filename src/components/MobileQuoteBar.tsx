import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import QuoteEngine from "./QuoteEngine";

const MobileQuoteBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-lg border-t border-border/50 lg:hidden">
        <Button onClick={() => setOpen(true)} className="w-full rounded-xl h-12 gap-2 text-base font-semibold">
          <Calculator className="h-5 w-5" /> Get Instant Quote
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="h-[92vh] rounded-t-2xl overflow-y-auto p-6 bg-background">
          <SheetTitle className="sr-only">Instant Quote</SheetTitle>
          <QuoteEngine />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileQuoteBar;
