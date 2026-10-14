import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, GraduationCap, Sparkles, Code2, Trophy } from "lucide-react";
import { Reveal, Section, Typewriter, Cursor } from "@/components/portfolio/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aashi — Web Developer & AI/ML Student" },
      { name: "description", content: "Portfolio of Aashi, a BTech AI/ML student building web products and exploring AI and software engineering." },
      { property: "og:title", content: "Aashi — Web Developer & AI/ML Student" },
      { property: "og:description", content: "Projects, skills and contact details for Aashi, BTech AI/ML student and web developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ✏️ Fill these in with your real links
const LINKS = {
  email: "mailto:your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  sweetcrumbRepo: "https://github.com/your-username/sweetcrumbbb",
};

const NAV = [
  ["about", "About"], ["projects", "Projects"], ["skills", "Skills"], ["journey", "Journey"], ["contact", "Contact"],
] as const;

const SKILLS = ["Web Development", "HTML", "CSS", "JavaScript", "AI / ML", "Cloud Computing", "Azure (AZ-900)", "Problem Solving"];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass border-x-0 border-t-0" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold">aashi<span className="text-primary">.</span></a>
        <ul className="hidden gap-8 md:flex">
          {NAV.map(([id, l]) => (
            <li key={id}><a href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="glass mx-4 mb-4 rounded-2xl p-4 md:hidden">
          {NAV.map(([id, l]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-secondary">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="orb absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/40" aria-hidden />
      <div className="orb absolute -right-10 bottom-10 h-96 w-96 rounded-full bg-accent/30 [animation-delay:-7s]" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" /> Open to internships · freelance · collaborations
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] sm:text-7xl md:text-8xl">
            Hey, I'm Aashi <span className="inline-block origin-[70%_70%] hover:animate-bounce">👋</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 font-display text-2xl font-semibold sm:text-4xl"><Typewriter words={["Web Developer", "AI/ML Enthusiast", "Problem Solver"]} /></p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm a BTech student specialising in Artificial Intelligence and Machine Learning, passionate about building creative digital experiences and exploring emerging technologies. I enjoy turning ideas into practical projects.
          </p>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            <span className="text-foreground/80">Currently exploring</span>
            <span className="mx-2 text-primary">·</span>Web Development
            <span className="mx-2 text-primary">·</span>AI/ML
            <span className="mx-2 text-primary">·</span>Cloud Computing
          </p>
        </Reveal>
        <Reveal delay={400} className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="group bg-gradient-brand shadow-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-colors hover:border-primary">
            Contact Me
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: GraduationCap, title: "BTech, AI & ML", text: "Specialising in Artificial Intelligence and Machine Learning." },
    { icon: Sparkles, title: "Emerging tech", text: "Exploring web development, AI and cloud computing — and where they overlap." },
    { icon: Code2, title: "Ideas into projects", text: "Turning ideas into practical projects, like SweetCrumbbb, a bakery website." },
  ];
  return (
    <Section id="about" eyebrow="01 — About" title={<>Curious mind, <span className="text-gradient">builder's hands.</span></>}>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="glass h-full rounded-3xl p-8 transition-all hover:-translate-y-1 hover:border-primary/50">
              <c.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard() {
  const tilt = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    e.currentTarget.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    e.currentTarget.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  return (
    <div
      onMouseMove={tilt}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      className="glass group relative overflow-hidden rounded-3xl p-8 transition-transform duration-300 md:p-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: "radial-gradient(500px circle at var(--mx) var(--my), color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)" }} />
      <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="font-mono text-xs text-accent">Featured · Live website</p>
          <h3 className="mt-3 text-3xl font-bold md:text-4xl">SweetCrumbbb 🧁</h3>
          <p className="mt-4 text-muted-foreground">
            A bakery website designed to showcase products and simplify custom cake ordering — so customers can browse the treats and place a bespoke order without the back-and-forth.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "Netlify"].map((t) => (
              <li key={t} className="rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">{t}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://sweetcrumbbb.netlify.app/" target="_blank" rel="noreferrer" className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={LINKS.sweetcrumbRepo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold hover:border-primary">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <a href="https://sweetcrumbbb.netlify.app/" target="_blank" rel="noreferrer" aria-label="Open SweetCrumbbb live site"
          className="block overflow-hidden rounded-2xl border bg-secondary shadow-glow">
          <div className="flex gap-1.5 border-b px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-accent/70" /><span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">sweetcrumbbb.netlify.app</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <iframe src="https://sweetcrumbbb.netlify.app/" title="SweetCrumbbb preview" loading="lazy" tabIndex={-1}
              className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] transition-transform duration-700 group-hover:scale-[0.42]" />
          </div>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="02 — Projects" title={<>Things I've <span className="text-gradient">shipped.</span></>}>
      <Reveal><ProjectCard /></Reveal>
      <Reveal delay={100}>
        <div className="mt-6 rounded-3xl border border-dashed p-8 text-center text-muted-foreground">
          <Code2 className="mx-auto h-6 w-6" /> <p className="mt-2">More projects in the works — stay tuned.</p>
        </div>
      </Reveal>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Skills" title={<>My <span className="text-gradient">toolkit.</span></>}>
      <ul className="flex flex-wrap gap-4">
        {SKILLS.map((s, i) => (
          <Reveal key={s} delay={i * 50}>
            <li className="glass rounded-2xl px-6 py-4 font-display text-lg font-semibold transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow">{s}</li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

// ✏️ Add real entries here: { title, org, date, text }
const JOURNEY: { title: string; org: string; date: string; text: string }[] = [
  { title: "BTech in Artificial Intelligence & Machine Learning", org: "Your University", date: "Present", text: "Second year · 9.5 CGPA" },
];

function Journey() {
  return (
    <Section id="journey" eyebrow="04 — Experience & Achievements" title={<>The <span className="text-gradient">journey</span> so far.</>}>
      <ol className="relative space-y-8 border-l pl-8">
        {JOURNEY.map((j, i) => (
          <Reveal key={i} delay={i * 100}>
            <li className="relative">
              <span className="bg-gradient-brand absolute -left-[41px] top-1.5 h-4 w-4 rounded-full ring-4 ring-background" />
              <p className="font-mono text-xs text-accent">{j.date}</p>
              <h3 className="mt-1 text-xl font-bold">{j.title}</h3>
              <p className="text-muted-foreground">{j.org} · {j.text}</p>
            </li>
          </Reveal>
        ))}
        <li className="text-muted-foreground">More milestones coming soon.</li>
      </ol>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", href: LINKS.email },
    { icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
    { icon: Github, label: "GitHub", href: LINKS.github },
  ];
  return (
    <Section id="contact" eyebrow="05 — Contact" title={<>Let's build <span className="text-gradient">something.</span></>}>
      <Reveal>
        <p className="max-w-xl text-lg text-muted-foreground">Open to internships, freelance projects and collaborations. Drop a message — I'd love to hear from you.</p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <a href={it.href} target={it.label === "Email" ? undefined : "_blank"} rel="noreferrer"
              className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary">
              <span className="flex items-center gap-3 font-semibold"><it.icon className="h-5 w-5 text-accent" />{it.label}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Index() {
  return (
    <div className="relative overflow-x-clip">
      <Cursor />
      <Nav />
      <main>
        <Hero /><About /><Projects /><Skills /><Journey /><Contact />
      </main>
      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Aashi · Built with care</footer>
    </div>
  );
}
