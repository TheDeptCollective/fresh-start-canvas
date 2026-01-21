import { Monitor, GraduationCap, Film, Video } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const churchServices = [
    {
      title: "Technical Directing",
      description: "Professional technical direction for live church services and events. Seamless coordination of audio, video, and lighting elements.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Church Production Training",
      description: "Comprehensive training programs for your production team. Equip your volunteers with the skills to deliver excellence every week.",
      icon: <GraduationCap size={24} />,
    },
  ];

  const mediaServices = [
    {
      title: "Mini-Documentaries",
      description: "Compelling short-form documentaries that capture authentic stories. Perfect for brands, organizations, and personal narratives.",
      icon: <Film size={24} />,
    },
    {
      title: "Docu-Series Creation",
      description: "Multi-episode documentary series that dive deep into subjects. Strategic storytelling across multiple installments.",
      icon: <Video size={24} />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Two Paths, One Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence in both church production and documentary storytelling, united by a commitment to quality and impact.
          </p>
        </div>

        {/* Church Production Branch */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-church rounded-full" />
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gradient-church">
              Church Production
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {churchServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant="church"
              />
            ))}
          </div>
        </div>

        {/* Media Production Branch */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-media rounded-full" />
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gradient-media">
              Media Production
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant="media"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
