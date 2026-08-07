const principles = [
  {
    num: "01",
    title: "Story First",
    body: "Before cameras, before lenses — a narrative worth telling. Concept and intention drive every creative decision from the first conversation.",
  },
  {
    num: "02",
    title: "Crafted in Camera",
    body: "Light, movement, and composition built with a cinematic eye — so every frame could stand on its own.",
  },
  {
    num: "03",
    title: "Finished with Feeling",
    body: "Edit, colour, and sound shaped until the work doesn't just look right — it lands. Emotion is the final deliverable.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-bg-soft border-y border-line py-24 md:py-36"
    >
      <div className="wrap">
        <span className="label text-accent">Approach</span>
        <p
          className="mt-7 max-w-[900px] font-thin"
          style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            lineHeight: 1.35,
            letterSpacing: "0.03em",
            fontWeight: 100,
          }}
        >
          Every project begins with a question —{" "}
          <em className="not-italic text-accent">
            what should the audience feel?
          </em>{" "}
          The answer shapes everything that follows.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {principles.map((p) => (
            <div key={p.num} className="border-t border-line pt-7">
              <span className="text-[10px] tracking-label text-accent font-normal">
                {p.num}
              </span>
              <h3 className="mt-4 mb-3 text-[17px] uppercase font-normal tracking-[0.14em]">
                {p.title}
              </h3>
              <p className="text-sm leading-[1.8] text-ink-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
