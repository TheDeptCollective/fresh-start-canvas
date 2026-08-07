import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work", active: true },
  { label: "Director", href: "#director" },
  { label: "Approach", href: "#approach" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-cine ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between py-7">
        <a
          href="#top"
          className="text-[10.5px] uppercase font-normal tracking-[0.28em] text-ink whitespace-nowrap no-underline"
        >
          Riann Grant&nbsp;&nbsp;&middot;&nbsp;&nbsp;The Department Collective
        </a>
        <ul className="hidden md:flex list-none gap-[clamp(20px,3vw,52px)]">
          {links.map((l) => (
            <li key={l.label} className="relative">
              <a
                href={l.href}
                className={`relative pb-1.5 text-[10px] uppercase font-normal tracking-label no-underline transition-colors duration-300 ${
                  l.active ? "text-ink" : "text-ink-dim hover:text-ink"
                }`}
              >
                {l.label}
                {l.active && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-[3px] h-[3px] rounded-full bg-ink" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
