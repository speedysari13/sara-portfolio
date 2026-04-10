import SiteHeader from "@/components/SiteHeader";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SiteHeader active="home" />

      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="reveal-up">

          <h1 className="mt-2 font-serif text-5xl leading-[1.06] tracking-tight text-[color:var(--ink)]">
            I bring order to chaos—{" "}
            <span className="highlight-swipe">one Oxford comma</span> at a time.
          </h1>

          <p className="mt-5 text-xl leading-relaxed text-[color:var(--ink-2)]">
            Content strategy, editorial leadership, and creative operations that turn messy work into clear, high-impact output.
          </p>

          <p className="mt-5 text-base leading-relaxed text-slate-700">
  I’m a linguistics-trained content and creative operations leader. Give me rough ideas, tangled stakeholders, or a workflow held together with vibes—and I’ll turn it into focused, usable work that actually ships.
</p>

<p className="mt-5 text-base leading-relaxed text-slate-700">
  I specialize in:
</p>

<ul className="mt-3 list-disc pl-5 text-base leading-relaxed text-slate-700">
  <li>Content strategy & editorial direction</li>
  <li>Creative project management & operations</li>
  <li>UX writing & content design</li>
  <li>Building systems that scale content without sacrificing quality</li>
</ul>

          <div className="mt-8 flex flex-wrap gap-4">
  <Link
    href="/work"
    className="rounded-full bg-[#152438] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
  >
    Work
  </Link>

  <Link
  href="/resume"
  className="rounded-full bg-[color:var(--sage)] px-6 py-3 text-sm font-medium text-[color:var(--ink)] transition hover:-translate-y-0.5 hover:shadow-md"
>
  Resume
</Link>

  <a
    href="https://www.linkedin.com/in/saradjoyce/"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
  >
    LinkedIn
  </a>
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
              Voiceflow bot: The Content Decider
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              A conversational flow that turns messy drafts into clean, usable copy
              without losing the human voice.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink-2)]">
              Read case study <span className="opacity-70">→</span>
            </div>
          </a>

          {/* Video shortcut card */}
          <a href="/work/video" className="card card-hover p-6 focus-ring">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Selected work
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--ink)]">
              Video + campaign work
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Commercials, brand storytelling, and product explainers—managed end-to-end, from messy inputs to finished, shipped work.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink-2)]">
              View video work <span className="opacity-70">→</span>
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
              title: "Content strategy",
              body: "Runsheets, templates, QA loops, and workflows that scale without becoming soul-crushing bureaucracy.",
            },
            {
              title: "Creative ops",
              body: "Project flow, team alignment, and delivery systems that get real work out the door—without killing the creative.",
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
  href="mailto:saradjoyce@gmail.com"
  className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
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
