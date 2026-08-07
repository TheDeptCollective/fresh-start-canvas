export default function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <span className="text-[9.5px] uppercase tracking-label text-ink-faint">
          &copy; 2026 The Department Collective
        </span>
        <a
          href="#top"
          className="text-[9.5px] uppercase tracking-label text-ink-faint no-underline hover:text-ink transition-colors"
        >
          Back to top &#8593;
        </a>
        <span className="text-[9.5px] uppercase tracking-label text-ink-faint">
          Winnipeg &middot; Worldwide
        </span>
      </div>
    </footer>
  );
}
