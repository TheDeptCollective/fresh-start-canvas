import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to tell your story?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Every great production starts with a conversation. Let's discuss your vision, 
            explore possibilities, and create something that moves your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary group">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              Explore Our Work
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            No pressure. Just a conversation about what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
