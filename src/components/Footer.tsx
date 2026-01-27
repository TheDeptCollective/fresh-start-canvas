import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-semibold">
                Department Collective
              </span>
            </Link>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              A creative production collective specializing in visual storytelling, 
              live production, and documentary-style content for purpose-driven brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
                { label: "Links", href: "/links" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@departmentcollective.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} Department Collective. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <span>narRItive Dept</span>
            <span>•</span>
            <span>The Scribe Dept</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
