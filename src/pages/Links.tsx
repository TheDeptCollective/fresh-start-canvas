import { Link } from "react-router-dom";
import { 
  Play, 
  BookOpen, 
  Mail, 
  Briefcase, 
  Instagram, 
  Youtube, 
  Linkedin,
  ExternalLink
} from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

const Links = () => {
  const linkCategories: { title: string; links: LinkItem[] }[] = [
    {
      title: "Watch",
      links: [
        { label: "Latest Documentary", href: "#", icon: Play },
        { label: "YouTube Channel", href: "#", icon: Youtube, external: true },
      ],
    },
    {
      title: "Learn",
      links: [
        { label: "Our Services", href: "/services", icon: BookOpen },
        { label: "View Portfolio", href: "/portfolio", icon: Briefcase },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Start a Project", href: "/contact", icon: Mail },
        { label: "Instagram", href: "#", icon: Instagram, external: true },
        { label: "LinkedIn", href: "#", icon: Linkedin, external: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center">
        <Link to="/" className="inline-block mb-4">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-display text-2xl font-bold">DC</span>
          </div>
        </Link>
        <h1 className="font-display text-2xl font-semibold mb-2">Department Collective</h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
          Visual storytelling & production for purpose-driven brands
        </p>
      </header>

      {/* Links */}
      <main className="flex-1 px-6 pb-12 max-w-md mx-auto w-full">
        <div className="space-y-8">
          {linkCategories.map((category) => (
            <div key={category.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-1">
                {category.title}
              </p>
              <div className="space-y-3">
                {category.links.map((link) => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button flex items-center justify-between group"
                    >
                      <span className="flex items-center gap-3">
                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        {link.label}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="link-button flex items-center justify-between group"
                    >
                      <span className="flex items-center gap-3">
                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        {link.label}
                      </span>
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-brands */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Our Departments
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-card rounded-xl border border-border/50">
              <p className="font-display text-lg mb-1">narRItive</p>
              <p className="text-xs text-muted-foreground">Documentary</p>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border border-border/50">
              <p className="font-display text-lg mb-1">The Scribe</p>
              <p className="text-xs text-muted-foreground">Testimonies</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 text-center border-t border-border/50">
        <Link 
          to="/" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Visit Full Website →
        </Link>
      </footer>
    </div>
  );
};

export default Links;
