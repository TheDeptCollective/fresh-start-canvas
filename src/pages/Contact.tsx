import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
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
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll be in touch within 24-48 hours.",
    });

    setFormData({
      name: "",
      email: "",
      organization: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
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
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Copy */}
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
                <h1 className="font-display text-4xl md:text-5xl mb-6">
                  Let's start a conversation.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we'd love to hear from you. Every great collaboration starts with a simple conversation.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">No pressure</h3>
                      <p className="text-muted-foreground text-sm">
                        Just a friendly conversation about what's possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Quick response</h3>
                      <p className="text-muted-foreground text-sm">
                        We typically respond within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:hello@thedeptcollective.com"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    hello@thedeptcollective.com
                  </a>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Church, nonprofit, or company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, service: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical-directing">
                          Technical Directing
                        </SelectItem>
                        <SelectItem value="consulting">
                          Church Production Consulting
                        </SelectItem>
                        <SelectItem value="documentary-series">
                          Documentary Series Creation
                        </SelectItem>
                        <SelectItem value="event-coverage">
                          Documentary-Style Event Coverage
                        </SelectItem>
                        <SelectItem value="regular-coverage">
                          Regular Event Coverage
                        </SelectItem>
                        <SelectItem value="not-sure">
                          Not sure yet - let's discuss
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project or vision..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
