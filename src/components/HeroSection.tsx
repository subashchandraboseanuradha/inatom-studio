import { Shield, Truck, Target, UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";

const trustItems = [
  { icon: Target, label: "Tolerance ±0.2mm" },
  { icon: Shield, label: "NDA Available" },
  { icon: Truck, label: "Pan-India Shipping" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="pt-32 pb-16 lg:py-24">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.2]">
        Engineering Precision.<br />
        <span className="text-primary">Delivered.</span>
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
        Industrial-grade FDM manufacturing for functional prototypes and end-use parts. Upload your STL and start production today.
      </p>

      {/* Upload CTA Card */}
      <button
        onClick={() => navigate("/quote")}
        className="mt-10 w-full max-w-md bg-card rounded-2xl border-2 border-dashed border-border hover:border-primary/50 shadow-xl shadow-black/[0.04] p-10 flex flex-col items-center text-center transition-all hover:shadow-2xl group cursor-pointer"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <UploadCloud className="h-8 w-8 text-primary" />
        </div>
        <p className="font-bold text-lg">Upload STL to Get Instant Price</p>
        <p className="text-sm text-muted-foreground mt-1">Drag & drop or click to start</p>
      </button>

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
};

export default HeroSection;
