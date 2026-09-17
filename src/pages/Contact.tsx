import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Clock, Mail, MapPin, Send } from "lucide-react";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/hello@thedeptcollective.com";

const Contact = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || website) return;
    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Department Collective inquiry from ${formData.name}`,
          _template: "table",
          _replyto: formData.email,
          _honey: website,
        }),
      });

      const result = await response.json();
      if (!response.ok || ![true, "true"].includes(result.success)) {
        throw new Error("The contact form could not be submitted.");
      }

      setStatus("Message submitted. Thanks for reaching out — we’ll reply within 24–48 hours.");
      toast({
        title: "Message submitted!",
        description: "Thanks for reaching out. We'll reply within 24–48 hours.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("Your message could not be sent. Please try again or email hello@thedeptcollective.com directly.");
      toast({
        title: "Message not sent",
        description:
          "Please try again or email hello@thedeptcollective.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl mb-12 md:mb-16">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Get in Touch
              </p>
              <h1 className="font-display text-4xl md:text-6xl mb-6">
                Let's start a conversation.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind or want to explore what’s possible? Tell us
                a little about it and we’ll get back to you within 24–48 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
              <div className="bg-card rounded-2xl p-6 md:p-10 lg:p-12 border border-border/60 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8" aria-busy={isSubmitting}>
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field empty</label>
                    <input id="website" name="_honey" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
                  </div>
                  <fieldset disabled={isSubmitting} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                        <Input id="name" name="name" autoComplete="name" maxLength={150} value={formData.name} onChange={handleChange} required placeholder="Your name" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                        <Input id="email" name="email" autoComplete="email" maxLength={254} type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" name="organization" autoComplete="organization" maxLength={200} value={formData.organization} onChange={handleChange} placeholder="Your organization (optional)" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">What are you interested in? <span className="text-destructive">*</span></Label>
                      <select id="service" name="service" required value={formData.service} onChange={(event) => setFormData((prev) => ({ ...prev, service: event.target.value }))} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="" disabled>Select a service</option>
                          <option value="Technical Directing">Technical Directing</option>
                          <option value="Church Production Consulting">Church Production Consulting</option>
                          <option value="Documentary Series Creation">Documentary Series Creation</option>
                          <option value="Documentary-Style Event Coverage">Documentary-Style Event Coverage</option>
                          <option value="Regular Event Coverage">Regular Event Coverage</option>
                          <option value="Not sure yet">Not sure yet — let's discuss</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                      <Textarea id="message" name="message" maxLength={10000} value={formData.message} onChange={handleChange} required rows={7} placeholder="Tell us about your project or inquiry..." className="resize-y" />
                    </div>

                    <Button type="submit" className="w-full rounded-none h-14 bg-[#5055dc] hover:bg-[#4247c4] text-white uppercase tracking-widest" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                    </Button>

                  </fieldset>
                  <p role="status" aria-live="polite" className="text-sm leading-relaxed">{status}</p>
                  <p className="text-center text-sm text-muted-foreground">
                    Your details will only be used to respond to your inquiry.
                  </p>
                </form>
              </div>

              <aside className="lg:pt-4">
                <h2 className="font-display text-2xl md:text-3xl mb-8">Prefer to reach out directly?</h2>
                <div className="space-y-5 text-muted-foreground">
                  <a href="mailto:hello@thedeptcollective.com" className="flex items-center gap-4 hover:text-foreground transition-colors break-all">
                    <Mail className="h-5 w-5 text-[#5055dc] flex-shrink-0" />
                    hello@thedeptcollective.com
                  </a>
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 text-[#5055dc] flex-shrink-0" />
                    Replies within 24–48 hours
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-[#5055dc] flex-shrink-0" />
                    Toronto, ON, Canada
                  </div>
                </div>

                <div className="border-t border-border mt-10 pt-10">
                  <h2 className="font-display text-2xl md:text-3xl mb-4">Want to book a call instead?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Start with a no-pressure discovery call and let’s explore what’s possible.
                  </p>
                  <a href="mailto:hello@thedeptcollective.com?subject=Discovery%20Call%20Request" className="inline-flex items-center font-medium text-[#5055dc] hover:opacity-75 transition-opacity">
                    Request a discovery call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
