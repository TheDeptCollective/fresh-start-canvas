import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden"
      style={{ height: "clamp(560px, calc(100vh - 340px), 720px)", minHeight: "560px" }}
    >
      {/* Hero image: anchored right, fading into black on the left and bottom */}
      <div className="absolute inset-y-0 right-0 w-[70%] md:w-[61%] z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.45) 10%, rgba(10,10,10,0) 26%), linear-gradient(0deg, #0a0a0a 0%, rgba(10,10,10,0) 18%), linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0) 16%)",
          }}
        />
      </div>

      {/* Copy */}
      <div className="wrap relative z-[2] h-full pt-36 flex flex-col justify-center">
        <div>
          <span className="label reveal on block">
            Director&nbsp;&nbsp;/&nbsp;&nbsp;Cinematographer
          </span>
          <h1
            className="reveal on d1 uppercase font-thin text-ink mt-5 mb-8"
            style={{
              fontSize: "clamp(54px, 7.7vw, 120px)",
              lineHeight: 1.06,
              letterSpacing: "0.01em",
              fontWeight: 100,
            }}
          >
            Stories in
            <br />
            Motion
          </h1>
          <p className="reveal on d2 max-w-[300px] text-[15px] leading-[1.6] text-ink-dim font-light">
            I partner with visionary brands and agencies to craft cinematic
            work that moves people, emotionally and aesthetically.
          </p>
          <a
            href="#work"
            className="reveal on d3 mt-10 inline-flex items-center gap-6 border-b border-ink pb-2.5 text-[10.5px] uppercase font-normal tracking-[0.25em] text-ink no-underline transition-all duration-300 hover:text-accent hover:border-accent hover:gap-8"
          >
            View Work <span aria-hidden>&#8594;</span>
          </a>
        </div>
      </div>

      {/* Quote: bottom right */}
      <div className="reveal on d3 hidden lg:block absolute z-[2] right-[clamp(28px,3.6vw,60px)] bottom-[100px] max-w-[150px]">
        <p className="text-[14.5px] leading-[1.55] text-ink/90 font-light mb-4">
          &ldquo;The ability to create emotion in a frame is
          everything.&rdquo;
        </p>
        <span className="text-[9.5px] uppercase tracking-[0.25em] text-ink-dim">
          Riann Grant
        </span>
      </div>

      {/* Scroll hint: right edge */}
      <div className="hidden md:flex absolute z-[3] right-[clamp(24px,3.2vw,56px)] bottom-4 flex-col items-center gap-3">
        <span
          className="text-[9px] uppercase tracking-[0.4em] text-ink-faint"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <span
          className="w-px h-12 bg-gradient-to-b from-ink-dim to-transparent"
          style={{ animation: "drip 2.4s cubic-bezier(0.22,1,0.36,1) infinite" }}
        />
      </div>
    </header>
  );
}
