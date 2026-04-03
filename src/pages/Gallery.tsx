import { FormEvent, useState } from "react";
import {
  Download,
  Film,
  Image as ImageIcon,
  Lock,
  LogOut,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type GalleryAsset = {
  title: string;
  src: string;
  type: "image" | "video";
  poster?: string;
};

type ClientGallery = {
  clientName: string;
  eventName: string;
  email: string;
  accessCode: string;
  coverImage: string;
  summary: string;
  photos: GalleryAsset[];
  videos: GalleryAsset[];
};

const clientGalleries: ClientGallery[] = [
  {
    clientName: "J & D",
    eventName: "Wedding Gallery",
    email: "jd@departmentcollective.com",
    accessCode: "JDWED2026",
    coverImage: "/client-gallery/images/jd-wedding-01.jpg",
    summary:
      "A polished client gallery with wedding stills, a featured film, and direct download links for delivery.",
    photos: [
      {
        title: "Portrait Still",
        src: "/client-gallery/images/jd-wedding-01.jpg",
        type: "image",
      },
      {
        title: "Family Still",
        src: "/client-gallery/images/jd-wedding-02.jpg",
        type: "image",
      },
    ],
    videos: [
      {
        title: "Wedding Film",
        src: "/client-gallery/videos/jd-wedding.mp4",
        type: "video",
        poster: "/client-gallery/images/jd-wedding-01.jpg",
      },
    ],
  },
  {
    clientName: "Dr. Lola",
    eventName: "Birthday Film Delivery",
    email: "lola@departmentcollective.com",
    accessCode: "LOLA2026",
    coverImage: "/client-gallery/images/jd-wedding-02.jpg",
    summary:
      "A private delivery page for video playback and download access, ready for future photos as more assets are added.",
    photos: [],
    videos: [
      {
        title: "Birthday Highlight Film",
        src: "/client-gallery/videos/dr-lola-birthday.mp4",
        type: "video",
        poster: "/client-gallery/images/jd-wedding-02.jpg",
      },
    ],
  },
];

const Gallery = () => {
  const defaultGallery = clientGalleries[0];
  const [email, setEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeGallery, setActiveGallery] = useState<ClientGallery | null>(defaultGallery);
  const [selectedVideo, setSelectedVideo] = useState<GalleryAsset | null>(
    defaultGallery.videos[0] ?? null
  );

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const match = clientGalleries.find(
      (gallery) =>
        gallery.email.toLowerCase() === email.trim().toLowerCase() &&
        gallery.accessCode === accessCode.trim()
    );

    if (!match) {
      setLoginError("We couldn't find a gallery with that email and access code.");
      return;
    }

    setLoginError("");
    setActiveGallery(match);
    setSelectedVideo(match.videos[0] ?? null);
  };

  const handleLogout = () => {
    setActiveGallery(null);
    setSelectedVideo(null);
    setEmail("");
    setAccessCode("");
    setLoginError("");
  };

  const openDemoGallery = (gallery: ClientGallery) => {
    setLoginError("");
    setEmail(gallery.email);
    setAccessCode(gallery.accessCode);
    setActiveGallery(gallery);
    setSelectedVideo(gallery.videos[0] ?? null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Client Gallery
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                  Private photo and video delivery for your clients.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This gallery page gives clients a clean login experience, a built-in
                  video viewer, and one-click downloads for both stills and films.
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  {clientGalleries.map((gallery) => (
                    <button
                      key={gallery.email}
                      type="button"
                      onClick={() => openDemoGallery(gallery)}
                      className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                        activeGallery?.email === gallery.email
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border bg-card hover:border-accent/50 hover:bg-secondary"
                      }`}
                      aria-pressed={activeGallery?.email === gallery.email}
                    >
                      Open {gallery.clientName} demo
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-card border border-border/60 p-5">
                    <Lock className="h-5 w-5 mb-3 text-accent" />
                    <p className="font-medium mb-1">Private access</p>
                    <p className="text-sm text-muted-foreground">
                      Email and passcode gate each client gallery.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-card border border-border/60 p-5">
                    <PlayCircle className="h-5 w-5 mb-3 text-accent" />
                    <p className="font-medium mb-1">Video viewer</p>
                    <p className="text-sm text-muted-foreground">
                      Watch films directly on the page before downloading.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-card border border-border/60 p-5">
                    <Download className="h-5 w-5 mb-3 text-accent" />
                    <p className="font-medium mb-1">Direct downloads</p>
                    <p className="text-sm text-muted-foreground">
                      Deliver finished media without a separate portal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-border/60 bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Secure delivery</p>
                    <h2 className="font-display text-2xl">Client sign in</h2>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="gallery-email">
                      Client email
                    </label>
                    <input
                      id="gallery-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="client@example.com"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-accent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="gallery-access-code">
                      Access code
                    </label>
                    <input
                      id="gallery-access-code"
                      type="password"
                      value={accessCode}
                      onChange={(event) => setAccessCode(event.target.value)}
                      placeholder="Enter private code"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-accent"
                      required
                    />
                  </div>

                  {loginError ? (
                    <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                      {loginError}
                    </p>
                  ) : null}

                  <button type="submit" className="btn-primary w-full">
                    Unlock gallery
                  </button>
                </form>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Demo mode is currently turned on for testing, so the first client
                  gallery loads automatically below. You can also switch between demo
                  clients with the buttons on the left. Connect it to secure auth or
                  private storage before using it for production delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {activeGallery ? (
          <section className="section-padding">
            <div className="section-container">
              <div className="mb-10 flex flex-col gap-6 rounded-[28px] border border-border/60 bg-card p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={activeGallery.coverImage}
                    alt={activeGallery.eventName}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                      {activeGallery.clientName}
                    </p>
                    <h2 className="font-display text-3xl">{activeGallery.eventName}</h2>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {activeGallery.summary}
                    </p>
                  </div>
                </div>

                <button onClick={handleLogout} className="btn-secondary">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </button>
              </div>

              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                  <div className="rounded-[28px] border border-border/60 bg-card p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <Film className="h-5 w-5 text-accent" />
                      <h3 className="font-display text-2xl">Video viewer</h3>
                    </div>

                    {selectedVideo ? (
                      <div className="space-y-4">
                        <video
                          key={selectedVideo.src}
                          controls
                          preload="metadata"
                          poster={selectedVideo.poster}
                          className="aspect-video w-full rounded-2xl bg-black object-cover"
                        >
                          <source src={selectedVideo.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="font-medium">{selectedVideo.title}</p>
                            <p className="text-sm text-muted-foreground">
                              Stream in-browser or download the delivered file.
                            </p>
                          </div>

                          <a
                            href={selectedVideo.src}
                            download
                            className="btn-primary"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download video
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-sm text-muted-foreground">
                        No videos have been added to this gallery yet.
                      </div>
                    )}
                  </div>

                  <div className="rounded-[28px] border border-border/60 bg-card p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <ImageIcon className="h-5 w-5 text-accent" />
                      <h3 className="font-display text-2xl">Photos</h3>
                    </div>

                    {activeGallery.photos.length > 0 ? (
                      <div className="grid gap-5 sm:grid-cols-2">
                        {activeGallery.photos.map((photo) => (
                          <article
                            key={photo.src}
                            className="overflow-hidden rounded-3xl border border-border/60 bg-background"
                          >
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="flex items-center justify-between gap-4 p-4">
                              <div>
                                <p className="font-medium">{photo.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  Full-resolution still download
                                </p>
                              </div>
                              <a href={photo.src} download className="btn-secondary px-5 py-3">
                                <Download className="h-4 w-4" />
                              </a>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-sm text-muted-foreground">
                        This client view is currently set up for video delivery only.
                      </div>
                    )}
                  </div>
                </div>

                <aside className="space-y-6">
                  <div className="rounded-[28px] border border-border/60 bg-card p-5">
                    <h3 className="font-display text-2xl mb-4">Available videos</h3>
                    <div className="space-y-3">
                      {activeGallery.videos.map((video) => (
                        <button
                          key={video.src}
                          onClick={() => setSelectedVideo(video)}
                          className={`w-full rounded-2xl border p-4 text-left transition ${
                            selectedVideo?.src === video.src
                              ? "border-accent bg-accent/5"
                              : "border-border/60 hover:border-accent/40"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="font-medium">{video.title}</p>
                              <p className="text-sm text-muted-foreground">
                                Click to load in the viewer
                              </p>
                            </div>
                            <PlayCircle className="h-5 w-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-border/60 bg-secondary/40 p-5">
                    <h3 className="font-display text-2xl mb-4">Delivery notes</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li>Clients can preview their gallery without leaving the site.</li>
                      <li>Every photo and video includes a direct file download action.</li>
                      <li>
                        The current login is front-end only, so it should be treated as a
                        polished prototype until you connect secure authentication.
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
