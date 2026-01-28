import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
    { label: "Links", href: "/links" },
  ];

  const scribeDeptServices = [
    { title: "Technical Directing", href: "/services#technical-directing" },
    { title: "Church Production Consulting", href: "/services#consulting" },
  ];

  const narrativeDeptServices = [
    { title: "Documentary Series Creation", href: "/services#documentary-series" },
    { title: "Documentary-Style Event Coverage", href: "/services#event-coverage" },
    { title: "Regular Event Coverage", href: "/services#regular-coverage" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-display text-lg md:text-xl font-semibold tracking-tight">
              Department Collective
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid gap-4">
                        {/* The Scribe Dept */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-scribe" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              The Scribe Dept
                            </span>
                          </div>
                          <div className="space-y-1 pl-4">
                            {scribeDeptServices.map((service) => (
                              <NavigationMenuLink key={service.href} asChild>
                                <Link
                                  to={service.href}
                                  className="block py-1.5 text-sm text-foreground/80 hover:text-scribe transition-colors"
                                >
                                  {service.title}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>

                        {/* narRItive Dept */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-narrative" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              narRItive Dept
                            </span>
                          </div>
                          <div className="space-y-1 pl-4">
                            {narrativeDeptServices.map((service) => (
                              <NavigationMenuLink key={service.href} asChild>
                                <Link
                                  to={service.href}
                                  className="block py-1.5 text-sm text-foreground/80 hover:text-narrative transition-colors"
                                >
                                  {service.title}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>

                        {/* View All */}
                        <div className="pt-2 border-t border-border/50">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services"
                              className="block py-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                            >
                              View All Services →
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {/* Services Dropdown Mobile */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-base font-medium text-muted-foreground hover:text-foreground">
                    Services
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 pl-4 space-y-4">
                    {/* Scribe Dept */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-scribe" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          The Scribe Dept
                        </span>
                      </div>
                      <div className="space-y-2 pl-4">
                        {scribeDeptServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block text-sm text-foreground/80"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* narRItive Dept */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-narrative" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          narRItive Dept
                        </span>
                      </div>
                      <div className="space-y-2 pl-4">
                        {narrativeDeptServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block text-sm text-foreground/80"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/services"
                      className="block text-sm font-medium text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </details>
              </li>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`text-base font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="btn-primary text-sm py-2.5 px-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
