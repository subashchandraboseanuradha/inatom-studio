import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NavDropdown = ({ label, items }: { label: string; items: { name: string; target: string }[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-2">
        {label} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-card/95 backdrop-blur-lg rounded-xl shadow-xl border border-border p-1.5 z-50">
          {items.map(item => (
            <button
              key={item.name}
              onClick={() => { scrollTo(item.target); setOpen(false); }}
              className="block w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
        <a href="/" className="text-xl font-extrabold tracking-tight">inatom</a>

        <div className="hidden lg:flex items-center">
          <NavDropdown
            label="Services"
            items={[
              { name: "FDM Manufacturing", target: "materials" },
              { name: "CAD Engineering", target: "cad" },
              { name: "Batch Production", target: "contact-trigger" },
            ]}
          />
          <NavDropdown
            label="Resources"
            items={[
              { name: "Material Guide", target: "materials" },
              { name: "Design Guidelines", target: "guidelines" },
            ]}
          />
          <button onClick={() => scrollTo("footer")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-2">
            Support
          </button>
          <Button variant="default" size="sm" className="rounded-xl ml-4" onClick={() => navigate("/quote")}>
            Get Quote
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-lg">
            <SheetTitle className="text-lg font-extrabold tracking-tight mb-6">inatom</SheetTitle>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3 mb-2">Services</p>
              {[{ name: "FDM Manufacturing", target: "materials" }, { name: "CAD Engineering", target: "cad" }, { name: "Batch Production", target: "contact-trigger" }].map(i => (
                <button key={i.name} onClick={() => scrollTo(i.target)} className="block w-full text-left text-sm px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">{i.name}</button>
              ))}
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3 mt-4 mb-2">Resources</p>
              {[{ name: "Material Guide", target: "materials" }, { name: "Design Guidelines", target: "guidelines" }].map(i => (
                <button key={i.name} onClick={() => scrollTo(i.target)} className="block w-full text-left text-sm px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">{i.name}</button>
              ))}
              <Button className="w-full rounded-xl mt-4" onClick={() => navigate("/quote")}>Get Quote</Button>
              <button onClick={() => scrollTo("footer")} className="block w-full text-left text-sm px-3 py-2.5 rounded-lg hover:bg-muted transition-colors mt-2">Support</button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
