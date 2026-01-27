import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Department Collective transformed how we approach our Sunday productions. The training they provided has elevated our entire volunteer team.",
      author: "Pastor Michael Johnson",
      role: "Lead Pastor, Grace Community Church",
    },
    {
      quote: "The documentary they created for our organization captured our mission perfectly. It's now our most powerful fundraising tool.",
      author: "Sarah Williams",
      role: "Executive Director, Hope Foundation",
    },
    {
      quote: "Professional, creative, and deeply aligned with our values. They don't just capture events—they tell stories.",
      author: "David Chen",
      role: "Communications Director, City Church",
    },
  ];

  const clients = [
    "Grace Community Church",
    "Hope Foundation",
    "City Church Network",
    "Faith Forward Media",
    "Kingdom Builders",
    "New Life Fellowship",
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Trusted By
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Words from our partners.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-6" />
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by leading churches and organizations
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client}
                className="text-muted-foreground/50 font-medium text-sm hover:text-muted-foreground transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
