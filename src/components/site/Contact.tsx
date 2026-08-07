export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-36 pb-20 text-center">
      <div className="wrap">
        <span className="label text-accent">Contact</span>
        <h2
          className="uppercase font-thin mt-6 mb-7"
          style={{
            fontSize: "clamp(44px, 8vw, 128px)",
            lineHeight: 1.05,
            letterSpacing: "0.05em",
            fontWeight: 100,
          }}
        >
          <a
            href="mailto:riann@thedepartmentcollective.com"
            className="text-ink no-underline transition-colors duration-500 hover:text-accent"
          >
            Let&apos;s make
            <br />
            something
          </a>
        </h2>
        <p className="mx-auto mb-11 max-w-[440px] text-sm leading-[1.8] text-ink-dim">
          For commissions, collaborations, and commercial inquiries, reach
          out and tell us what you&apos;re dreaming up.
        </p>
        <a
          href="mailto:riann@thedepartmentcollective.com"
          className="inline-flex items-center gap-10 border-b border-ink pb-2.5 text-[10.5px] uppercase font-normal tracking-[0.25em] text-ink no-underline transition-all duration-300 hover:text-accent hover:border-accent hover:gap-12"
        >
          riann@thedepartmentcollective.com <span aria-hidden>&#8594;</span>
        </a>
      </div>
    </section>
  );
}
