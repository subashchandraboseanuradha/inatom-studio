import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, UploadCloud, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import ContactModal from "@/components/ContactModal";

const COLORS = [
  { name: "Black", value: "#1D1D1F" },
  { name: "White", value: "#F5F5F7" },
  { name: "Grey", value: "#8E8E93" },
  { name: "Blue", value: "#0071E3" },
  { name: "Red", value: "#FF3B30" },
];

const QUALITIES = [
  { label: "Speed", sub: "Prototype", value: "draft" },
  { label: "Balanced", sub: "Standard", value: "standard" },
  { label: "Detail", sub: "High Res", value: "fine" },
];

const STRENGTHS = [
  { label: "Light", sub: "Standard", value: "20" },
  { label: "Strong", sub: "Heavy Duty", value: "40" },
  { label: "Solid", sub: "Max Strength", value: "100" },
];

const Quote = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("Black");
  const [quality, setQuality] = useState("standard");
  const [strength, setStrength] = useState("20");
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto flex items-center h-14 px-4">
          <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <span className="ml-3 text-sm font-extrabold tracking-tight">inatom</span>
          <span className="ml-auto text-xs font-bold uppercase tracking-widest text-muted-foreground">Instant Quote</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-card rounded-3xl shadow-2xl shadow-black/[0.06] border border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left — Upload / Preview */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-border/50">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upload File</Label>
              <div className="mt-3 border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors cursor-pointer min-h-[300px]">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <Box className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="font-semibold">Drag & Drop STL / STEP</p>
                <p className="text-xs text-muted-foreground mt-1">Auto-analyzes geometry, volume & printability</p>
              </div>
            </div>

            {/* Right — Configuration */}
            <div className="p-8 flex flex-col">
              <div className="space-y-5 flex-1">
                {/* Material */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Material</Label>
                  <Select defaultValue="pla">
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pla">PLA — Best for Visuals</SelectItem>
                      <SelectItem value="abs">ABS — Durable & Heat Resistant</SelectItem>
                      <SelectItem value="petg">PETG — Tough & Chemical Resistant</SelectItem>
                      <SelectItem value="nylon-cf">Nylon-CF — Metal Replacement</SelectItem>
                      <SelectItem value="tpu">TPU — Flexible Parts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Color */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Color</Label>
                  <div className="flex gap-2.5">
                    {COLORS.map(c => (
                      <button
                        key={c.name}
                        onClick={() => setColor(c.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${color === c.name ? "border-primary scale-110 shadow-md" : "border-border"}`}
                        style={{ backgroundColor: c.value }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Quality */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quality</Label>
                  <div className="flex rounded-xl border border-border overflow-hidden">
                    {QUALITIES.map(q => (
                      <button
                        key={q.value}
                        onClick={() => setQuality(q.value)}
                        className={`flex-1 py-2.5 px-1 text-center text-xs font-medium transition-colors ${quality === q.value ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
                      >
                        {q.label}
                        <span className="block text-[10px] opacity-70">{q.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Strength (Infill) */}
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Strength</Label>
                  <div className="flex rounded-xl border border-border overflow-hidden">
                    {STRENGTHS.map(s => (
                      <button
                        key={s.value}
                        onClick={() => setStrength(s.value)}
                        className={`flex-1 py-2.5 px-1 text-center text-xs font-medium transition-colors ${strength === s.value ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
                      >
                        {s.label}
                        <span className="block text-[10px] opacity-70">{s.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky Price Bar */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-4xl font-extrabold tracking-tight">₹0.00</p>
                    <p className="text-xs text-muted-foreground mt-1">Vol: 0cm³ • Time: 0h 0m</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <Button className="w-full rounded-xl gap-2 h-12 text-sm font-semibold">
                    <UploadCloud className="h-4 w-4" /> Upload to Calculate
                  </Button>
                  <Button variant="ghost" className="w-full rounded-xl h-10 text-muted-foreground" onClick={() => setContactOpen(true)}>
                    Email Official Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Quote;
