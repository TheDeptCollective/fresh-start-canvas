import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Film, Video, Radio } from "lucide-react";

const featuredWork = {
  title: "Game Day",
  description: "A one-minute highlight reel featuring a coach breaking down his starters alongside intense game footage.",
  youtubeId: "Foc5j-_Wgv0",
  category: "Event Coverage",
};

const portfolioItems = {
  documentary: [
    {
      title: "Faith Forward: A Church Planting Story",
      description: "A 4-part documentary series following three church planters through their first year.",
      outcome: "Used for fundraising and team recruitment, raising over $250K in support.",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Hope Restored",
      description: "A mini-documentary capturing the transformation journey of families in a housing program.",
      outcome: "Primary tool for donor engagement, increasing recurring giving by 40%.",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "The Making Of",
      description: "Behind-the-scenes series documenting the creation of a worship album.",
      outcome: "Over 100K views and significant social media engagement.",
      thumbnail: "/placeholder.svg",
    },
  ],
  events: [
    {
      title: "Annual Leadership Summit 2024",
      description: "Full documentary-style coverage of a 3-day leadership conference with 2,000 attendees.",
      outcome: "Recap video used for next year's registration, contributing to a sold-out event.",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Vision Night",
      description: "Intimate coverage of a church's annual vision casting event.",
      outcome: "Shared with congregation and used for new member onboarding.",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Charity Gala",
      description: "Elegant coverage capturing the heart of a nonprofit's flagship fundraising event.",
      outcome: "Highlight reel generated additional donations post-event.",
      thumbnail: "/placeholder.svg",
    },
  ],
  production: [
    {
      title: "Sunday Production Overhaul",
      description: "Complete production systems redesign and team training for a 3,000-member church.",
      outcome: "Volunteer retention up 60%, production quality consistently excellent.",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Live Broadcast Launch",
      description: "Technical direction and training for a church launching their first online campus.",
      outcome: "Successful launch reaching 500+ weekly online viewers.",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Conference Technical Direction",
      description: "Multi-day technical direction for a regional denominational conference.",
      outcome: "Seamless 12-hour production days with zero technical issues.",
      thumbnail: "/placeholder.svg",
    },
  ],
};

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Our Work
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Stories that move.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project represents a partnership, a vision brought to life, and an audience moved to action. 
                Explore our work across documentaries, events, and live production.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4 text-center">
                Featured
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                {featuredWork.title}
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                {featuredWork.description}
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredWork.youtubeId}?rel=0`}
                  title={featuredWork.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentary Work */}
        <section className="section-padding">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-10">
              <Film className="h-6 w-6 text-narrative" />
              <h2 className="font-display text-2xl md:text-3xl">Documentary Work</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.documentary.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden mb-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <p className="text-sm text-foreground/70 italic">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Coverage */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-10">
              <Video className="h-6 w-6 text-accent" />
              <h2 className="font-display text-2xl md:text-3xl">Event Coverage</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.events.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-video bg-card rounded-xl overflow-hidden mb-4 border border-border/50">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <p className="text-sm text-foreground/70 italic">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Church Production */}
        <section className="section-padding">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-10">
              <Radio className="h-6 w-6 text-foreground" />
              <h2 className="font-display text-2xl md:text-3xl">Church Production</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.production.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden mb-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <p className="text-sm text-foreground/70 italic">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to create something together?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can bring your story to life with the same care and quality you see here.
            </p>
            <Link to="/contact" className="btn-accent group">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
