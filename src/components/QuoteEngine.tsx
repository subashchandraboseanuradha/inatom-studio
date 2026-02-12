import { useState } from "react";
import { Box, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import ContactModal from "./ContactModal";

const COLORS = [
  { name: "Black", value: "#1D1D1F" },
  { name: "White", value: "#F5F5F7" },
  { name: "Grey", value: "#8E8E93" },
  { name: "Blue", value: "#0071E3" },
  { name: "Red", value: "#FF3B30" },
];

const QUALITIES = [
  { label: "Draft", sub: "0.24mm" },
  { label: "Standard", sub: "0.16mm" },
  { label: "Fine", sub: "0.08mm" },
];

const QuoteEngine = () => {
  const [color, setColor] = useState("Black");
  const [quality, setQuality] = useState("Standard");
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Instant Quote</p>

      {/* Drop Zone */}
      <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center mb-6 hover:border-primary/40 transition-colors cursor-pointer">
        <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-3">
          <Box className="h-7 w-7 text-muted-foreground" />
        </div>
        <p className="font-semibold text-sm">Drag & Drop STL / STEP files</p>
        <p className="text-xs text-muted-foreground mt-1">Auto-analyzes geometry, volume & printability</p>
      </div>

      {/* Config */}
      <div className="space-y-4 flex-1">
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Material</Label>
          <Select defaultValue="pla">
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="pla">PLA (Standard)</SelectItem>
              <SelectItem value="abs">ABS (Durable)</SelectItem>
              <SelectItem value="petg">PETG (Tough)</SelectItem>
              <SelectItem value="nylon-cf">Nylon-CF (Industrial)</SelectItem>
              <SelectItem value="tpu">TPU (Flexible)</SelectItem>
            </SelectContent>
          </Select>
        </div>

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

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quality</Label>
          <div className="flex rounded-xl border border-border overflow-hidden">
            {QUALITIES.map(q => (
              <button
                key={q.label}
                onClick={() => setQuality(q.label)}
                className={`flex-1 py-2 px-1 text-center text-xs font-medium transition-colors ${quality === q.label ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
              >
                {q.label}
                <span className="block text-[10px] opacity-70">{q.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Infill</Label>
          <Select defaultValue="20">
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20%</SelectItem>
              <SelectItem value="40">40%</SelectItem>
              <SelectItem value="100">100% Solid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-6 mb-4 text-center">
        <p className="text-4xl font-extrabold tracking-tight">₹0.00</p>
        <p className="text-xs text-muted-foreground mt-1">Vol: 0cm³ • Time: 0h 0m</p>
      </div>

      {/* Actions */}
      <div className="space-y-2.5">
        <Button className="w-full rounded-xl gap-2 h-11">
          <UploadCloud className="h-4 w-4" /> Upload to Calculate
        </Button>
        <Button variant="ghost" className="w-full rounded-xl h-10 text-muted-foreground" onClick={() => setContactOpen(true)}>
          Email Official Quote
        </Button>
      </div>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default QuoteEngine;
