import { useEffect, useState } from "react";

interface Project {
  title: string;
  category: string;
  vimeoId: string;
  previewVimeoId: string;
}

// Produced with Impact Loop — looping muted previews, click to play full film
const projects: Project[] = [
  {
    title: "EmployNext — Youth Trades Program",
    category: "Documentary / Program Film",
    vimeoId: "1174716942",
    previewVimeoId: "1174716942",
  },
  {
    title: "Reddit AI Search Event Recap",
    category: "Event Recap",
    vimeoId: "1168847247",
    previewVimeoId: "1168847247",
  },
  {
    title: "Breathe Mindful Living",
    category: "Brand Launch Film",
    vimeoId: "1168844885",
    previewVimeoId: "1168844885",
  },
  {
    title: "Muamba Foundation × Bartley Skills Winnipeg",
    category: "Event Recap",
    vimeoId: "1159742453",
    previewVimeoId: "1159742453",
  },
];

function VimeoLightbox({
  vimeoId,
  onClose,
}: {
  vimeoId: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (vimeoId) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [vimeoId, onClose]);

  if (!vimeoId) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/95" onClick={onClose} />
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 text-white text-xl leading-none"
      >
        &#215;
      </button>
      <div className="relative z-10 w-full max-w-5xl aspect-video">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="work" className="pt-10 pb-24 md:pb-32">
      <div className="wrap">
        <div className="flex items-baseline justify-between mb-8">
          <span className="label">Selected Work</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[10px] uppercase font-normal tracking-[0.25em] text-ink-dim no-underline transition-all duration-300 hover:text-ink hover:gap-5"
          >
            Work With Riann <span aria-hidden>&#8594;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10px] gap-y-12">
          {projects.map((p) => (
            <button
              key={p.vimeoId}
              type="button"
              onClick={() => setSelectedVideo(p.vimeoId)}
              className="group block text-left no-underline text-ink cursor-pointer bg-transparent border-0 p-0"
            >
              <div
                className="relative overflow-hidden bg-black"
                style={{ aspectRatio: "2.35 / 1" }}
              >
                {/* Looping muted Vimeo preview */}
                <iframe
                  src={`https://player.vimeo.com/video/${p.previewVimeoId}?background=1&autoplay=1&loop=1&muted=1`}
                  className="absolute pointer-events-none"
                  style={{
                    border: 0,
                    width: "140%",
                    height: "140%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  allow="autoplay"
                  title={`${p.title} preview`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/30 group-hover:opacity-0 transition-opacity duration-500" />
                {/* Play hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white ml-0.5"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-[13px] uppercase font-normal tracking-[0.14em] text-ink transition-colors duration-300 group-hover:text-accent">
                  {p.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[8.5px] uppercase tracking-wide2 text-ink-faint">
                    {p.category}
                  </span>
                  <span className="text-[10px] tracking-[0.1em] text-ink-faint">
                    Watch &#8594;
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <VimeoLightbox vimeoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
