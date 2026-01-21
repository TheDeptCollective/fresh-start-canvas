const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Passion Meets Precision
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With years of experience in both church production and documentary filmmaking, 
                we understand the unique demands of each medium—and the common thread that runs through them: the power of well-told stories.
              </p>
              <p>
                Whether we're directing a live service or crafting a documentary series, 
                we bring the same level of technical expertise and creative care to every project.
              </p>
              <p>
                Our mission is simple: help you communicate your message with clarity, 
                beauty, and impact.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Your image here</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-church/20 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-media/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
