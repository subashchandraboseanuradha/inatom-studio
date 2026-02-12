import { Layers, Sun, ShieldCheck, Gem } from "lucide-react";

const materials = [
  { icon: Layers, title: "PLA / PETG", tag: "Standard", desc: "Rapid prototyping and visual models. Excellent surface finish with tight dimensional accuracy." },
  { icon: Sun, title: "ABS / ASA", tag: "Functional", desc: "UV stable, outdoor-rated. Heat resistant up to 90°C for functional enclosures and fixtures." },
  { icon: ShieldCheck, title: "PC (Polycarbonate)", tag: "Engineering", desc: "High impact strength and flame retardant. Ideal for load-bearing and safety-critical parts." },
  { icon: Gem, title: "PA‑CF (Nylon Carbon Fiber)", tag: "Composite", desc: "Metal replacement grade. Exceptional stiffness-to-weight ratio for industrial tooling." },
];

const MaterialGrid = () => (
  <section id="materials" className="py-16">
    <h2 className="text-2xl font-bold tracking-tight mb-2">Material Capabilities</h2>
    <p className="text-muted-foreground mb-8">Engineering-grade thermoplastics for every application.</p>
    <div className="grid sm:grid-cols-2 gap-4">
      {materials.map(({ icon: Icon, title, tag, desc }) => (
        <div key={title} className="bg-card rounded-2xl p-6 shadow-xl shadow-black/[0.03] border border-border/50 hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <Icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-bold text-sm">{title}</p>
              <p className="text-xs text-primary font-medium">{tag}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MaterialGrid;
