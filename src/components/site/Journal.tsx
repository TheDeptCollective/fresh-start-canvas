export default function Journal() {
  return (
    <section id="journal" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <span className="label text-accent">Journal</span>
        <p
          className="mt-7 max-w-[720px] font-thin"
          style={{
            fontSize: "clamp(22px, 2.6vw, 34px)",
            lineHeight: 1.4,
            letterSpacing: "0.03em",
            fontWeight: 100,
          }}
        >
          Notes from set and screen — process, references, and stories behind
          the work. Coming soon.
        </p>
      </div>
    </section>
  );
}
