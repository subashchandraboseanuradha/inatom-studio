import { Shield, Truck, Target } from "lucide-react";

const trustItems = [
  { icon: Target, label: "Tolerance ±0.2mm" },
  { icon: Shield, label: "NDA Available" },
  { icon: Truck, label: "Pan-India Shipping" },
];

const HeroSection = () => (
  <section id="hero" className="py-16 lg:py-24">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
      Industrial Grade.<br />
      <span className="text-primary">Speed of Light.</span>
    </h1>
    <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-lg">
      Precision FDM manufacturing and Design‑for‑Manufacturing (DfM) services. From prototype to production in 24 hours.
    </p>
    <div className="mt-10 flex flex-wrap gap-6">
      {trustItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
