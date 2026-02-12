import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  { title: "Wall Thickness", content: "Minimum recommended wall thickness is 1.2mm for structural integrity. For load-bearing parts, increase to 2mm or more depending on material choice." },
  { title: "Hole Diameter", content: "Minimum hole diameter is 2mm. For threaded inserts, design holes 0.2mm undersized. Vertical holes print cleaner than horizontal ones." },
  { title: "Overhangs & Supports", content: "Angles below 45° from vertical require support structures. Design self-supporting geometry where possible to reduce post-processing time and cost." },
];

const DesignGuidelines = () => (
  <section id="guidelines" className="py-16">
    <h2 className="text-2xl font-bold tracking-tight mb-2">Design Guidelines</h2>
    <p className="text-muted-foreground mb-6">Optimize your parts for FDM manufacturing.</p>
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
          <AccordionTrigger className="text-sm font-semibold hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default DesignGuidelines;
