const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center pt-20 md:pt-24">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider mb-4 animate-fade-up opacity-0">
            Production & Creative Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            Crafting Stories.
            <br />
            <span className="text-muted-foreground">Elevating Experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up opacity-0 delay-200">
            From church productions to documentary storytelling, we bring technical excellence and creative vision to every project.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-300">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
