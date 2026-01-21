import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to elevate your production or tell your story? We'd love to hear about your project.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 group"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
