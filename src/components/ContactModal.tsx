import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", contact: "", service: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    const msg = encodeURIComponent(`Hi inatom! I'm ${form.name}. I need help with ${form.service}. ${form.description}`);
    toast({
      title: "Request submitted!",
      description: "Our team will reach out shortly.",
      action: (
        <a href={`https://wa.me/919999999999?text=${msg}`} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </Button>
        </a>
      ),
    });
    setForm({ name: "", contact: "", service: "", description: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold tracking-tight">Book a Consultation</DialogTitle>
          <DialogDescription>We'll get back within 2 hours during business days.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="contact">Phone or Email</Label>
            <Input id="contact" required value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} placeholder="you@email.com or +91..." />
          </div>
          <div className="space-y-1.5">
            <Label>Service Type</Label>
            <Select value={form.service} onValueChange={v => setForm(f => ({ ...f, service: v }))}>
              <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="fdm">FDM Manufacturing</SelectItem>
                <SelectItem value="cad">CAD Engineering</SelectItem>
                <SelectItem value="batch">Batch Production</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Tell us about your project..." rows={3} />
          </div>
          <Button type="submit" className="w-full rounded-xl">Submit Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
