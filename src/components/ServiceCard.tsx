import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant: "church" | "media";
}

const ServiceCard = ({ title, description, icon, variant }: ServiceCardProps) => {
  return (
    <div className={`service-card ${variant === "church" ? "branch-church" : "branch-media"}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        variant === "church" 
          ? "bg-church/10 text-church" 
          : "bg-media/10 text-media"
      }`}>
        {icon}
      </div>
      <h3 className="font-display text-xl md:text-2xl mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
