import SiteHeader from "@/components/SiteHeader";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SiteHeader active="home" />

      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="reveal-up">
          <p className="text-sm tracking-wide text-slate-600">
            Tulsa, OK • Remote
          </p>

          <h1 className="mt-2 font-serif text-5xl leading-[1.06] tracking-tight text-[color:var(--ink)]">
            I bring order to chaos—{" "}
            <span className="highlight-swipe">one Oxford comma</span> at a time.
          </h1>

          <p className="mt-5 text-xl leading-relaxed text-[color:var(--ink-2)]">
            Conversation design, content ops, and AI workflows that help teams turn messy work into shipped work.
          </p>

          <p className="mt-5 text-base leading-relaxed text-slate-700">
            I’m a linguistics-trained content and creative operations leader. Give me rough ideas, messy notes,
            tangled stakeholders, or a workflow held together with vibes—and I’ll turn it into clear, usable work
            that actually ships.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-medium text-white shadow transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              View resume
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="https://calendly.com/saradjoyce"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--sage)] px-5 py-2 text-sm font-medium text-[color:var(--ink)] shadow transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Book a call
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/saradjoyce/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-2 text-sm font-medium text-[color:var(--ink)] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
            >
              LinkedIn
              <span className="text-[color:var(--ink)]/60 transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Editorial leadership",
              "Project management",
              "AI enablement",
              "Conversation design",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1 text-xs text-[color:var(--ink-2)] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="card card-hover reveal-up p-4" style={{ animationDelay: "90ms" }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[color:var(--mint)]">
            <Image
              src="/sj_headshot.png"
              alt="Sara Joyce"
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              priority
            />
          </div>

          <p className="mt-4 text-sm text-slate-600">
            P.S. Yes, the Oxford comma is non-negotiable.
          </p>
        </div>
      </div>
            {/* Featured work */}
      <section className="mt-16 reveal-up reveal-delay-1">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
              Featured work
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A couple projects that show how I think: systems, voice, and shipped outcomes.
            </p>
          </div>

          <a
            href="/work"
            className="focus-ring hidden sm:inline text-sm font-medium text-[color:var(--ink)] underline decoration-transparent underline-offset-4 transition hover:decoration-slate-300"
          >
            View all →
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Voiceflow card */}
          <a href="/work/voiceflow-bot" className="card card-hover p-6 focus-ring">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Case study
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--ink)]">
              Voiceflow bot: AI Content Editor
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              A conversational flow that turns messy drafts into clean, usable copy
              without losing the human voice.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink-2)]">
              Read case study <span className="opacity-70">→</span>
            </div>
          </a>

          {/* Resume shortcut card */}
          <a href="/resume" className="card card-hover p-6 focus-ring">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Quick skim
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--ink)]">
              Resume (with receipts)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Leadership, ops, editorial systems, and AI workflow experiments across
              digital and print.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink-2)]">
              View resume <span className="opacity-70">→</span>
            </div>
          </a>
        </div>
      </section>
            {/* Divider */}
      <div className="mt-16 h-px w-full bg-[color:var(--line)]/60" />

      {/* What I do */}
      <section className="mt-16 reveal-up reveal-delay-2">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
          What I do
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          I’m at my best when I’m making work clearer, faster, and easier to ship—especially when the inputs are messy.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Conversation design",
              body: "Human-sounding flows, prompt patterns, and guardrails that turn fuzzy requests into usable outputs.",
            },
            {
              title: "Content operations",
              body: "Runsheets, templates, QA loops, and workflows that scale without becoming soul-crushing bureaucracy.",
            },
            {
              title: "AI workflows",
              body: "Practical automation that helps teams move faster—without shipping hallucinations or chaos.",
            },
          ].map((item) => (
            <div key={item.title} className="card card-hover p-6">
              <h3 className="text-base font-semibold tracking-tight text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Bottom CTA */}
      <section className="mt-20 reveal-up reveal-delay-3">
        <div className="card card-hover p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
              Want to work together?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              I love messy problems, ambiguous projects, and teams that want to ship smarter.
              If that sounds like you, we should talk.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/saradjoyce"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-medium text-white shadow transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Book a call
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="mailto:saradjoyce@gmail.com"
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-2 text-sm font-medium text-[color:var(--ink)] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
            >
              Email me
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
