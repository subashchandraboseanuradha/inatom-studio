import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer id="footer" className="py-12 border-t border-border/50 mt-8">
    <div className="grid sm:grid-cols-3 gap-8 text-sm">
      <div>
        <p className="font-extrabold tracking-tight text-lg mb-3">inatom</p>
        <p className="text-muted-foreground leading-relaxed">
          Industrial-grade 3D printing & CAD engineering. Precision manufacturing from Bharat.
        </p>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-primary hover:underline text-sm font-medium"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>
      <div>
        <p className="font-bold mb-3">Links</p>
        <ul className="space-y-2 text-muted-foreground">
          <li><a href="#materials" className="hover:text-foreground transition-colors">Materials</a></li>
          <li><a href="#guidelines" className="hover:text-foreground transition-colors">Design Guidelines</a></li>
          <li><a href="#cad" className="hover:text-foreground transition-colors">CAD Services</a></li>
          <li className="pt-2 border-t border-border/50">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70 block mb-1.5">Marketplace</span>
            <a href="#" className="hover:text-foreground transition-colors">Gift Shop & Consumer Products</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-3">Legal</p>
        <ul className="space-y-2 text-muted-foreground">
          <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Refund Policy</a></li>
        </ul>
      </div>
    </div>
    <p className="text-xs text-muted-foreground mt-10">© {new Date().getFullYear()} inatom.in — All rights reserved.</p>
  </footer>
);

export default Footer;
