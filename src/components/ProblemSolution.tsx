import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Inconsistent production quality that distracts from the message",
    "Stories that inform but don't emotionally connect",
    "Events captured but not truly remembered",
    "Struggling to communicate your vision visually",
  ];

  const solutions = [
    "Excellence in every frame, every transition, every moment",
    "Story-first approach that moves hearts and minds",
    "Cinematic coverage that captures the soul of your events",
    "Strategic visual storytelling aligned with your mission",
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            The Challenge
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto">
            Great stories deserve great telling.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Common Struggles
              </h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border/50"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                    {index + 1}
                  </span>
                  <p className="text-foreground/80">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent">
                Our Approach
              </h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-accent/20"
                >
                  <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-accent mt-0.5" />
                  <p className="text-foreground">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="/contact" className="btn-primary group inline-flex">
            Let's Solve This Together
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
