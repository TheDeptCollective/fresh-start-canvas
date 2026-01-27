import { Link } from "react-router-dom";
import { ArrowRight, Radio, Users, Film, Video, Camera } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Technical Directing",
      description: "Flawless live production with professional switching, camera coordination, and broadcast excellence.",
      icon: Radio,
      href: "/services#technical-directing",
    },
    {
      title: "Church Production Consulting",
      description: "Build sustainable systems, train your team, and elevate your visual communication strategy.",
      icon: Users,
      href: "/services#consulting",
    },
    {
      title: "Documentary Series Creation",
      description: "Multi-episode narratives that explore your story with depth, authenticity, and cinematic quality.",
      icon: Film,
      href: "/services#documentary-series",
    },
    {
      title: "Documentary-Style Event Coverage",
      description: "Story-first event capture that goes beyond highlights to reveal the heart of your moments.",
      icon: Video,
      href: "/services#event-coverage",
    },
    {
      title: "Regular Event Coverage",
      description: "Reliable, professional capture with clean delivery and scalable solutions for recurring events.",
      icon: Camera,
      href: "/services#regular-coverage",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Services built for impact.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From live productions to documentary storytelling, every service is designed to move your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group service-card hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-secondary group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
