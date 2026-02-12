import { Shield, Truck, Target } from "lucide-react";

const trustItems = [
  { icon: Target, label: "Tolerance ±0.2mm" },
  { icon: Shield, label: "NDA Available" },
  { icon: Truck, label: "Pan-India Shipping" },
];

const HeroSection = () => (
  <section id="hero" className="pt-32 pb-16 lg:py-24">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.2]">
      Engineering Precision.<br />
      <span className="text-primary">Delivered.</span>
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
      Industrial-grade FDM manufacturing for functional prototypes and end-use parts. Upload your STL and start production today.
    </p>
    <div className="mt-10 flex flex-wrap gap-6 items-center">
      {trustItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground/70">
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
