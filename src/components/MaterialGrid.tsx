import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const materials = [
  {
    name: "PLA / PETG",
    tag: "Standard",
    bestFor: "Visual prototypes, Drafting",
    heat: "Low (< 60°C)",
    strength: "Medium",
    cost: "$",
    costVariant: "secondary" as const,
  },
  {
    name: "ABS / ASA",
    tag: "Functional",
    bestFor: "Outdoor parts, Snap-fits",
    heat: "High (95°C)",
    strength: "High",
    cost: "$$",
    costVariant: "default" as const,
  },
  {
    name: "PC (Polycarbonate)",
    tag: "Engineering",
    bestFor: "High-impact gears, Enclosures",
    heat: "Very High (110°C)",
    strength: "Very High",
    cost: "$$$",
    costVariant: "default" as const,
  },
  {
    name: "PA‑CF (Nylon Carbon Fiber)",
    tag: "Composite",
    bestFor: "Metal replacement, Jigs & Fixtures",
    heat: "Extreme (150°C)",
    strength: "Ultra (Stiff)",
    cost: "$$$$",
    costVariant: "destructive" as const,
  },
];

const MaterialGrid = () => (
  <section id="materials" className="py-20 px-4 lg:px-8 max-w-[1440px] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-3">Material Selection Guide</h2>
      <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
        Compare engineering thermoplastics to find the perfect balance of strength, heat resistance, and cost.
      </p>
    </div>

    <div className="bg-card rounded-2xl shadow-xl shadow-black/[0.03] border border-border/50 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border/50">
            <TableHead className="font-bold text-foreground pl-6">Material</TableHead>
            <TableHead className="font-bold text-foreground">Best For</TableHead>
            <TableHead className="font-bold text-foreground">Heat Deflection</TableHead>
            <TableHead className="font-bold text-foreground">Strength</TableHead>
            <TableHead className="font-bold text-foreground text-right pr-6">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materials.map(({ name, tag, bestFor, heat, strength, cost, costVariant }, i) => (
            <TableRow
              key={name}
              className={`hover:bg-muted/50 border-border/30 ${i % 2 === 1 ? "bg-muted/30" : ""}`}
            >
              <TableCell className="pl-6 py-5">
                <p className="font-bold text-sm">{name}</p>
                <p className="text-xs text-primary font-medium">{tag}</p>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{bestFor}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{heat}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{strength}</TableCell>
              <TableCell className="text-right pr-6">
                <Badge variant={costVariant} className="text-xs">{cost}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </section>
);

export default MaterialGrid;
