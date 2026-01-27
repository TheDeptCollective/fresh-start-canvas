import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest mb-6 animate-fade-up opacity-0">
            Creative Production Collective
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.1] mb-8 animate-fade-up opacity-0 delay-100">
            We craft stories that
            <br />
            <span className="italic text-muted-foreground">move people to action.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up opacity-0 delay-200 leading-relaxed">
            From live church productions to cinematic documentaries, we bring technical excellence and authentic storytelling to faith-driven organizations and purpose-led brands.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-300">
            <Link to="/contact" className="btn-primary group">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="btn-secondary group">
              <Play className="mr-2 h-4 w-4" />
              View Our Work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up opacity-0 delay-400">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "8+", label: "Years Experience" },
            { value: "25+", label: "Churches Served" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-display font-semibold mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
