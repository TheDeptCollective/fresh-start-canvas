import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, Users, Film, Video, Camera, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "technical-directing",
    title: "Technical Directing",
    subtitle: "Live Production Excellence",
    description: "Professional technical direction that ensures every live production runs flawlessly.",
    whoFor: "Churches, conferences, and organizations running live broadcasts or multi-camera productions.",
    problem: "Inconsistent quality, missed cues, and technical issues that distract from the message.",
    includes: [
      "Live switching and program direction",
      "Camera team coordination and communication",
      "Graphics and media playback management",
      "Pre-production planning and rundowns",
      "Real-time troubleshooting and problem solving",
    ],
    outcome: "A seamless production experience where technology serves the message, not the other way around.",
    icon: Radio,
  },
  {
    id: "consulting",
    title: "Church Production Consulting",
    subtitle: "Systems & Team Development",
    description: "Build sustainable production systems and equip your team for long-term excellence.",
    whoFor: "Churches looking to elevate their production quality and develop their volunteer teams.",
    problem: "Lack of systems, inconsistent volunteer training, and no clear visual communication strategy.",
    includes: [
      "Production systems audit and recommendations",
      "Volunteer training programs",
      "Visual communication strategy development",
      "Equipment assessment and recommendations",
      "Ongoing coaching and support",
    ],
    outcome: "A well-trained team with clear systems that deliver consistent, excellent productions week after week.",
    icon: Users,
  },
  {
    id: "documentary-series",
    title: "Documentary Series Creation",
    subtitle: "Long-Form Storytelling",
    description: "Multi-episode narratives that explore your story with depth, authenticity, and cinematic quality.",
    whoFor: "Organizations with compelling stories that deserve deep exploration across multiple episodes.",
    problem: "Stories that need time to unfold but lack the strategic planning and production quality to captivate audiences.",
    includes: [
      "Story development and episode planning",
      "Multi-day production shoots",
      "Interview direction and capture",
      "Cinematic B-roll and coverage",
      "Professional editing and post-production",
      "Music and sound design",
    ],
    outcome: "A powerful series that builds connection, trust, and engagement over time.",
    icon: Film,
  },
  {
    id: "event-coverage",
    title: "Documentary-Style Event Coverage",
    subtitle: "Story-First Capture",
    description: "Event coverage that goes beyond highlights to reveal the heart, emotion, and meaning of your moments.",
    whoFor: "Organizations hosting conferences, retreats, galas, or significant events worth remembering.",
    problem: "Event videos that capture what happened but miss why it mattered.",
    includes: [
      "Pre-event story planning",
      "Multiple camera coverage",
      "Behind-the-scenes documentation",
      "Attendee and speaker interviews",
      "Cinematic editing and storytelling",
      "Multiple deliverable formats",
    ],
    outcome: "Event content that continues to inspire, recruit, and fundraise long after the event ends.",
    icon: Video,
  },
  {
    id: "regular-coverage",
    title: "Regular Event Coverage",
    subtitle: "Reliable & Scalable",
    description: "Professional, consistent event capture for recurring needs with clean delivery and scalable solutions.",
    whoFor: "Organizations needing reliable, ongoing event documentation without full documentary treatment.",
    problem: "Inconsistent quality or availability for regular events.",
    includes: [
      "Single or multi-camera capture",
      "Clean audio recording",
      "Quick-turnaround editing",
      "Consistent branding and style",
      "Archive-ready delivery",
    ],
    outcome: "A reliable content pipeline that captures every important moment with professional quality.",
    icon: Camera,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Our Services
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                Services designed for impact.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every service we offer is built around one goal: helping you move your audience. 
                From live productions to documentary storytelling, we bring technical excellence 
                and authentic narrative to everything we create.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="section-container">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground uppercase tracking-wider">
                            {service.subtitle}
                          </p>
                          <h2 className="font-display text-3xl md:text-4xl">{service.title}</h2>
                        </div>
                      </div>
                      
                      <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-6 mb-8">
                        <div>
                          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            Who It's For
                          </h3>
                          <p className="text-foreground/80">{service.whoFor}</p>
                        </div>

                        <div>
                          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            The Problem We Solve
                          </h3>
                          <p className="text-foreground/80">{service.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Includes & Outcome */}
                    <div className="bg-card rounded-2xl p-8 border border-border/50">
                      <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6 border-t border-border/50">
                        <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          The Outcome
                        </h3>
                        <p className="text-foreground font-medium">{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Let's talk about your project.
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
              Every project starts with a conversation. Tell us about your vision and we'll help you find the right approach.
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

export default Services;
