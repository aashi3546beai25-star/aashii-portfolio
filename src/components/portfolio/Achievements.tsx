import { useEffect, useState } from "react";
import { Award, Check, FileX, Smartphone, X, Zap } from "lucide-react";
import { Reveal, Section } from "./ui";
import hackHelixCert from "@/assets/hackhelix-certificate.pdf.asset.json";

type Item = {
  icon: typeof Zap; title: string; tagline: string; org: string; project?: string;
  text: string; highlights: string[]; tags: string[]; cert: string | null;
};

const ITEMS: Item[] = [
  {
    icon: Zap, title: "Hack Helix", tagline: "12-Hour Hackathon", org: "Thapar University",
    project: "Electricity Theft Detection",
    text: "Participated in Hack Helix, a 12-hour hackathon at Thapar University, where I explored technology-driven problem-solving through an Electricity Theft Detection project. The project focused on exploring how AI, machine learning, and data analysis could help identify potential electricity theft patterns.",
    highlights: [
      "Explored a real-world challenge through a technology-driven approach.",
      "Worked on an electricity theft detection concept using data-driven methods.",
      "Applied my interest in AI/ML and programming to a practical problem.",
      "Gained exposure to collaborative development and time-constrained project building.",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Python", "Data Analysis"],
    cert: hackHelixCert.url,
  },
  {
    icon: Smartphone, title: "Supercharge", tagline: "Apple Development Event", org: "Chitkara University — iOS Development Centre",
    text: "Attended Supercharge, an Apple-related development event at Chitkara University's iOS Development Centre, where I explored the Apple development ecosystem and gained exposure to iOS application development. The experience broadened my interest in modern development tools and application design for Apple platforms.",
    highlights: [
      "Gained exposure to the Apple development ecosystem.",
      "Developed an interest in iOS application development and SwiftUI.",
      "Explored development opportunities beyond traditional web technologies.",
      "Strengthened my motivation to learn emerging technologies and creative problem-solving.",
    ],
    tags: ["iOS Development", "SwiftUI", "Apple Ecosystem", "Application Development"],
    cert: null, // ✏️ add certificate URL when available
  },
];

function CertModal({ item, onClose }: { item: Item; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={`${item.title} certificate`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md" onClick={onClose}>
      <div className="glass relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-3xl p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">{item.title} · Certificate</h3>
          <button onClick={onClose} aria-label="Close certificate" className="rounded-full border p-2 hover:border-primary"><X className="h-4 w-4" /></button>
        </div>
        {item.cert ? (
          <iframe src={item.cert} title={`${item.title} certificate`} className="h-[70vh] w-full rounded-xl border bg-secondary" />
        ) : (
          <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed text-muted-foreground">
            <FileX className="h-8 w-8" /><p className="mt-3">Certificate coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function Achievements() {
  const [open, setOpen] = useState<Item | null>(null);
  return (
    <Section id="achievements" eyebrow="05 — Achievements & Events" title={<>Beyond the <span className="text-gradient">Code.</span></>}>
      <Reveal><p className="-mt-6 mb-10 max-w-2xl text-lg text-muted-foreground">Experiences that inspire me to keep learning, building, and exploring new technologies.</p></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 120} className="h-full">
            <article className="bg-gradient-brand group h-full rounded-3xl p-px transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
              <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-card p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-gradient-brand shadow-glow flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground transition-transform group-hover:scale-110">
                    <it.icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">{it.tagline}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{it.title} <span className="text-muted-foreground">| {it.tagline}</span></h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
                {it.project && <p className="mt-3 font-mono text-xs text-primary">Project · {it.project}</p>}
                <p className="mt-4 text-muted-foreground">{it.text}</p>
                <ul className="mt-6 space-y-2">
                  {it.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{h}</li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {it.tags.map((t) => <li key={t} className="rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">{t}</li>)}
                </ul>
                <div className="mt-auto pt-8">
                  <button onClick={() => setOpen(it)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${it.cert ? "bg-gradient-brand text-primary-foreground" : "border text-muted-foreground"}`}>
                    <Award className="h-4 w-4" /> {it.cert ? "View Certificate" : "Certificate coming soon"}
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {open && <CertModal item={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
