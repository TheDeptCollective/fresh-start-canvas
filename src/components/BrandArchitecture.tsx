import { Film, Feather } from "lucide-react";

const BrandArchitecture = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium text-primary-foreground/60 uppercase tracking-widest mb-4">
            Our Structure
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            One collective. Two specialized departments.
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Department Collective houses two focused departments, each bringing specialized expertise to their craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* narRItive Dept */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 md:p-10 hover:bg-primary-foreground/10 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-narrative/20 flex items-center justify-center mb-6">
              <Film className="h-7 w-7 text-narrative" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              narRItive Dept
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Documentary series creation, story-driven event coverage, and cinematic long-form storytelling. We capture the narratives that matter.
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-narrative" />
                Documentary Series Creation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-narrative" />
                Documentary-Style Event Coverage
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-narrative" />
                Regular Event Coverage
              </li>
            </ul>
          </div>

          {/* The Scribe Dept */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 md:p-10 hover:bg-primary-foreground/10 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-scribe/20 flex items-center justify-center mb-6">
              <Feather className="h-7 w-7 text-scribe" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              The Scribe Dept
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Live production excellence and church consulting. We equip teams and lead productions that communicate with clarity.
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-scribe" />
                Technical Directing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-scribe" />
                Church Production Consulting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandArchitecture;
