import portrait from "@/assets/riann-portrait.jpg";

export default function Director() {
  return (
    <section id="director" className="py-24 md:py-36">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.1fr] items-center gap-12 md:gap-24">
        <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "4 / 5" }}>
          <img
            src={portrait}
            alt="Riann Grant"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
        </div>
        <div>
          <span className="label text-accent">The Director</span>
          <h2
            className="uppercase font-thin mt-5 mb-7"
            style={{
              fontSize: "clamp(34px, 4.4vw, 64px)",
              lineHeight: 1.12,
              letterSpacing: "0.05em",
              fontWeight: 100,
            }}
          >
            Riann Grant
          </h2>
          <p className="max-w-[520px] text-[15px] leading-[1.85] text-ink-dim mb-4">
            Riann Grant is a director and cinematographer, and the creative
            lead of The Department Collective, a studio built around one
            belief: that great work makes people feel something before it
            makes them think.
          </p>
          <p className="max-w-[520px] text-[15px] leading-[1.85] text-ink-dim">
            From brand films to community stories, her work spans subjects and
            formats while holding one constant: a cinematic approach to
            storytelling, and care in every frame.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-10 border-b border-ink pb-2.5 text-[10.5px] uppercase font-normal tracking-[0.25em] text-ink no-underline transition-all duration-300 hover:text-accent hover:border-accent hover:gap-12"
          >
            Work Together <span aria-hidden>&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
